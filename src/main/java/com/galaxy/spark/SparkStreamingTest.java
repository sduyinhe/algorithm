package com.galaxy.spark;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.function.FlatMapFunction;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Encoders;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.streaming.Durations;
import org.apache.spark.streaming.api.java.JavaDStream;
import org.apache.spark.streaming.api.java.JavaPairDStream;
import org.apache.spark.streaming.api.java.JavaReceiverInputDStream;
import org.apache.spark.streaming.api.java.JavaStreamingContext;
import org.apache.spark.streaming.flume.FlumeUtils;
import org.apache.spark.streaming.flume.SparkFlumeEvent;
import scala.Tuple2;

import java.util.Arrays;

public class SparkStreamingTest {
    public static void main(String[] args) throws InterruptedException {
        // Create a local StreamingContext with two working thread and batch interval of 1 second
        SparkConf conf = new SparkConf()
                //spark://192.168.187.129:7077
                .setMaster("local[2]")
                .setAppName("NetworkWordCount");
        JavaStreamingContext streamingContext = new JavaStreamingContext(conf, Durations.seconds(10));
        streamingContext.sparkContext().setLogLevel("info");

        JavaReceiverInputDStream<SparkFlumeEvent> lines =
                FlumeUtils.createPollingStream(streamingContext, "192.168.2.81", 41414);

        // Create a DStream that will connect to hostname:port, like localhost:9999
        // JavaReceiverInputDStream<String> lines = streamingContext.socketTextStream("localhost", 9999);
// Split each line into words
        JavaDStream<String> words = lines.flatMap(x -> {
            String line = new String(x.event().getBody().array());
            return Arrays.asList(line.split(" ")).iterator();
        });

        // Count each word in each batch
        JavaPairDStream<String, Integer> pairs = words.mapToPair(s -> new Tuple2<>(s, 1));
        JavaPairDStream<String, Integer> wordCounts = pairs.reduceByKey((i1, i2) -> i1 + i2);

// Print the first ten elements of each RDD generated in this DStream to the console
        wordCounts.print();

        streamingContext.start();              // Start the computation
        streamingContext.awaitTermination();   // Wait for the computation to terminate
    }
}
