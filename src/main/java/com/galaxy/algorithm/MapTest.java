package com.galaxy.algorithm;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class MapTest {
    public static void main(String[] args) {
        Map<String,String> map = new HashMap<String,String>();
        map.put("1","赵世杰");
        Set<Map.Entry<String,String>>  set = map.entrySet();
        Map.Entry<String,String> entry = set.iterator().next();
        System.out.println(entry.getKey()+"   "+entry.getValue());

    }
}
