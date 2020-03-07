package com.galaxy.algorithm;

import com.google.common.base.Functions;

import java.io.*;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class CrmTest {
    public static void main(String[] args) {
        File file = new File("F:/algorithm/222.txt");
        final List<Double> doubleList = new ArrayList<>();
        try {
            BufferedReader bufferedReader = new BufferedReader(new FileReader(file));
            String doubleStr = "";
            while ((doubleStr = bufferedReader.readLine()) != null) {
                if (doubleStr != null && !"".equals(doubleStr)) {
                    doubleList.add(Double.parseDouble(doubleStr));
                }
            }

            //Double sumResult = doubleList.stream().reduce(0D, (a, b) -> a + b);
            System.out.println("汇总结果是：" + doubleList.size());

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        File file2 = new File("F:/algorithm/all.txt");

        List<Double> doubleList2 = null;
        try {
            BufferedReader bufferedReader = new BufferedReader(new FileReader(file2));
            String doubleStr = "";
            doubleList2 = new ArrayList<>();
            while ((doubleStr = bufferedReader.readLine()) != null) {
                if (doubleStr != null && !"".equals(doubleStr)) {
                    doubleList2.add(Double.parseDouble(doubleStr));
                }
            }

            //Double sumResult = doubleList.stream().reduce(0D, (a, b) -> a + b);
            System.out.println("汇总结果是：" + doubleList2.size());

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        //List<Double> doubleList1 = doubleList2.stream().filter(telephone->!doubleList.contains(telephone)).collect(Collectors.toList());
        //System.out.println("不在crm生产环境的号码数量为："+doubleList1.size());
        //Function<? super T, ? extends K> classifier
        Map<String, LongSummaryStatistics> summaryStatisticsMap = doubleList.stream().collect(Collectors.groupingBy(ele -> ele.toString(), Collectors.summarizingLong(ele -> ele.longValue())));
        summaryStatisticsMap.values().stream().filter(ele->ele.getCount()>1).forEach(System.out::println);
        //System.out.println(doubleGroupMap.values());
    }
}
