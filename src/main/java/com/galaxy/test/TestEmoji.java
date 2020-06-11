package com.galaxy.test;

import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;

public class TestEmoji {
    public static void main(String[] args) throws UnsupportedEncodingException {
        String str = "\uD83C\uDF6D哈哈\uD83C\uDF39@\uD83C\uDF49\uD83C\uDF53\uD83E\uDD71";
        String gbkStr = new String(str.getBytes("UTF-8"), "UTF-8");
        System.out.println(gbkStr);

        String str1 = "\uD83C\uDF6D哈哈@";

        String t = "这是一个字符串aaa111";

        String utf8 = new String(t.getBytes( "UTF-8"));

        System.out.println(utf8);

        String unicode = new String(utf8.getBytes(),"UTF-8");

        System.out.println(unicode);

        String gbk = new String(unicode.getBytes("GBK"));

        System.out.println(gbk);
    }
}
