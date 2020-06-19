package com.galaxy.test;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.UUID;

public class TestUrlEncoder {
    public static void main(String[] args) {
        try {
            String crmUserKey = UUID.randomUUID().toString();
            String callBackUrl = "http://dev1.wx.abaobaoxian.com/activie/20200610/form?channel=abao123&crmUserKey=6065dd92-3917-423f-9a18-27d0ca8404a0";
            String str = "mobile=17092166516&amount=1&payOrderId=00000034&channel=abao123&crmUserKey=" + crmUserKey + "&callbackUrl=" + URLEncoder.encode(callBackUrl, "utf-8");

            String urlStr = URLEncoder.encode(str, "utf-8");
            System.out.println(urlStr);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
}
