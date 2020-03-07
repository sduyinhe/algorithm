package com.galaxy.spark;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

public class SimpleDataOperationTest {
    public static void main(String[] args) {
        SparkSession sparkSession = SparkSession.builder().appName("Galaxy-TextSearch")
                .master("local").getOrCreate();
        String url = "jdbc:mysql://192.168.2.81:3306/abao2?user=root&password=root&useSSL=false&useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&zeroDateTimeBehavior=convertToNull&serverTimezone=GMT%2B8&allowPublicKeyRetrieval=true";
        Dataset<Row> ds = sparkSession.read().format("jdbc").option("url",url)
                .option("dbtable","person_info").load();
        //schema
        System.out.println("ds.printSchema()");
        ds.printSchema();
//        Dataset<Row> genderCounts = ds.groupBy("gender").count();
//        System.out.println("genderCounts.show()");
//        genderCounts.show();
       // genderCounts.write().format("json").save("F:/SimpleDataOperationTest.log");

    }
}
