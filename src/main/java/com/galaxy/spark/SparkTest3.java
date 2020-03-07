package com.galaxy.spark;

import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.JavaSparkContext$;
import org.apache.spark.broadcast.Broadcast;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.util.LongAccumulator;

import java.util.Arrays;

/**
 * Java创建ClassTag的方法，我能找到的有三个方法。其中第三种方法，只要需要classtag的地方都可以直接用，参数都不需要。
 * <p>
 * 1：ClassManifestFactory.classType( String.class )。
 * <p>
 * 2：ClassTag$.MODULE$.apply( String.class )。
 * <p>
 * 3：JavaSparkContext$.MODULE$.fakeClassTag( )
 * ————————————————
 * 版权声明：本文为CSDN博主「hhtop112408」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
 * 原文链接：https://blog.csdn.net/hhtop112408/article/details/78338716
 */
public class SparkTest3 {
    public static void main(String[] args) {
        SparkSession sparkSession = SparkSession.builder()
                .master("local").appName("GalaxySparkTest").getOrCreate();
        Broadcast<int[]> broadcast = sparkSession.sparkContext().broadcast(new int[]{5, 6, 7}, JavaSparkContext$.MODULE$.fakeClassTag());
        int[] broadVariables = broadcast.value();
        for (int i = 0; i < broadVariables.length; i++) {
            System.out.println("广播变量值为：" + broadVariables[i]);
        }

        LongAccumulator longAccumulator = sparkSession.sparkContext().longAccumulator();
        JavaSparkContext javaSparkContext = new JavaSparkContext(sparkSession.sparkContext());
        /**
         * (Seq)scala.collection.JavaConverters..MODULE$.asScalaBufferConverter(list).asScala()
         */
        javaSparkContext.parallelize(Arrays.asList(1, 2, 3, 4), 1).foreach(ele -> longAccumulator.add(ele));
        System.out.println("累加器值为：" + longAccumulator.value());

        JavaRDD<String> javaRDD = sparkSession.read().textFile("F:/test123.txt").javaRDD();
        JavaRDD<String> javaRDD1 = javaRDD.map(ele -> {
            longAccumulator.add(2);
            return ele;
        });

        System.out.println("map之后累加器值为：" + longAccumulator.value());
        //javaRDD1 有了动作之后，之前的map才真正得到了执行。如果是javaRDD的动作，那么之前的map不会执行，之前的map不在它的执行链上。
        javaRDD1.collect();
        System.out.println("collect之后累加器值为：" + longAccumulator.value());
    }
}
