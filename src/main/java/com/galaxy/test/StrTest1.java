package com.galaxy.test;

public class StrTest1 {
    public static final String SEM_3_STR = "GET /article/article-3-";
    public static void main(String[] args) {
        String str= "[119.3.112.41][-][30/Jun/2020:16:52:32 +0800][GET /article/article-3-36747.html HTTP/1.1][0.053][500][1537][https://www.abaobaoxian.com/article/article-3-36747.html][Mozilla/5.0(compatible;MSIE9.0;WindowsNT6.1;Trident/5.0)][42.236.10.79, 222.138.208.83]";
        String htmlStr = str.substring(str.indexOf(SEM_3_STR), str.indexOf("HTTP/1.1") - 1);
        //sem3Url.add(htmlStr.substring(0, htmlStr.indexOf("?")));
        if(htmlStr.indexOf("?")>0) {
            System.out.println(htmlStr.substring(0, htmlStr.indexOf("?")));
        }else{
            System.out.println(htmlStr);
        }
    }
}
