package com.galaxy.test;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.*;

public class UserTest {
    public static void main(String[] args) throws IOException {
        System.out.println(System.getProperty("user.dir"));
        ObjectMapper objectMapper = new ObjectMapper();
        List<User> userList = objectMapper.readValue(new File(System.getProperty("user.dir") + "/src/main/java/com/galaxy/test/user.json"), new TypeReference<ArrayList<User>>() {
        });
        userList.addAll(objectMapper.readValue(new File(System.getProperty("user.dir") + "/src/main/java/com/galaxy/test/userGuWen.json"), new TypeReference<ArrayList<User>>() {
        }));

        Collections.sort(userList, new Comparator<User>() {
            @Override
            public int compare(User o1, User o2) {
                return o1.getId().compareTo(o2.getId());
            }
        });

        Map<String, String> pathMap = new TreeMap<>();
        //梧桐树
        String str0 = "https://wx.abaobaoxian.com/#/active/made/578eb0cfaba23bee?channel=44&crmAdviserId=";
        String str1 = "https://wx.abaobaoxian.com/#/active/made/d236ba4ff940e074?channel=44&crmAdviserId=";
        String str9 = "https://wx.abaobaoxian.com/#/active/made/1c8f7d33dd86a94b?channel=44&crmAdviserId=";
        pathMap.put("0元", str0);
        pathMap.put("1元", str1);
        pathMap.put("9.9元", str9);
        //转介绍
        String strJ0 = "https://wx.abaobaoxian.com/#/active/made/578eb0cfaba23bee?channel=22&crmAdviserId=";
        String strJ1 = "https://wx.abaobaoxian.com/#/active/made/d236ba4ff940e074?channel=22&crmAdviserId=";
        String strJ9 = "https://wx.abaobaoxian.com/#/active/made/1c8f7d33dd86a94b?channel=22&crmAdviserId=";
        Map<String, String> pathJMap = new TreeMap<>();
        pathJMap.put("0元", strJ0);
        pathJMap.put("1元", strJ1);
        pathJMap.put("9.9元", strJ9);
        List<String> pathList = Arrays.asList(str0, str1, str9, strJ0, strJ1, strJ9);
        //梧桐树
//        userList.forEach(user -> {
//            Set<Map.Entry<String, String>> sets = pathMap.entrySet();
//            for (Map.Entry<String, String> entry : sets) {
//                System.out.println(user.getId() + "\t" + user.getRealname() + "\t" + entry.getKey() + "\t" + entry.getValue() + user.getId());
//            }
//        });

        //转介绍
        userList.forEach(user -> {
            Set<Map.Entry<String, String>> sets = pathJMap.entrySet();
            for (Map.Entry<String, String> entry : sets) {
                System.out.println(user.getId() + "\t" + user.getRealname() + "\t" + entry.getKey() + "\t" + entry.getValue() + user.getId());
            }
        });
    }

}
