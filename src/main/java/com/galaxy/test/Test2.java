package com.galaxy.test;

import jodd.util.BCrypt;
import org.springframework.util.Assert;

import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;

public class Test2 {
    public static void main(String[] args) throws UnsupportedEncodingException {
//        double d1=2489.47D;
//        System.out.println(Math.round(2489.5));
//        Object obj = null;
//        String objStr = (String) obj;
//        System.out.println("null".equals(objStr));
        //使用（String)强转，如果是null，还是null，不会存在String.valueOf转化为字符串null的问题。
        String password = "cheche365";
        //salt包含前面的前缀，再加后面的22字符。
        //String salt = "$2a$10$5J1LxQA5mrrHtOKy3Lu.ie";//
        String salt = BCrypt.gensalt();
        //String salt="$2a$10$5J1LxQA5mrrHtOKy3Lu.ie";
//        $2a$10$zriUCxS6i7y4CrcUK5DG/epscN96Jlg4QZRy96P58HE6c/B7FLwNK
//        $2a$10$zriUCxS6i7y4CrcUK5DG/e
        String hashed = BCrypt.hashpw(password, salt);
        System.out.println(hashed + "           salt=" + salt);
//        String hashed1 = BCrypt.hashpw(password, BCrypt.gensalt());
//        System.out.println(hashed1);
//        String hashed2 = BCrypt.hashpw(password, BCrypt.gensalt());
//        System.out.println(hashed2);
//        String hashed3 = BCrypt.hashpw(password, BCrypt.gensalt());
//        System.out.println(hashed3);
//        String inputPassword = "cheche365";
//
//        System.out.println(BCrypt.hashpw(password, hashed));
//        if (BCrypt.checkpw(inputPassword, hashed)) {
//            System.out.println("it matches");
//        } else {
//            System.out.println("it does not match");
//        }

//        String hashed = "eRB0ETbrRXXF/3ibyM3iLabIVGVol7BK";
//        byte[] try_bytes = hashed.getBytes("UTF-8");
//        byte[] hashed_bytes = hashed.getBytes("UTF-8");
//        //hashed_bytes[0] = 1;
//        byte ret = 0;
//        for (int i = 0; i < try_bytes.length; ++i) {
//            ret = (byte) (ret | hashed_bytes[i] ^ try_bytes[i]);
//        }
//        System.out.println(ret == 0);
    }
}
