package com.galaxy.spark;

import io.netty.util.internal.IntegerHolder;
import lombok.Data;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.function.MapFunction;
import org.apache.spark.sql.*;
import org.apache.spark.sql.streaming.StreamingQuery;
import org.apache.spark.sql.streaming.StreamingQueryException;
import org.apache.spark.sql.streaming.StreamingQueryListener;
import org.apache.spark.sql.streaming.Trigger;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class SparkTest4 {
    public static void main(String[] args) throws AnalysisException, StreamingQueryException {
        SparkSession sparkSession = SparkSession.builder().master("local").appName("SparkTest4").getOrCreate();
        Dataset<Row> df = sparkSession.read().format("json").load("src/main/resources/data/mllib/als/product.json");
        Dataset<Row> df2 = sparkSession.sql("select * from json.`src/main/resources/data/mllib/als/product.json`");
        //df2.write().bucketBy(5,"id").sortBy("productId").saveAsTable("hello");
//        Dataset<Row> df3= sparkSession.read().load("spark-warehouse/hello1");
//        df3.write().partitionBy("id","productId").save("hello3.parquet");
        System.out.println("是否为流：" + df.isStreaming());
        df.withWatermark("eventTime", "10 seconds").dropDuplicates("id");
        //Exception in thread "main" org.apache.spark.sql.AnalysisException: 'writeStream' can be called only on streaming Dataset/DataFrame;
//        StreamingQuery streamingQuery = df.writeStream().trigger(Trigger.ProcessingTime("1 second")).format("parquet").option("path","src/main/resources/data/mllib/als/productStream.json").start();
//        streamingQuery.lastProgress();
        sparkSession.streams().addListener(new StreamingQueryListener() {
            @Override
            public void onQueryStarted(QueryStartedEvent queryStartedEvent) {
                System.out.println("query started, id=" + queryStartedEvent.id());
            }

            @Override
            public void onQueryProgress(QueryProgressEvent queryProgressEvent) {
                System.out.println("query made progress,id=" + queryProgressEvent.progress());
            }

            @Override
            public void onQueryTerminated(QueryTerminatedEvent queryTerminatedEvent) {
                System.out.println("query terminated,id=" + queryTerminatedEvent.id());
            }
        });
        //df3.write().partitionBy("productId").bucketBy(20,"id").saveAsTable("hello1");
        //df.printSchema();
        // df.show();
//        df.createGlobalTempView("people");
//        sparkSession.sql("select * from global_temp.people").show();
//
//        df.createOrReplaceTempView("temp_people");
//        sparkSession.sql("SELECT * FROM Temp_people").show();
//        People people = new People();
//        people.setId(1003);
//        people.setName("赵利");
//        people.setProductId(1003);
//        people.setProductName("中国人寿产品1");
//
//        Encoder<People> personEncoder = Encoders.bean(People.class);
//
//        Dataset<People> peopleDataset = sparkSession.createDataset(Collections.singletonList(people), personEncoder);
//        peopleDataset.show();
//          Encoder<Integer> integerEncoder = Encoders.INT();
//          Dataset<Integer> integerDataset = sparkSession.createDataset(Arrays.asList(1,2,3),integerEncoder);
//          Dataset<Integer> tansformDataset = integerDataset.map((MapFunction<Integer,Integer>) ele->ele+1,integerEncoder);
//          Integer[] array = (Integer[])tansformDataset.collect();
//        for (int i = 0; i < array.length; i++) {
//            System.out.println("得到的结果为："+array[i]);
//        }
//        Encoder<People> peopleEncoder = Encoders.bean(People.class);
//        Dataset<People> peopleDataset = sparkSession.read().json("src/main/resources/data/mllib/als/product.json").as(peopleEncoder);
//        peopleDataset.show();
//        JavaRDD<People> peopleJavaRDD = sparkSession.read().textFile("F:/people.txt").javaRDD().map(line -> {
//            String[] strArray = line.split(",");
//            People people = new People();
//            people.setId(Integer.valueOf(strArray[0]));
//            people.setName(strArray[1]);
//            people.setProductId(Integer.valueOf(strArray[2]));
//            people.setProductName(strArray[3]);
//            return people;
//        });
//
//        Dataset<Row> rowDataset = sparkSession.createDataFrame(peopleJavaRDD,People.class);
//        rowDataset.createOrReplaceTempView("people");
////        Dataset<Row> queryDataset = sparkSession.sql("select * from people a where a.id = 1001");
////        queryDataset.foreach(ele->{
////            System.out.println("name="+ele.<String>getAs(1));
////        });
//        rowDataset.foreach(ele->{
//            System.out.println("name="+ele.<String>getAs("name"));
//       });
//
//        rowDataset.select("name","productId","id").write().save("F:/yhw2.parquet");
//
//        Dataset<Row> df2 = sparkSession.read().load("F:/yhw2.parquet");
//        df2.show();
        /**
         * +---------+---------+----+
         * |     name|productId|  id|
         * +---------+---------+----+
         * |   zhaoli|     1001|1001|
         * |zhangzhan|     1002|1002|
         * +---------+---------+----+
         */
    }

    @Data
    public static class People {
        private Integer id;
        private String name;
        private Integer productId;
        private String productName;
    }
}
