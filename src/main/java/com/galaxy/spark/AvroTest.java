package com.galaxy.spark;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

public class AvroTest {
    public static void main(String[] args) {
        SparkSession sparkSession = SparkSession.builder().master("local[2]").appName("AvroTest").getOrCreate();
        Dataset<Row> rowDataset = sparkSession.read().format("avro").load("AvroTest.avro");
        //rowDataset.write().format("avro").save("AvroTest.avro");
        rowDataset.show();
        rowDataset.createOrReplaceTempView("yhwTemp");
        sparkSession.catalog().cacheTable("yhwTemp");
        rowDataset.cache();
        sparkSession.catalog().uncacheTable("yhwTemp");
        sparkSession.stop();
        System.out.println("完毕");
    }
}
