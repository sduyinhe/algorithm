package com.galaxy.algorithm;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

public class ByteAndIOStream {
    public static void main(String[] args) throws IOException {
        String str = "abcdef";
        InputStream inputStream = new ByteArrayInputStream(str.getBytes());

        byte[] bytes = new byte[100];
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        int length = 0;
        while ((length = inputStream.read(bytes, 0, 100))>0) {
            outputStream.write(bytes, 0, length);
        }
        byte[] resultBytes = outputStream.toByteArray();

        System.out.println(resultBytes.length);
        System.out.println(new String(outputStream.toByteArray()));
        System.out.println(new String(resultBytes));

    }
}
