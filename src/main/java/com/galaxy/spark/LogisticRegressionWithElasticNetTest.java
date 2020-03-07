package com.galaxy.spark;

import org.apache.spark.ml.classification.LogisticRegression;
import org.apache.spark.ml.classification.LogisticRegressionModel;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

import static org.apache.spark.sql.functions.desc;

public class LogisticRegressionWithElasticNetTest {
    public static void main(String[] args) {
        SparkSession spark = SparkSession
                .builder()
                .appName("JavaLogisticRegressionWithElasticNetExample")
                .master("local")
                .getOrCreate();
        spark.sparkContext().setLogLevel("warn");
        // $example on$
        // Load training data
        Dataset<Row> training = spark.read().format("libsvm")
                .load("F:/test/mllib/sample_libsvm_data.txt");

        LogisticRegression lr = new LogisticRegression()
                .setMaxIter(10)
                .setRegParam(0.3)
                .setThreshold(0.5)
                .setElasticNetParam(0.8);

        // Fit the model
        LogisticRegressionModel lrModel = lr.fit(training);

        // Print the coefficients and intercept for logistic regression
        System.out.println("Coefficients: "
                + lrModel.coefficients() + " Intercept: " + lrModel.intercept());
        //lrModel.transform(training).filter(ele -> (Double) ele.getAs("label") == 1D).sort("probability").show(20);
        Dataset<Row> probability = lrModel.transform(training).filter(ele -> (Double) ele.getAs("label") == 0D).select("probability").sort("probability");
        probability.foreach(ele->{
            System.out.println(ele.getAs("probability").toString());
        });
        // We can also use the multinomial family for binary classification
        LogisticRegression mlr = new LogisticRegression()
                .setMaxIter(10)
                .setRegParam(0.3)
                .setElasticNetParam(0.8)
                .setFamily("multinomial");

        // Fit the model
        LogisticRegressionModel mlrModel = mlr.fit(training);

        // Print the coefficients and intercepts for logistic regression with multinomial family
        System.out.println("Multinomial coefficients: " + lrModel.coefficientMatrix()
                + "\nMultinomial intercepts: " + mlrModel.interceptVector());
        // $example off$

        spark.stop();
    }
}
