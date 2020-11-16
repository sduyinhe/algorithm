package com.galaxy.test;

import java.util.ArrayList;
import java.util.List;

public class test28 {
    public static void main(String[] args) {
        List<String> ss= new ArrayList<>();
        ss.add("2");
        ss.add("4");
        System.out.println(ss.stream().reduce(new StringBuilder(), (sb, str) ->
                sb.append("policyStatuses=").append(str).append("&"), StringBuilder::append).toString());
    }
}
