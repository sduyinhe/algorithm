package com.galaxy.spark;

import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import java.util.Arrays;
import java.util.List;

import static org.apache.spark.sql.functions.col;

/**
 * 查询日志文件中的错误信息
 */
public class TextSearchTest {
    public static void main(String[] args) {
        SparkSession sparkSession = SparkSession.builder().appName("Galaxy-TextSearch")
                .master("local").getOrCreate();
        JavaRDD<String> lines = sparkSession.read().textFile("F:/app.log.2019-10-15.0").javaRDD();
        JavaRDD<Row> rowRDD = lines.map(RowFactory::create);
        List<StructField> structFieldList = Arrays.asList(DataTypes.createStructField("line", DataTypes.StringType, true));
        StructType schema = DataTypes.createStructType(structFieldList);
        Dataset<Row> df = sparkSession.createDataFrame(rowRDD, schema);
        Dataset<Row> errors = df.filter(col("line").like("%error%").or(col("line").like("%ERROR%")));
        //错误个数
        System.out.println("=========================错误个数为：" + errors.count());
        //MYSQL的错误信息
        System.out.println("=========================含有mysql的错误个数为：" + errors.filter(col("line").like("MySQL")).count());
        //错误信息
        List<Row> errorList = Arrays.asList((Row[]) errors.collect());
        for (int i = 0; i < errorList.size(); i++) {
            System.out.println("=========================错误信息为：" + errorList.get(i));
        }
    }
}
