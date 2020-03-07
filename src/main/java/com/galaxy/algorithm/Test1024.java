package com.galaxy.algorithm;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DecimalFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Test1024 {
    public static void main(String[] args) {
//        // 要匹配的字符串
//        String source = "未知";
//        // 将上面要匹配的字符串转换成小写
//        // source = source.toLowerCase();
//        // www.111cn.net 匹配的字符串的正则表达式
//       // String reg = "[\\u4e00-\\u9fa5]{1,5}";
//        String reg = "[男,女,未知]";
//        System.out.println("匹配结果为"+Pattern.matches(reg,source));
//
//        Pattern pattern = Pattern.compile(reg);
//        Matcher m = pattern.matcher(source);
//        System.out.println("匹配结果为"+m.matches());
        System.out.println("10592:男_10593:0周岁_10598:30年_10599:至70周岁".hashCode());
    }

    public static String stringToAscii(String value)
    {
        StringBuffer sbu = new StringBuffer();
        char[] chars = value.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if(i != chars.length - 1)
            {
                sbu.append((int)chars[i]).append(",");
            }
            else {
                sbu.append((int)chars[i]);
            }
        }
        return sbu.toString();
    }
}
