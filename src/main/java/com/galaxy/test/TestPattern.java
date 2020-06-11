package com.galaxy.test;

public class TestPattern {
    public static void main(String[] args) {
        String str = "[210.51.58.123][-][08/Jun/2020:00:12:40 +0800][GET /article/article-3-36946.html?utm_source=baidu&utm_medium=WAP-%E9%87%8D%E7%96%BE%E9%99%A9-%E7%96%91%E9%97%AE%E8%AF%8D&utm_campaign=%E9%87%8D%E7%96%BE-%E7%96%91%E9%97%AE&utm_term=%E9%87%8D%E7%96%BE%E9%99%A9%E4%B9%B0%E6%B6%88%E8%B4%B9%E5%9E%8B%E8%BF%98%E6%98%AF%E8%BF%94%E8%BF%98%E5%9E%8B&utm_content= HTTP/1.1][30.001][499][0][-][Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C;Baiduspider-ads)AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30][14.215.176.139, 113.96.102.130]";
        //System.out.println(str.substring(str.indexOf("HTTP/1.1][")+10,str.indexOf("]",str.indexOf("HTTP/1.1][")+10)));
        System.out.println(str.substring(str.indexOf("[")+1,str.indexOf("]")));
    }
}
