package com.galaxy.spark;

import org.apache.spark.ml.linalg.Vector;
import org.apache.spark.ml.linalg.Vectors;

import javax.xml.bind.SchemaOutputResolver;
import java.util.Arrays;

public class VectorTest {
    public static void main(String[] args) {
        Vector vector = Vectors.dense(1,0,3D);
        System.out.println(vector);
        int[] index = {0,1,2};
        double[] value = {1,0,3};
        Vector sparseVector = Vectors.sparse(3,index,value);
        System.out.println(sparseVector);
        System.out.println(sparseVector.toDense().toSparse());
        System.out.println(1E-6);
    }
}
