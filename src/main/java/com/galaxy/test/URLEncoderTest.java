package com.galaxy.test;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

public class URLEncoderTest {
    public static void main(String[] args) {
        String test = "%7B%22productId%22%3A149%2C%22agentId%22%3A1%2C%22crmCustomerId%22%3A10269%2C%22productChannelId%22%3A148%2C%22productCode%22%3A%22110055%22%7D";
        try {
            System.out.println(URLDecoder.decode(test,"UTF-8"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
}
