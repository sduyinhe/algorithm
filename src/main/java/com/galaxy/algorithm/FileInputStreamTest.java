package com.galaxy.algorithm;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class FileInputStreamTest {
    public static void main(String[] args) {
        File file = new File("F:/algorithm/111.txt");
        try {
            BufferedReader bufferedReader = new BufferedReader(new FileReader(file));
            String doubleStr = "";
            List<Double> doubleList = new ArrayList<>();
            while ((doubleStr = bufferedReader.readLine()) != null) {
                if (doubleStr != null && !"".equals(doubleStr)) {
                    doubleList.add(Double.parseDouble(doubleStr));
                }
            }

            Double sumResult = doubleList.stream().reduce(0D, (a, b) -> a + b);
            System.out.println("汇总结果是：" + sumResult);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
