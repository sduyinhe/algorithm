package com.galaxy.util;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.util.Random;

/**
 * @author yanghw
 */
@Slf4j
public class AESUtils {

    /**
     * 加密
     *
     * @param sSrc
     * @param sKey
     * @return
     */
    public static String encrypt(String sSrc, String sKey) {
        try {
            if (sKey == null) {
                log.error("Key为空null");
                return null;
            }
            // 判断Key是否为16位
            if (sKey.length() != 16) {
                log.error("Key长度不是16位");
                return null;
            }
            byte[] raw = sKey.getBytes("utf-8");
            SecretKeySpec skeySpec = new SecretKeySpec(raw, "AES");
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");//"算法/模式/补码方式"
            cipher.init(Cipher.ENCRYPT_MODE, skeySpec);
            byte[] encrypted = cipher.doFinal(sSrc.getBytes("utf-8"));

            return new Base64().encodeToString(encrypted);//此处使用BASE64做转码功能，同时能起到2次加密的作用。
        } catch (Exception ex) {
            log.error("error:{}", ex);
            return null;
        }
    }

    // 解密
    public static String decrypt(String sSrc, String sKey) {
        try {
            // 判断Key是否正确
            if (sKey == null) {
                log.error("Key为空null");
                return null;
            }
            // 判断Key是否为16位
            if (sKey.length() != 16) {
                log.error("Key长度不是16位");
                return null;
            }
            byte[] raw = sKey.getBytes("utf-8");
            SecretKeySpec skeySpec = new SecretKeySpec(raw, "AES");
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
            cipher.init(Cipher.DECRYPT_MODE, skeySpec);
            byte[] encrypted1 = new Base64().decode(sSrc);//先用base64解密
            try {
                byte[] original = cipher.doFinal(encrypted1);
                String originalString = new String(original, "utf-8");
                return originalString;
            } catch (Exception e) {
                log.error(e.toString());
                return null;
            }
        } catch (Exception ex) {
            log.error("error:{}", ex);
            return null;
        }
    }

    public static String generateRandomPassword(int length) {
        Random rand = new Random();
        StringBuilder sb = new StringBuilder();
        //产品要求6位纯数字
        //String strAll = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+";
        String strAll = "0123456789";
        for (int i = 0; i < length; i++) {
            int f = (int) (Math.random() * 10);
            sb.append(strAll.charAt(f));
        }
        return sb.toString();
    }
}

