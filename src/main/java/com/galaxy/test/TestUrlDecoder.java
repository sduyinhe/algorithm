package com.galaxy.test;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.UUID;

public class TestUrlDecoder {
    public static void main(String[] args) {
        String str = "mobile%3D17092166516%26amount%3D1%26payOrderId%3D00000034%26channel%3Dabao123%26crmUserKey%3D611d62a0-4132-4ac5-bde7-4454974c50e4%26callbackUrl%3Dhttp%253A%252F%252Fdev1.wx.abaobaoxian.com%252Factivie%252F20200610%252Fform%253Fchannel%253Dabao123%2526crmUserKey%253D6065dd92-3917-423f-9a18-27d0ca8404a0";
        try {
            String urlStr = URLDecoder.decode(str, "utf-8");
            System.out.println(urlStr);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
}
