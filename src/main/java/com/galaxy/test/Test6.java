package com.galaxy.test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Test6 {
    public static void main(String[] args) {
        String channel = "g";
        Pattern tempPattern = Pattern.compile("");
        Matcher matcher = tempPattern.matcher(channel);
        System.out.println(matcher.matches());
    }
}
