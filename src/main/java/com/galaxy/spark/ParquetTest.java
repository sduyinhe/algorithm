package com.galaxy.spark;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

public class ParquetTest {
    public static void main(String[] args) {
        SparkSession sparkSession = SparkSession.builder()
               // .enableHiveSupport()
                //.config("spark.sql.hive.metastore.version","1.2.1")
                .master("local").appName("ParquetTest").getOrCreate();
        Dataset<Row> rowDataset = sparkSession.read().parquet("hello3.parquet");
        //rowDataset.show();
        rowDataset.createOrReplaceTempView("hello3");
        //sparkSession.catalog().refreshTable("hello3");
        sparkSession.sql("select sum(id) from hello3").show();
    }
}
