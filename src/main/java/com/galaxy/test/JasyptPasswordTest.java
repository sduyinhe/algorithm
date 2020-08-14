package com.galaxy.test;

import org.jasypt.util.text.BasicTextEncryptor;

public class JasyptPasswordTest {
    public static void main(String[] args) {
        JasyptPasswordTest jasyptPasswordTest = new JasyptPasswordTest();
        jasyptPasswordTest.decrypt();
    }

    public void encrypt() {
        BasicTextEncryptor textEncryptor = new BasicTextEncryptor();
        //加密所需的salt(盐)
        textEncryptor.setPassword("xxx");
        //要加密的数据（数据库的用户名或密码）
        String username = textEncryptor.encrypt("root");
        String password = textEncryptor.encrypt("123456");
        System.out.println("username:" + username);
        System.out.println("password:" + password);
    }

    public void decrypt() {
        BasicTextEncryptor textEncryptor = new BasicTextEncryptor();
        //加密所需的salt(盐)
        textEncryptor.setPassword("xxx");
        //要加密的数据（数据库的用户名或密码）
        String username = textEncryptor.decrypt("VfYieNb9Sj4a7sphAgxHUA==");
        String password = textEncryptor.decrypt("ZAoBOCyhK5xYtdkogT/Lkw==");
        System.out.println("username:" + username);
        System.out.println("password:" + password);
    }
}
