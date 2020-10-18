package com.galaxy.test;

import java.util.ArrayList;
import java.util.List;

public class Test21 {
    public static void main(String[] args) {
        List<Integer> integerList = new ArrayList<>();
        integerList.add(1);
        integerList.add(2);
        integerList.remove(Integer.valueOf(2));
        System.out.println(integerList);
    }
}
