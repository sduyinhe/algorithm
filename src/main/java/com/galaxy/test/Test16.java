package com.galaxy.test;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Test16 {
    public static void main(String[] args) {

//        double num = 111231.5585;
//        BigDecimal b = new BigDecimal(num);
//
//        //保留2位小数
//        double result = b.setScale(1, BigDecimal.ROUND_HALF_UP).doubleValue();
//
//        System.out.println(result); //111231.56
//        System.out.println(b.setScale(1, BigDecimal.ROUND_HALF_UP).toString());
        List<String> list = new ArrayList<>();
        list.add("hello");
        list.add("world");
        list = list.stream().collect(Collectors.toList());
        list.remove(0);
        System.out.println(list);
    }
}
