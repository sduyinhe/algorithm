package com.galaxy.spark;

import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.function.FlatMapFunction;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Encoders;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.streaming.StreamingQuery;
import org.apache.spark.sql.streaming.StreamingQueryException;
import org.apache.spark.storage.StorageLevel;
import scala.Tuple2;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Pattern;

public class SparkTest1 {
    private static final Pattern SPACE = Pattern.compile("\\s+");

    public static void main(String[] args) throws StreamingQueryException {
        if (args.length < 1) {
            System.err.println("Usage: JavaWordCountYhw <file>");
            //System.exit(1);
            args = new String[]{"F:/app.log.2019-10-15.0"};
        }
        //环境变量在重启之后，才能在java中生效，在windows系统是立刻生效的。
        //System.setProperty("hadoop.home.dir", "F:\\hadoop-2.7.3");
        SparkSession spark = SparkSession
                .builder()
                .appName("JavaWordCountYhw")
                //spark://192.168.2.81:7077
                //local 本地开发模式
                .master("local")
                //.config("spark.driver.host", "192.168.3.170")
                .config("spark.executor.memory", "512m")
                .config("spark.driver.memory", "512m")
                //.config("spark.jars", "F:\\cheche\\dev\\algorithm\\target\\algorithm-1.0-SNAPSHOT.jar")
                .getOrCreate();
        spark.sparkContext().setLogLevel("warn");
        Dataset<String> rowDataset = spark.read().textFile(args[0]);
        //使用DF的方式进行词频统计
        Dataset<Row> wordCount = rowDataset.flatMap((FlatMapFunction<String, String>) x -> Arrays.asList(x.split(" ")).iterator(),
                Encoders.STRING()).groupBy("value").count();
        wordCount.show();

        //使用RDD的方式进行词频统计
        JavaRDD<String> lines = spark.read().textFile(args[0]).javaRDD();

        JavaRDD<String> words = lines.flatMap(s -> Arrays.asList(SPACE.split(s)).iterator());

        //words.persist(StorageLevel.MEMORY_ONLY());
        JavaPairRDD<String, Integer> ones = words.mapToPair(s -> new Tuple2<>(s, 1));

        JavaPairRDD<String, Integer> counts = ones.reduceByKey((i1, i2) -> i1 + i2);

        List<Tuple2<String, Integer>> output = counts.collect();
        System.out.println("====================杨浩文测试====================");
        for (Tuple2<?, ?> tuple : output) {
            System.out.println("==========yhw============" + tuple._1() + ": " + tuple._2());
        }
        spark.stop();
//        Dataset<Row> lines = spark
//                .readStream()
//                .format("socket")
//                .option("host", "192.168.2.81")
//                .option("port", 9999)
//                .load();
//
//        // Split the lines into words
//        Dataset<String> words = lines
//                .as(Encoders.STRING())
//                .flatMap((FlatMapFunction<String, String>) x -> Arrays.asList(x.split(" ")).iterator(), Encoders.STRING());
//        Dataset<Row> wordCounts = words.groupBy("value").count();
//
//        // Start running the query that prints the running counts to the console
//        StreamingQuery query = wordCounts.writeStream()
//                .outputMode("complete")
//                .format("console")
//                .start();
//
//        query.awaitTermination();

    }
}
