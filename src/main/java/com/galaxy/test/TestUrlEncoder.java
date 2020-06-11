package com.galaxy.test;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.UUID;

public class TestUrlEncoder {
    public static void main(String[] args) {
        String crmUserKey = UUID.randomUUID().toString();
        String str = "mobile=17092166516&amount=1&payOrderId=00000034&channel=abao123&crmUserKey=" + crmUserKey + "&callbackUrl=http://dev1.wx.abaobaoxian.com/activie/20200610/form";
        try {
            String urlStr = URLEncoder.encode(str, "utf-8");
            System.out.println(urlStr);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
}
