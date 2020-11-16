package com.galaxy.test;

import java.lang.reflect.Field;
import java.math.BigDecimal;
import java.math.RoundingMode;

public class Test23 {
    public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
        BigDecimal bigDecimal1 = new BigDecimal(22.22);
        BigDecimal bigDecimal2 = new BigDecimal(22.11);
        System.out.println(bigDecimal1.subtract(bigDecimal2).setScale(2, RoundingMode.HALF_UP).toPlainString());

//        Class cache = Integer.class.getDeclaredClasses()[0]; //1
//        Field myCache = cache.getDeclaredField("cache"); //2
//        myCache.setAccessible(true);//3
//
//        Integer[] newCache = (Integer[]) myCache.get(cache); //4
//        newCache[132] = newCache[133]; //5
//
//        int a = 2;
//        int b = a + a;
//        System.out.printf("%d + %d = %d", a, a, b); //
    }
}
