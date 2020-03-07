package com.galaxy.spark;

import org.apache.spark.SparkConf;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.streaming.Durations;
import org.apache.spark.streaming.api.java.JavaDStream;
import org.apache.spark.streaming.api.java.JavaPairDStream;
import org.apache.spark.streaming.api.java.JavaReceiverInputDStream;
import org.apache.spark.streaming.api.java.JavaStreamingContext;
import scala.Tuple2;

import java.util.Arrays;

public class DStreamsTest {
    public static void main(String[] args) throws InterruptedException {
        SparkConf sparkConf = new SparkConf().setAppName("DStreamsTest").setMaster("local");
        JavaStreamingContext javaStreamingContext = new JavaStreamingContext(sparkConf, Durations.seconds(10L));
        //不知道为啥，好像连接不上9999端口
        JavaReceiverInputDStream<String> lines = javaStreamingContext.socketTextStream("192.168.2.81", 9999);
        JavaDStream<String> words = lines.flatMap(ele -> Arrays.asList(ele.split(" ")).iterator());
        words.print();
// Count each word in each batch
        JavaPairDStream<String, Integer> pairs = words.mapToPair(s -> new Tuple2<>(s, 1));
        JavaPairDStream<String, Integer> wordCounts = pairs.reduceByKey((i1, i2) -> i1 + i2);
// Print the first ten elements of each RDD generated in this DStream to the console
        wordCounts.print();

        javaStreamingContext.start();
        javaStreamingContext.awaitTermination();
    }
}
