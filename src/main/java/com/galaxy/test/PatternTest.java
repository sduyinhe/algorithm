package com.galaxy.test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * java 正则表达式
 */
public class PatternTest {
    public static void main(String[] args) {
        String pattern = "^[1]{1}[0-9]*|86200|82200|76200|74200|72200|70200|68200|66200|64200|62200|60200|58200|56200|54200|50200|66300|60300|56300$";
        // Pattern pattern1 = Pattern.compile(pattern);
        System.out.println(Pattern.matches(pattern, "54201"));


//        String pattern1 = "^511[0-9]*$";
//        System.out.println(Pattern.matches(pattern1, "511"));
//
//
//        String pattern2 = "";
//        System.out.println(Pattern.matches(pattern2, ""));
    }
}
