package com.galaxy.test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class StreamTest {
    public static void main(String[] args) {

        List testList = Arrays.asList("hello","world").stream().collect(ArrayList::new, (m,n)->{
            m.add(n+"ddd");
            m.add("sss");
                },
                (list,b) ->{
                    list.add(b);
                });
        System.out.println(testList);
    }
}
