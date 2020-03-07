package com.galaxy.spark;

import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.SparkSession;

import java.util.ArrayList;
import java.util.List;

/**
 * 蒙特卡罗法计算pi值
 */
public class PiTest {
    public static void main(String[] args) {
        SparkSession spark = SparkSession
                .builder()
                .appName("JavaSparkPi")
                //local 本地开发模式
                .master("local")
                .config("spark.executor.memory", "512m")
                .config("spark.driver.memory", "512m")
                .getOrCreate();
        JavaSparkContext jsc = new JavaSparkContext(spark.sparkContext());

        double n = Math.pow(10, 6);
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            list.add(i);
        }
       JavaRDD<Integer> javaRDD = jsc.parallelize(list);
        long acturalCount = javaRDD.filter(a -> {
            double x = Math.random();
            double y = Math.random();
            return x * x + y * y < 1;
        }).count();

        int anotherCount = javaRDD.map(integer -> {
            double x = Math.random();
            double y = Math.random();
            return x * x + y * y < 1 ? 1 : 0;
        }).reduce((a, b) -> a + b);
        double pi = 4 * acturalCount / n;
        double pi2 = 4 * anotherCount / n;
       System.out.println("==============================pi值为:" + pi);
        System.out.println("===========reduce================pi值为:" + pi2);
    }
}
