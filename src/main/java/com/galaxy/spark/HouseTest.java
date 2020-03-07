package com.galaxy.spark;

import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.ml.feature.StandardScaler;
import org.apache.spark.ml.feature.StandardScalerModel;
import org.apache.spark.ml.linalg.DenseVector;
import org.apache.spark.ml.linalg.VectorUDT;
import org.apache.spark.ml.linalg.Vectors;
import org.apache.spark.ml.regression.LinearRegression;
import org.apache.spark.ml.regression.LinearRegressionModel;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;
import scala.Tuple2;

import java.util.Arrays;
import java.util.List;

import static org.apache.spark.sql.functions.col;

/**
 * 是美国加州1990年房屋普查的数据集
 * <p>
 * 1.该地区中心的纬度（latitude）
 * 2.该地区中心的经度（longitude）
 * 3.区域内所有房屋屋龄的中位数（housingMedianAge）
 * 4.区域内总房间数（totalRooms）
 * 5.区域内总卧室数（totalBedrooms）
 * 6.区域内总人口数（population）
 * 7.区域内总家庭数（households）
 * 8.区域内人均收入中位数（medianIncome）
 * 9.该区域房价的中位数（medianHouseValue）
 */
public class HouseTest {
    public static void main(String[] args) {
        //1.观察并了解数据集
        SparkSession sparkSession = SparkSession.builder().appName("Galaxy-HouseTest")
                .master("local").getOrCreate();
        sparkSession.sparkContext().setLogLevel("warn");
        JavaRDD<String> rdd = sparkSession.read().textFile("F:/test/mllib/cal_housing.data").javaRDD();
//        List<String> list = rdd.collect();
//        for (int i = 0; i < list.size(); i++) {
//            System.out.println("============================" + list.get(i));
//        }
        //2.数据清洗
        JavaRDD<Row> rowJavaRDD = rdd.map(str -> RowFactory.create(convertStringToDouble(str.split(","))));
//        List<Row> rowList = rowJavaRDD.collect();
//        for (int i = 0; i < rowList.size(); i++) {
//            System.out.println("====row====================="+rowList.get(i));
//        }

        // List<StructField> structFieldList = Arrays.asList(DataTypes.createStructField("latitude", DataTypes.DoubleType, true));
        List<StructField> structFieldList = Arrays.asList(DataTypes.createStructField("latitude", DataTypes.DoubleType, true),
                DataTypes.createStructField("longitude", DataTypes.DoubleType, true),
                DataTypes.createStructField("housingMedianAge", DataTypes.DoubleType, true),
                DataTypes.createStructField("totalRooms", DataTypes.DoubleType, true),
                DataTypes.createStructField("totalBedrooms", DataTypes.DoubleType, true),
                DataTypes.createStructField("population", DataTypes.DoubleType, true),
                DataTypes.createStructField("households", DataTypes.DoubleType, true),
                DataTypes.createStructField("medianIncome", DataTypes.DoubleType, true),
                DataTypes.createStructField("medianHouseValue", DataTypes.DoubleType, true));
        StructType schema = DataTypes.createStructType(structFieldList);
        //RDD转化为DataFrame
        Dataset<Row> df = sparkSession.createDataFrame(rowJavaRDD, schema);
        //3.数据预处理
        df = df.withColumn("medianHouseValue", col("medianHouseValue").$div(100000));
        //df.show();
        //df.groupBy("housingMedianAge").count().sort("housingMedianAge").show();
        /**
         * 每个家庭的平均房间数：roomsPerHousehold
         * 每个家庭的平均人数：populationPerHousehold
         * 卧室在总房间的占比：bedroomsPerRoom
         */
        df = df.withColumn("roomsPerHousehold", col("totalRooms").$div(col("households")))
                .withColumn("populationPerHousehold", col("population").$div(col("households")))
                .withColumn("bedroomsPerRoom", col("totalBedrooms").$div(col("totalRooms")))
                .select("medianHouseValue", "totalBedrooms", "population", "households", "medianIncome", "roomsPerHousehold",
                        "populationPerHousehold", "bedroomsPerRoom");
        //df.show();
        JavaRDD<Row> dfJavaRDD = df.rdd().toJavaRDD().map(row -> RowFactory.create(row.get(0), new DenseVector(new double[]{(double) row.get(1), (double) row.get(2)
                , (double) row.get(3)
                , (double) row.get(4)
                , (double) row.get(5)
                , (double) row.get(6)
                , (double) row.get(7)})));
        StructType structType2 = new StructType(
                new StructField[]{new StructField("label", DataTypes.DoubleType, true, Metadata.empty()),
                        new StructField("features", new VectorUDT(), true, Metadata.empty())});
        Dataset<Row> df2 = sparkSession.createDataFrame(dfJavaRDD, structType2);
        //df2.show();
        /**
         * StandardScaler类是一个用来讲数据进行归一化和标准化的类。
         * 所谓归一化和标准化,
         * 使得新的X数据集方差为1，均值为0
         */

        StandardScaler standardScaler = new StandardScaler()
                .setInputCol("features")
                .setOutputCol("features_scaled");
        StandardScalerModel standardScalerModel = standardScaler.fit(df2);
        Dataset<Row> standardScalerModel_df = standardScalerModel.transform(df2);
        //standardScalerModel_df.show(5);

        //4.训练模型
        //Dataset<Row>[] dataArray = standardScalerModel_df.randomSplit(new double[]{1});
//        Row[] headRows=(Row[])standardScalerModel_df.take(1);
//        for (int i = 0; i < headRows.length; i++) {
//            System.out.println("======================"+headRows[i]);
//        }

        LinearRegression lr = new LinearRegression()
                .setFeaturesCol("features_scaled").setLabelCol("label")
                .setMaxIter(10).setRegParam(0.3).setElasticNetParam(0.8);
        LinearRegressionModel linearRegressionModel = lr.fit(standardScalerModel_df);
        System.out.println("================================coefficients=" + linearRegressionModel.coefficients() +
                ";Intercept=" + linearRegressionModel.intercept());

        //5.评估模型
        Dataset<Row> predicted = linearRegressionModel.transform(standardScalerModel_df);
        predicted.show();
//        JavaRDD<Row> prediction = predicted.select("prediction").rdd().toJavaRDD();
//        JavaRDD<Row> labels = predicted.select("label").rdd().toJavaRDD();
//        List<Tuple2<Row, Row>> predictionAndLabel = prediction.zip(labels).collect();
//
//        for (int i = 0; i < predictionAndLabel.size(); i++) {
//            Tuple2<Row, Row> tuple2 = predictionAndLabel.get(i);
//            System.out.println("==================================_1=" + tuple2._1 + ";==========================_2=" + tuple2._2);
//        }
    }

    private static Double[] convertStringToDouble(String[] stringArray) {
        Double[] floatArray = new Double[stringArray.length];
        for (int i = 0; i < stringArray.length; i++) {
            String str = stringArray[i];
            floatArray[i] = Double.valueOf(str);
        }
        return floatArray;
    }

}
