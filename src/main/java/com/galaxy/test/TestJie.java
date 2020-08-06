package com.galaxy.test;

import com.galaxy.util.AESUtils;

public class TestJie {
    public static void main(String[] args) {
        String key = "1a2!3344bbfjsl#$";
        String tmpStr = "18ACP6NzSnYbUbHBx0DDVQ==";
        System.out.println(AESUtils.decrypt(tmpStr, key));
    }
}
