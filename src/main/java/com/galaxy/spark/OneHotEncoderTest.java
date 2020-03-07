package com.galaxy.spark;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.ml.feature.*;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;

import static org.apache.spark.sql.functions.*;

public class OneHotEncoderTest {
    public static void main(String[] args) {
        SparkSession sparkSession = SparkSession.builder().master("local")
                .appName("OneHotEncoderTest")
                .getOrCreate();
        sparkSession.sparkContext().setLogLevel("warn");
        //hdfs://localhost:9000/spark/oneHotEncoder.txt
        JavaRDD<OneHot> javaRDD = sparkSession.read().textFile("F:/test/oneHotEncoder.txt").toJavaRDD().map(OneHot::parseRating);

        Dataset<Row> dataset = sparkSession.createDataFrame(javaRDD, OneHot.class);

        dataset.show();
        dataset.sort(desc("city")).show();

        String[] userColumns = {"city", "genderType", "phoneType"};
        Dataset<Row> df = new VectorAssembler().setInputCols(userColumns).setOutputCol("features").setHandleInvalid("skip").transform(dataset);
       // df.show();
        df.withColumn("city",col("phoneType").cast(DataTypes.StringType)).show();

//        StandardScaler scaler = new StandardScaler().setInputCol("features")
//                .setOutputCol("scFeatures").setWithMean(false)
//                .setWithStd(true);
//        StandardScalerModel model = scaler.fit(df);
//        model.transform(df).show(10, false);

        VectorIndexerModel vim = new VectorIndexer().setInputCol("features").
                setOutputCol("featuresIndexed").setMaxCategories(5).fit(df);
        vim.transform(df).show();

        //手动释放内存
        //System.gc();

        df.filter(ele -> (Integer) ele.getAs("city") == 0).select("city", "features").sort("features").show();
        //注意，stringIndexer不是独热编码
        //https://www.cnblogs.com/itboys/p/8392285.html
        StringIndexerModel stringIndexerModel = new StringIndexer().setInputCol("features")
                .setOutputCol("featuresIndexed")
                .setHandleInvalid("error") //skip
                .fit(df);
//        Arrays.asList(stringIndexerModel.labels()).stream().forEach(System.out::println);
        stringIndexerModel.transform(df).show();
        sparkSession.stop();
    }

    @Data
    @AllArgsConstructor
    public static class OneHot {
        Integer city;
        Integer genderType;
        Integer phoneType;

        public static OneHot parseRating(String str) {
            String[] fields = str.split(",");
            if (fields.length != 3) {
                throw new IllegalArgumentException("Each line must contain 3 fields");
            }
            int city = Integer.parseInt(fields[0]);
            Integer genderType;
            if (fields[1] == null || "".equals(fields[1])) genderType = null;
            else
                genderType = Integer.parseInt(fields[1]);
            int phoneType = Integer.parseInt(fields[2]);
            return new OneHot(genderType, city, phoneType);
        }
    }
}
