package com.galaxy.test;

public class Test4 {
    public static void main(String[] args) {

        String tmpProvinceName = "河北";
        String ele = "中国河北邯郸";

        String cityName = ele.substring(ele.indexOf(tmpProvinceName) + tmpProvinceName.length());
        System.out.println(cityName);
    }
}
