package com.galaxy.test;

import org.apache.commons.lang3.StringUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * java 正则表达式
 */
public class PatternTest {
    public static void main(String[] args) {
        //"终身   至30岁  30年"  1 2
        String str = "至30岁";
        String pattern1 = "^([^0-9]*)([0-9]*.*)$";
        //String pattern = "^[1]{1}[0-9]*|86200|82200|76200|74200|72200|70200|68200|66200|64200|62200|60200|58200|56200|54200|50200|66300|60300|56300$";
        // Pattern pattern1 = Pattern.compile(pattern);
        Pattern pattern = Pattern.compile(pattern1);
        Matcher matcher = pattern.matcher(str);
        StringBuffer sb = new StringBuffer();
        //System.out.println(matcher.matches());
        int i=0;
        while (matcher.find()) {
           // String slot = matcher.group(matcher.groupCount());
            String slot = matcher.group(matcher.groupCount());
            if(StringUtils.isEmpty(slot)){
                slot = matcher.group(matcher.groupCount()-1);
            }
            System.out.println("slot:" + slot);
        }
        //System.out.println(Pattern.matches(pattern, "54201"));


//        String pattern1 = "^511[0-9]*$";
//        System.out.println(Pattern.matches(pattern1, "511"));
//
//
//        String pattern2 = "";
//        System.out.println(Pattern.matches(pattern2, ""));
    }
}
