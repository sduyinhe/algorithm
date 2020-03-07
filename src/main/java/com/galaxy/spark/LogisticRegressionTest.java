/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.galaxy.spark;

import org.apache.spark.SparkConf;
import org.apache.spark.SparkContext;

// $example on$
import scala.Tuple2;

import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.mllib.classification.LogisticRegressionModel;
import org.apache.spark.mllib.classification.LogisticRegressionWithLBFGS;
import org.apache.spark.mllib.evaluation.MulticlassMetrics;
import org.apache.spark.mllib.regression.LabeledPoint;
import org.apache.spark.mllib.util.MLUtils;

import java.util.Arrays;
// $example off$

/**
 * Example for LogisticRegressionWithLBFGS.
 */
public class LogisticRegressionTest {
    public static void main(String[] args) {
        SparkConf conf = new SparkConf().setAppName("JavaLogisticRegressionWithLBFGSExample").setMaster("local");
        SparkContext sc = new SparkContext(conf);
        sc.setLogLevel("warn");
        // $example on$
        String path = "F:/test/mllib/sample_libsvm_data.txt";
        JavaRDD<LabeledPoint> data = MLUtils.loadLibSVMFile(sc, path).toJavaRDD();

        // Split initial RDD into two... [60% training data, 40% testing data].
        JavaRDD<LabeledPoint>[] splits = data.randomSplit(new double[]{0.7, 0.3}, 11L);
        JavaRDD<LabeledPoint> training = splits[0].cache();
        JavaRDD<LabeledPoint> test = splits[1];

        // Run training algorithm to build the model.
        LogisticRegressionModel model = new LogisticRegressionWithLBFGS()
                .setNumClasses(20)
                .run(training.rdd());

        // Compute raw scores on the test set.
        JavaPairRDD<Object, Object> predictionAndLabels = test.mapToPair(p ->
                new Tuple2<>(model.predict(p.features()), p.label()));
        predictionAndLabels.foreach(ele -> System.out.println(ele));
        // Get evaluation metrics.
        MulticlassMetrics metrics = new MulticlassMetrics(predictionAndLabels.rdd());
        double accuracy = metrics.accuracy();
        double[] labels = metrics.labels();
        for (int i = 0; i < labels.length; i++) {
            System.out.println("label=" + labels[i]);
        }

        System.out.println("Accuracy = " + accuracy + ";1precision = " + metrics.precision(1D) + ";1recall = " + metrics.recall(1D));
        System.out.println("0precision = " + metrics.precision(0D) + ";0recall = " + metrics.recall(0D));

        // Save and load model
//        model.save(sc, "F:/test/mllib/javaLogisticRegressionWithLBFGSModel");
        LogisticRegressionModel sameModel = LogisticRegressionModel.load(sc,
                "F:/test/mllib/javaLogisticRegressionWithLBFGSModel");
        // $example off$

        sc.stop();
    }
}
