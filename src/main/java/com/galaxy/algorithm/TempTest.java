package com.galaxy.algorithm;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.UUID;

/**
 * 测试结论，UUID不需要用URLEncoder编码
 */
public class TempTest {
    public static void main(String[] args) {
        while(true) {
            String str = UUID.randomUUID().toString();
            System.out.println(str);
            try {
                String encodeStr = URLEncoder.encode(str, "utf-8");
                System.out.println(encodeStr);
                if(!str.equals(encodeStr)){
                    break;
                }
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

        }
    }
}
