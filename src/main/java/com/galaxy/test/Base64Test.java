package com.galaxy.test;

import com.sun.org.apache.xml.internal.security.utils.Base64;

import java.io.*;

public class Base64Test {
    public static void main(String[] args) throws FileNotFoundException {
        byte[] bytes = Base64Test.imgArray("D:/test/allShape.png");
        String s = Base64.encode(bytes);
        System.out.println(s);
    }

    public static byte[] imgArray(String path) {
        //字节输入流
        InputStream inputStream = null;
        //字节缓冲流数组
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            inputStream = new FileInputStream(path);
            byte[] b = new byte[1024];
            int len = -1;
            //循环读取
            while ((len = inputStream.read(b)) != -1) {
                byteArrayOutputStream.write(b, 0, len);
            }
            //返回byteArrayOutputStream数组
            return byteArrayOutputStream.toByteArray();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                //关闭流
                inputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }
}
