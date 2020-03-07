package com.galaxy.spark;

import com.mongodb.spark.MongoSpark;
import com.mongodb.spark.rdd.api.java.JavaMongoRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.bson.Document;

import java.util.Properties;

public class JdbcTest {
    public static void main(String[] args) {
        SparkSession sparkSession = SparkSession.builder().master("local")
                .config("spark.mongodb.input.uri", "mongodb://192.168.2.81:27017/test.quote")
                .appName("jdbcTest").getOrCreate();
        JavaSparkContext jsc = new JavaSparkContext(sparkSession.sparkContext());
//        Dataset<Row> rowDataset = sparkSession.read().format("jdbc").option("url", "jdbc:mysql://192.168.2.81:3306/abao2?user=root&password=root&useSSL=false&useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&zeroDateTimeBehavior=convertToNull&serverTimezone=GMT%2B8")
//                .option("query", "select a.* from product_fee a   join product_fee_rate b on a.id = b.product_fee").load();
//
//        rowDataset.select("id", "original_rate_scale_url").show();

//        Properties properties = new Properties();
//        properties.setProperty("user","root");
//        properties.setProperty("password","root");
//        Dataset<Row> rowDataset1 = sparkSession.read().jdbc("jdbc:mysql://192.168.2.81:3306/abao2?user=root&password=root&useSSL=false&useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&zeroDateTimeBehavior=convertToNull&serverTimezone=GMT%2B8"
//        ,"internal_user",properties);
//        rowDataset1.select("id","account").show();
//
//        Dataset<Row> rowDataset2 = sparkSession.read().format("jdbc").option("url","jdbc:mysql://192.168.2.81:3306/abao2?user=root&password=root&useSSL=false&useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&zeroDateTimeBehavior=convertToNull&serverTimezone=GMT%2B8")
//                .option("dbtable","product_fee").load();
//
//        rowDataset2.select("id","original_rate_scale_url").show();
        //设置连接mongodb
//        Dataset<Row> mongoDataset = sparkSession.read().format("jdbc").option("spark.mongodb.input.uri", "mongodb://192.168.2.81:27017")
//                .option("dbtable", "quote").load();
//        mongoDataset.show();
         JavaMongoRDD<Document> javaMongoRDD = MongoSpark.load(jsc);
        System.out.println("==================="+javaMongoRDD.count());
        System.out.println("==================="+javaMongoRDD.first().toJson());
    }
}
