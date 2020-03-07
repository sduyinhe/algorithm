package com.galaxy.spark;

import org.apache.spark.Partitioner;
import org.apache.spark.SparkConf;
import org.apache.spark.SparkContext;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.function.Function;
import org.apache.spark.api.java.function.Function2;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.execution.CoalescedPartitioner;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;
import org.apache.spark.storage.StorageLevel;
import org.apache.spark.sql.types.*;
import scala.Tuple2;

import java.util.Arrays;

/**
 * Test of RDD
 */
public class SparkTest2 {
    public static void main(String[] args) {
        SparkConf sparkConf = new SparkConf().setMaster("local").setAppName("SparkTest2");
        ;
        SparkContext sparkContext = new SparkContext(sparkConf);
        SparkSession sparkSession = new SparkSession(sparkContext);
        //JavaRDD<Integer> javaRDD=sparkContext.parallelize(Arrays.asList(1,2,3,4,5),2);
        JavaRDD<String> lines = sparkContext.textFile("F:/test123.txt", 1).toJavaRDD();
        lines.persist(StorageLevel.MEMORY_ONLY());
        lines.cache();
        int length = lines.map(line -> line.length()).reduce((a, b) -> a + b);
        System.out.println("长度为" + length);
        //lines.saveAsObjectFile("F:/rddSaveAsObjectFile.txt");
//        lines.map(new Function<String, Integer>() {
//            public Integer call(String s) {
//                return s.length();
//            }
//        }).reduce(new Function2<Integer, Integer, Integer>() {
//            public Integer call(Integer a, Integer b) {
//                return a + b;
//            }
//        });
        //RDD可以用如下方式打印。DF用show(int nums)来打印
        //lines.take(100).forEach(System.out::println);

//        Tuple2<String,String> tuple2 = new Tuple2<>("key","value");
//        System.out.println(tuple2._1+tuple2._2);
        JavaRDD<String> stringRdd = lines.flatMap(ele -> Arrays.asList(ele.split(",")).iterator());
        JavaPairRDD<String, Integer> javaPairRdd = stringRdd.mapToPair(ele -> new Tuple2<String, Integer>(ele, 1));
        JavaPairRDD<String, Integer> pairRDD = javaPairRdd.reduceByKey((a, b) -> a + b);
        //lines.saveAsSequenceFile("F:/rddSaveAsObjectFile");
        stringRdd.cache();
//        StructType structType = new StructType(new StructField[]{new StructField("key", DataTypes.StringType, true, Metadata.empty()),
//                new StructField("count", DataTypes.StringType, true, Metadata.empty())
//        });
//        JavaRDD<Row> stringRow= stringRdd.map(ele-> RowFactory.create(ele));
//        Dataset<Row> df = sparkSession.createDataFrame(stringRow,structType);
//        df.rdd().toJavaRDD().saveAsObjectFile();

    }
}
