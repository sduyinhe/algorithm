package com.galaxy.test;

import java.io.IOException;
import java.net.URL;
import java.net.URLConnection;

public class URLConnectionTest {

    public static void main(String[] args) {
        try {
            Integer dataId = 1;
            //URL url = new URL("https://w.url.cn/s/ApapkGr");
            URL url = new URL("https://w.url.cn/s/AsZelVt");
            URLConnection connection = url.openConnection();
            String location = connection.getHeaderField("Location");
            if (location == null) {
                // do nothing
            } else {
                if (location.indexOf("?") != -1) {
                    location += "&crmCustomerId=" + dataId;
                } else {
                    location += "?crmCustomerId=" + dataId;
                }
            }
            System.out.println("方案书处理之后的跳转地址为：" + location);

//            System.out.println(connection.getHeaderField("Location"));
//
//            System.out.println(connection.getHeaderFields());

//                System.out.println("Content-Type: " + connection.getContentType());
//                System.out.println("Content-Length: " + connection.getContentLength());
//                System.out.println("Content-LengthLong: " + connection.getContentLengthLong());
//                System.out.println("Content-encoding: " + connection.getContentEncoding());
//                System.out.println("Date: " + connection.getDate());
//                System.out.println("Expires: " + connection.getExpiration());
//                System.out.println("Last-modified: " + connection.getLastModified());
        } catch (IOException e) {

        }
    }

}
