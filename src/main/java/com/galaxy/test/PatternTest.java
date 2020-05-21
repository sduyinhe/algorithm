package com.galaxy.test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * java 正则表达式
 */
public class PatternTest {
    public static void main(String[] args) {
        String pattern = "^[1]{1}[0-9]+$";
        // Pattern pattern1 = Pattern.compile(pattern);
        System.out.println(Pattern.matches(pattern, "1XX23"));


        String pattern1 = "^511[0-9]*$";
        System.out.println(Pattern.matches(pattern1, "511"));


        String pattern2 = "";
        System.out.println(Pattern.matches(pattern2, ""));
    }
}
