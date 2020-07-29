package com.galaxy.test;

public class Test8 {
    public static void main(String[] args) {
        String tmpStr="17092166516";
        System.out.println(tmpStr.replaceAll("((\\d{3})(\\d{4})(\\d{4}))", "$1****$3"));
    }
}
