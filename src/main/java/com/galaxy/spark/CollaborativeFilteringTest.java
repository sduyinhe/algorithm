package com.galaxy.spark;

import java.io.IOException;
import java.io.Serializable;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Functions;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.time.StopWatch;
import org.apache.spark.Partition;
import org.apache.spark.TaskContext;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.ml.evaluation.RegressionEvaluator;
import org.apache.spark.ml.linalg.VectorUDT;
import org.apache.spark.ml.recommendation.ALS;
import org.apache.spark.ml.recommendation.ALSModel;
import org.apache.spark.rdd.RDD;
import org.apache.spark.sql.*;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import scala.collection.Iterator;
import scala.collection.mutable.WrappedArray;

import static org.apache.spark.sql.functions.col;

public class CollaborativeFilteringTest {
    static Logger logger = LoggerFactory.getLogger(CollaborativeFilteringTest.class);

    public static void main(String[] args) throws IOException {

        logger.info("==========================================================hello");
        ObjectMapper objectMapper = new ObjectMapper();
        List<Map<Integer, String>> productList = objectMapper.readValue(productListStr, new TypeReference<List>() {
        });
        Map<Integer, String> productMap = new HashMap<Integer, String>();
        productList.forEach(ele -> {
            productMap.putAll(ele);
        });

        SparkSession spark = SparkSession.builder()
                .master("local").appName("CollaborativeFilteringTest")
//                .config("spark.executor.memory","6g")
//                .config("spark.executor.cores","4")
                .getOrCreate();
        spark.sparkContext().setLogLevel("warn");

//        //基于人口统计学的推荐
//        JavaRDD<User> userRDD = spark
//                .read().textFile("src/main/resources/data/mllib/als/user.dat").javaRDD()
//                .map(User::parseUser);
//        Dataset<Row> userDataset = spark.createDataFrame(userRDD,User.class);
//        userDataset.show();

        JavaRDD<Rating> ratingsRDD = spark
                .read().textFile("src/main/resources/data/mllib/als/sample_productlens_ratings.txt").javaRDD()
                .map(Rating::parseRating);


        Dataset<Row> ratings = spark.createDataFrame(ratingsRDD, Rating.class);
        //Dataset<Row>[] splits = ratings.randomSplit(new double[]{0.8, 0.2});
        Dataset<Row>[] splits = ratings.randomSplit(new double[]{1});
        Dataset<Row> training = splits[0];
        Dataset<Row> test = splits[0];
        training.show();

// Build the recommendation model using ALS on the training data
        ALS als = new ALS()
                .setMaxIter(5)
                .setRegParam(0.01)
                .setUserCol("userId")
                .setItemCol("productId")
                .setRatingCol("rating");
        ALSModel model = als.fit(training);

// Evaluate the model by computing the RMSE on the test data
// Note we set cold start strategy to 'drop' to ensure we don't get NaN evaluation metrics
        model.setColdStartStrategy("drop");
        //Dataset<Row> findUserLikeByUserId = model.recommendForUserSubset(ratings.filter(ele -> ele.getAs("userId").equals(15)), 3);
//        StopWatch stopWatch = new StopWatch();
//        stopWatch.start();

        Dataset<Row> rowDataset = model.recommendForAllUsers(10);
//        model.save("alsModel.obj");
        Dataset<Row> findUserLike = rowDataset.filter(row -> row.getAs("userId").equals(2));
        findUserLike.select("recommendations").printSchema();
        Encoder<RecommendationArray> recommendationEncoder = Encoders.bean(RecommendationArray.class);
        Dataset<RecommendationArray> recommendationDataset = findUserLike.select("recommendations").as(recommendationEncoder);
        recommendationDataset.show();
        recommendationDataset.printSchema();
        recommendationDataset.foreach(ele -> {
            Recommendation[] recommendations = ele.getRecommendations();
            for (int i = 0; i < recommendations.length; i++) {
                System.out.println("产品ID为：" + recommendations[i].getProductId() + ",产品名称为：【" + productMap.get(recommendations[i].getProductId().toString()) + "】,产品评分为：" + recommendations[i].getRating());
            }
        });

        //ALSModel alsModel = ALSModel.read().load("F:\\cheche\\dev\\algorithm\\alsModel.obj");
        //System.out.println("子集推荐产品为:" + findUserLikeByUserId.first().getAs("recommendations"));
//        System.out.println("推荐产品为:" + findUserLike.first().getAs("recommendations"));
//
//        stopWatch.stop();
//        System.out.println("花费时间:" + stopWatch.getTime());
//
//        WrappedArray wrappedArray = findUserLike.first().getAs("recommendations");
//        for (int i = 0; i < wrappedArray.length(); i++) {
//            //wrappedArray.
//        }

//        Dataset<Row> alsData = model.recommendForAllUsers(3);
//        alsData.show();

        StopWatch stopWatch1 = new StopWatch();
        stopWatch1.start();

        int[] maxIterArray = {30, 50, 70, 80};//递归次数
        double[] regParamArray = {0.01};//正则化参数

        double bestRmse = 1D;
        double worstRmse = 0D;
        int bestIter = 0;
        double bestRegParam = 0D;
        int worstIter = 0;
        double worstRegParam = 0D;
        //最优均方根误差查找
        for (int i = 0; i < maxIterArray.length; i++) {
            for (int j = 0; j < regParamArray.length; j++) {
                ALS als1 = new ALS()
                        .setMaxIter(maxIterArray[i])
                        .setRegParam(regParamArray[j])
                        .setUserCol("userId")
                        .setItemCol("productId")
                        .setRatingCol("rating");
                ALSModel model1 = als1.fit(training);
                Dataset<Row> predictions = model1.transform(test);

                RegressionEvaluator evaluator = new RegressionEvaluator()
                        .setMetricName("rmse")
                        .setLabelCol("rating")
                        .setPredictionCol("prediction");
                Double rmse = evaluator.evaluate(predictions);
                System.out.println("均方根误差：Root-mean-square error = " + rmse);
                if (rmse < bestRmse) {
                    bestRmse = rmse;
                    bestIter = maxIterArray[i];
                    bestRegParam = regParamArray[j];
                }
                if (rmse >= worstRmse) {
                    worstRmse = rmse;
                    worstIter = maxIterArray[i];
                    worstRegParam = regParamArray[j];
                }
            }
        }
        stopWatch1.stop();
        System.out.println("模型训练总耗时为" + stopWatch1.getTime() + "毫秒");
        System.out.println("最佳模型递归次数为：" + bestIter + ",正则化参数为：" + bestRegParam + ",均方根误差为：" + bestRmse);
        System.out.println("最坏模型递归次数为：" + worstIter + ",正则化参数为：" + worstRegParam + ",均方根误差为：" + worstRmse);

        //最佳推荐模型推荐的产品
        ALS als2 = new ALS()
                .setMaxIter(bestIter)
                .setRegParam(bestRegParam)
                .setUserCol("userId")
                .setItemCol("productId")
                .setRatingCol("rating");
        ALSModel model2 = als2.fit(training);
        CollaborativeFilteringTest.recommand(model2, productMap);
        //最坏推荐模型推荐的产品
        System.out.println("最坏模型推荐产品为：");
        ALS als3 = new ALS()
                .setMaxIter(worstIter)
                .setRegParam(worstRegParam)
                .setUserCol("userId")
                .setItemCol("productId")
                .setRatingCol("rating");
        ALSModel model3 = als3.fit(training);
        CollaborativeFilteringTest.recommand(model3, productMap);

        // rowDataset.select("recommendations").show();
//        Dataset<Row> predictions = model.transform(test);
//
//        RegressionEvaluator evaluator = new RegressionEvaluator()
//                .setMetricName("rmse")
//                .setLabelCol("rating")
//                .setPredictionCol("prediction");
//        Double rmse = evaluator.evaluate(predictions);
//        System.out.println("均方根误差：Root-mean-square error = " + rmse);
//
//// Generate top 10 product recommendations for each user
//        Dataset<Row> userRecs = model.recommendForAllUsers(10);
//// Generate top 10 user recommendations for each product
//        Dataset<Row> productRecs = model.recommendForAllItems(10);
//
//// Generate top 10 product recommendations for a specified set of users
//        Dataset<Row> users = ratings.select(als.getUserCol()).distinct().limit(3);
//        Dataset<Row> userSubsetRecs = model.recommendForUserSubset(users, 10);
//// Generate top 10 user recommendations for a specified set of products
//        Dataset<Row> products = ratings.select(als.getItemCol()).distinct().limit(3);
//        Dataset<Row> productSubSetRecs = model.recommendForItemSubset(products, 10);
//        //productSubSetRecs.show();

//        Dataset<Row> usersSelect = ratings.select(als.getUserCol()).distinct().limit(1);
//        Dataset<Row> userSubsetRecsSelect = model.recommendForUserSubset(usersSelect, 10);
        /**
         *  userSubsetRecsSelect.printSchema();得到的结构如下
         * root
         *  |-- userId: integer (nullable = false)
         *  |-- recommendations: array (nullable = true)
         *  |    |-- element: struct (containsNull = true)
         *  |    |    |-- productId: integer (nullable = true)
         *  |    |    |-- rating: float (nullable = true)
         */

        //userSubsetRecsSelect.show();
//        RDD<Row> rdd =userSubsetRecsSelect.rdd();
//       List<Row> rowList= rdd.toJavaRDD().collect();

//        userSubsetRecsSelect.foreach(ele->{
//
//            Map<String,String> tmpMap = productList.stream().filter(ele1->ele1.containsKey(productId)).findFirst().get();
//            System.out.println("基于系统过滤模型推给刘金秋的保险产品为"+tmpMap);
//        });
//        System.out.println("基于系统过滤模型推给刘金秋的保险产品为："+rowList);
//        for (int i = 0; i < rowList.size(); i++) {
//            System.out.println("产品ID为："+rowList.get(i).fieldIndex("productId"));
//        }
        //userSubsetRecsSelect.show();
    }


    public static class Rating implements Serializable {
        private int userId;
        private int productId;
        private float rating;
        private long timestamp;

        public Rating() {
        }

        public Rating(int userId, int productId, float rating, long timestamp) {
            this.userId = userId;
            this.productId = productId;
            this.rating = rating;
            this.timestamp = timestamp;
        }

        public int getUserId() {
            return userId;
        }

        public int getProductId() {
            return productId;
        }

        public float getRating() {
            return rating;
        }

        public long getTimestamp() {
            return timestamp;
        }

        public static Rating parseRating(String str) {
            String[] fields = str.split("::");
            if (fields.length != 4) {
                throw new IllegalArgumentException("Each line must contain 4 fields");
            }
            int userId = Integer.parseInt(fields[0]);
            int productId = Integer.parseInt(fields[1]);
            float rating = Float.parseFloat(fields[2]);
            long timestamp = Long.parseLong(fields[3]);
            return new Rating(userId, productId, rating, timestamp);
        }
    }

    @Data
    public static class User implements Serializable {
        private int userId;
        private int gender;
        private int address;

        public User() {
        }

        public User(int userId, int gender, int address) {
            this.userId = userId;
            this.gender = gender;
            this.address = address;
        }

        public static User parseUser(String str) {
            String[] fields = str.split("::");
            if (fields.length != 3) {
                throw new IllegalArgumentException("Each line must contain 3 fields");
            }
            int userId = Integer.parseInt(fields[0]);
            int gender = Integer.parseInt(fields[1]);
            int address = Integer.parseInt(fields[2]);
            return new User(userId, gender, address);
        }
    }

    public static final String userListStr = "[{1:'刘阳'},{2:'唐佳伟'},{3:'张源'},{4:'白华'},{5:'谢添'},{6:'郭敬昆'},{7:'张银倩'},{8:'张鸣'},{9:'张泽群'},{10:'房立忠'},{11:'董设计'},{12:'刘树航'},{13:'林志苏'},{14:'周小娟'},{15:'耿广杨'},{16:'孙征淳'},{17:'陈平萍'},{18:'杜宇'},{19:'陈红洪'},{20:'陈渊'},{21:'王金'},{22:'马鑫'},{23:'陈晓远'},{24:'江川'},{25:'于灏'},{26:'朱白雪'},{27:'李雪'},{28:'刘金秋'},{29:'周权'},{30:'王巍'},{31:'赵高英'},{32:'吴洪赛'},{33:'代园园'},{34:'李军'},{35:'孙立超'},{36:'杨文磊'},{37:'徐伟'},{38:'孙露'},{39:'杨佩'},{40:'郭士英'},{41:'张世武'},{42:'胡新玲'},{43:'凌曼曼'},{44:'王艳'},{45:'陈忠园'},{46:'薄洋'},{47:'温玉蔷'},{48:'刘倩倩'},{49:'王玥迪'},{50:'张思阔'},{51:'侯俊菊'},{52:'邓金伟'},{53:'杨培秀'},{54:'阿拉木斯'},{55:'赵惠'},{56:'田勇'},{57:'张晴晴'},{58:'ddddddd'},{59:'王云dddd'},{60:'解决aaa'},{61:'订单'},{62:'发的都是'},{63:'张三三'},{64:'aaaa'},{65:'小刘'},{66:'dfdsf'},{67:'789'},{68:'系哦啊哈哈'},{69:'666'},{70:'aaaaa'},{71:'张张张'},{72:'111'},{73:'测试测试'},{74:'测试测试'},{75:'测试测试一下'},{76:'测试测试'},{77:'测试你呢'},{78:'666'},{79:'小高'},{80:'测试哥哥'},{81:'rrrr'},{82:'222'},{83:'11'},{84:'张三'},{85:'测试衡衡'},{86:'333'},{87:'测试哈哈哈'},{88:'111'},{89:'测试张三三'},{90:'测试好好好'},{91:'22'},{92:'33'},{93:'测试沟沟壑壑'},{94:'测试我是站三'},{95:'测试张宁'},{96:'测试大幅度'},{97:'测试水电费'},{98:'测试秦伟诚'},{99:'测试金旭尧'},{100:'测试测试'},{101:'测试张小明'},{102:'测试张小明'},{103:'测试朱泽洋'},{104:'测试第三方'},{105:'测试帮帮'},{106:'dfdfd'},{107:'测试金旭尧'},{108:'dffdf'},{109:'测试金旭尧'},{110:'测试朱泽洋'},{111:'测试赵旭尧'},{112:'测试换个环境'},{113:'测试奚怡悦'},{114:'测试元伟誉'},{115:'测试唐清怡'},{116:'测试得黄金百斤'},{117:'测试你几节课'},{118:'测试'},{119:'测试'},{120:'测试高高'},{121:'影子'},{122:'测试不告诉你'},{123:'测试刚回家就叫'},{124:'环保'},{125:'sunmy'},{126:'测试'},{127:'测试朱泽洋'},{128:'sunmy'},{129:'测试不见你'},{130:'环保'},{131:'sunmy'},{132:'测试就会感觉很'},{133:'测试搭积木'},{134:'测试干活'},{135:'测试书翁'},{136:'朱浩浩'},{137:'sunmy'},{138:'测试风格化'},{139:'货币基金军军军'},{140:'环保'},{141:'测试说的范冰冰'},{142:'测试改好价格很高'},{143:'测试复古'},{144:'测试赵旭耀'},{145:'羡羡'},{146:'羡羡'},{147:'啥意思啊'},{148:'不动'},{149:'不动吧'},{150:'羡羡'},{151:'羡羡'},{152:'测试施睿渊'},{153:'王乐帅'},{154:'王乐帅'},{155:'羡羡'},{156:'虐特区'},{157:'升旗'},{158:'羡羡'},{159:'一声'},{160:'天安门'},{161:'羡羡'},{162:'手工'},{163:'夏天'},{164:'刷新'},{165:'夏天'},{166:'夏天'},{167:'幸福'},{168:'小王'},{169:'小王'},{170:'交费'},{171:'王专'},{172:'羡羡'},{173:'羡羡'},{174:'喜羊羊'},{175:'测试符合规范化'},{176:' '},{177:'测试罗佳怡'},{178:' '},{179:'张三'},{180:'稍等'},{181:'钱跃贵'},{182:'钱跃贵'},{183:'测试钱跃贵'},{184:'测试钱跃贵1'},{185:'22'},{313:'孙凡博'},{314:'杨浩文'},{315:'孙凡博'},{316:'王小飞'},{317:'李二'},{318:'小站'}]";
    public static final String productListStr = "[{\"1\":\"北京人寿京康源终身重大疾病保险\"},{\"2\":\"重大医疗保险\"},{\"3\":\"安享一生防癌险\"},{\"4\":\"验证产品清空\"},{\"5\":\"关爱父母001\"},{\"6\":\"家有萌宝001\"},{\"7\":\"单身优选001\"},{\"8\":\"爆款重疾001\"},{\"9\":\"夫妻互保001\"},{\"10\":\"夫妻互保001\"},{\"11\":\"夫妻互保001\"},{\"12\":\"0627家有萌宝\"},{\"13\":\"验证产品5\"},{\"14\":\"家有萌宝002\"},{\"15\":\"家有萌宝003\"},{\"16\":\"家有萌宝003\"},{\"17\":\"家有萌宝005\"},{\"18\":\"家有萌宝006\"},{\"19\":\"家有萌宝007\"},{\"20\":\"家有萌宝008\"},{\"21\":\"家有萌宝009\"},{\"22\":\"家有萌宝010\"},{\"23\":\"家有萌宝011\"},{\"24\":\"家有萌宝012\"},{\"25\":\"验证测试10\"},{\"26\":\"0705新增一个\"},{\"27\":\"新增一个产品\"},{\"28\":\"11111111\"},{\"29\":\"车位费的上方\"},{\"30\":\"新建一个产品test\"},{\"31\":\"0718产品测试\"},{\"32\":\"11\"},{\"33\":\"测试产品类别的筛选\"},{\"34\":\"再测试一个筛选我是一个产品实际销售名称测试下是否可以修改测试下（产品）【名称】，测试。\"},{\"35\":\"新建一个产品家有萌宝的\"},{\"36\":\"关爱父母002222\"},{\"37\":\"较长产品名称（较长产品名称）test【比较长名称】，。\"},{\"38\":\"安享一生防癌医疗险\"},{\"39\":\"哆啦A保重大疾病保险\"},{\"40\":\"安联住院保  计划一\"},{\"41\":\"e生保（保证续保版）\"},{\"42\":\"安联住院保  计划二\"},{\"43\":\"健康一生重大疾病保险\"},{\"44\":\"平安e生保plus  计划三\"},{\"45\":\"平安e生保plus  计划四\"},{\"46\":\"测试下保障方案\"},{\"47\":\"保障方案002\"},{\"48\":\"哆啦A保重大疾病保险-对接\"},{\"49\":\"齐欣回调测试产品001\"},{\"50\":\"齐欣回调产品002\"},{\"51\":\"齐欣回调产品003\"},{\"52\":\"保障方案为空值\"},{\"53\":\"北京人寿logo\"},{\"54\":\"国华人寿logo\"},{\"55\":\"德华安顾人寿logo\"},{\"56\":\"瑞华健康logo\"},{\"57\":\"安心保险logo\"},{\"58\":\"易安保险logo\"},{\"59\":\"泰康在线logo\"},{\"60\":\"国任财险logo\"},{\"61\":\"复星联合logo\"},{\"62\":\"平安健康logo\"},{\"63\":\"大地财险logo\"},{\"64\":\"横琴人寿logo\"},{\"65\":\"华贵人寿logo\"},{\"66\":\"安联保险logo\"},{\"67\":\"华泰财险logo-钱\"},{\"68\":\"三峡人寿logo\"},{\"69\":\"昆仑健康logo-钱\"},{\"70\":\"华安保险logo-钱\"},{\"71\":\"长生人寿logo-钱\"},{\"72\":\"百年人寿logo-钱\"},{\"73\":\"平安人寿logo\"},{\"74\":\"海保人寿logo-钱\"},{\"75\":\"瑞泰人寿logo-钱\"},{\"76\":\"和谐健康logo-钱\"},{\"77\":\"信美相互logo-钱\"},{\"78\":\"弘康人寿logo\"},{\"79\":\"中信保诚人寿logo\"},{\"80\":\"光大永明人寿logo-钱\"},{\"81\":\"招商信诺人寿logo\"},{\"82\":\"亚太保险logo\"},{\"83\":\"工银安盛人寿logo\"},{\"84\":\"“卓越守护”百万住院医疗保险经济款\"},{\"85\":\"上海人寿logo\"},{\"86\":\"陆家嘴国泰人寿logo\"},{\"87\":\"太平洋产险logo\"},{\"88\":\"众安保险logo\"},{\"89\":\"太平人寿logo-钱\"},{\"90\":\"复星保德信logo\"},{\"91\":\"人保寿险logo\"},{\"92\":\"阳光人寿logo-钱\"},{\"96\":\"复星联合logo-新\"},{\"97\":\"安联保险logo-新\"},{\"98\":\"复星联合logo-新1\"},{\"99\":\"安联保险logo-新1\"},{\"101\":\"查看安盛天平-logo\"},{\"103\":\"嘉多保重大疾病保险\"},{\"106\":\"康乐一生（2019版）重大疾病保险\"},{\"107\":\"测试一下\"},{\"108\":\"“卓越守护”百万住院医疗保险经济款\"},{\"111\":\"“卓越守护”百万住院医疗保险尊贵款\"},{\"112\":\"\"},{\"113\":\"\"},{\"114\":\"\"},{\"115\":\"\"},{\"116\":\"测试金旭尧\"},{\"117\":\"dffdf\"},{\"118\":\"测试金旭尧\"},{\"119\":\"测试朱泽洋\"},{\"120\":\"测试赵旭尧\"},{\"121\":\"测试换个环境\"},{\"122\":\"测试奚怡悦\"},{\"123\":\"测试元伟誉\"},{\"124\":\"测试唐清怡\"},{\"125\":\"测试得黄金百斤\"},{\"126\":\"测试你几节课\"},{\"127\":\"测试\"},{\"128\":\"测试\"},{\"129\":\"测试高高\"},{\"130\":\"影子\"},{\"131\":\"测试不告诉你\"},{\"132\":\"测试刚回家就叫\"},{\"133\":\"环保\"},{\"134\":\"sunmy\"},{\"135\":\"测试\"},{\"136\":\"测试朱泽洋\"},{\"137\":\"sunmy\"},{\"138\":\"测试不见你\"},{\"139\":\"环保\"},{\"140\":\"sunmy\"},{\"141\":\"测试就会感觉很\"},{\"142\":\"测试搭积木\"},{\"143\":\"测试干活\"},{\"144\":\"测试书翁\"},{\"145\":\"朱浩浩\"},{\"146\":\"sunmy\"},{\"147\":\"测试风格化\"},{\"148\":\"货币基金军军军\"},{\"149\":\"环保\"},{\"150\":\"测试说的范冰冰\"},{\"151\":\"测试改好价格很高\"},{\"152\":\"测试复古\"},{\"153\":\"测试赵旭耀\"},{\"154\":\"羡羡\"},{\"155\":\"羡羡\"},{\"156\":\"啥意思啊\"},{\"157\":\"不动\"},{\"158\":\"不动吧\"},{\"159\":\"羡羡\"},{\"160\":\"羡羡\"},{\"161\":\"测试施睿渊\"},{\"162\":\"王乐帅\"},{\"163\":\"王乐帅\"},{\"164\":\"羡羡\"},{\"165\":\"虐特区\"},{\"166\":\"升旗\"},{\"167\":\"羡羡\"},{\"168\":\"一声\"},{\"169\":\"天安门\"},{\"170\":\"羡羡\"},{\"171\":\"手工\"},{\"172\":\"夏天\"},{\"173\":\"刷新\"},{\"174\":\"夏天\"},{\"175\":\"夏天\"},{\"176\":\"幸福\"},{\"177\":\"小王\"},{\"178\":\"小王\"},{\"179\":\"交费\"},{\"180\":\"王专\"},{\"181\":\"羡羡\"},{\"182\":\"羡羡\"},{\"183\":\"喜羊羊\"},{\"184\":\"测试符合规范化\"},{\"185\":\" \"},{\"186\":\"测试罗佳怡\"},{\"187\":\" \"},{\"188\":\"张三\"},{\"189\":\"稍等\"},{\"190\":\"钱跃贵\"},{\"191\":\"钱跃贵\"},{\"192\":\"测试钱跃贵\"},{\"193\":\"测试钱跃贵1\"},{\"194\":\"22\"},{\"195\":\"孙凡博\"},{\"196\":\"杨浩文\"},{\"197\":\"孙凡博\"},{\"198\":\"王小飞\"},{\"199\":\"李二\"},{\"200\":\"小站\"}]";


    @Data
    public static class Recommendation implements Serializable {
        /**
         * productId为String时，反序列化会出现乱码的，也就是跟DF中本身的数据类型不符合导致的，改成Integer就没有这个问题了
         */
        private Integer productId;
        private float rating;
    }

    @Data
    public static class RecommendationArray implements Serializable {
        private Recommendation[] recommendations;
    }

    public static void recommand(ALSModel model, Map<Integer, String> productMap) {
        Dataset<Row> rowDataset = model.recommendForAllUsers(10);
//        model.save("alsModel.obj");
        Dataset<Row> findUserLike = rowDataset.filter(row -> row.getAs("userId").equals(2));
        Encoder<RecommendationArray> recommendationEncoder = Encoders.bean(RecommendationArray.class);
        Dataset<RecommendationArray> recommendationDataset = findUserLike.select("recommendations").as(recommendationEncoder);
        recommendationDataset.foreach(ele -> {
            Recommendation[] recommendations = ele.getRecommendations();
            for (int i = 0; i < recommendations.length; i++) {
                System.out.println("产品ID为：" + recommendations[i].getProductId() + ",产品名称为：【" + productMap.get(recommendations[i].getProductId().toString()) + "】,产品评分为：" + recommendations[i].getRating());
            }
        });
    }
}
