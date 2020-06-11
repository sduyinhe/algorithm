package com.galaxy.test;

import java.math.BigInteger;
import java.security.MessageDigest;

public class TestSecret {
    public static void main(String[] args) {
        String data = "{\"payOrderId\":\"000000047\",\"payOrderNo\":\"PN10003243412339\",\"paymentAmount\":0.01,\"status\":4,\"payTime\":\"2020-03-04 12:22:34\",\"channel\":\"yhw123\"}";
        long timestamp = 1583463267107L;//我们取你传的时间戳
        String appKey = "chechezhifu";
        String secretKey = "5f28af890cd64d23bc83f1d61b3a0918";//我们取你传的appKey对应的秘钥。
        String str = data + "&timestamp=" + timestamp + "&appKey=" + appKey + "&secretKey=" + secretKey;
        System.out.println(str);
        System.out.println(getMD5String(str));
    }

    String getMD5String1(String str) {
       return null;
    }
    public static String getMD5String(String str) {
        try {
            // 生成一个MD5加密计算摘要
            MessageDigest md = MessageDigest.getInstance("MD5");
            // 计算md5函数
            md.update(str.getBytes());
            // digest()最后确定返回md5 hash值，返回值为8位字符串。因为md5 hash值是16位的hex值，实际上就是8位的字符
            // BigInteger函数则将8位的字符串转换成16位hex值，用字符串来表示；得到字符串形式的hash值
            //一个byte是八位二进制，也就是2位十六进制字符（2的8次方等于16的2次方）
            return new BigInteger(1, md.digest()).toString(16);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}

