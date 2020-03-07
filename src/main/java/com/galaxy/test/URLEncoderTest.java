package com.galaxy.test;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class URLEncoderTest {
    public static void main(String[] args) {
        String test = "车";
        try {
            System.out.println(URLEncoder.encode(test,"UTF-8"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
}
