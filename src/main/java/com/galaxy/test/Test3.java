package com.galaxy.test;

import java.math.BigDecimal;

public class Test3 {
    public static void main(String[] args) {
//        String urlRootPath = "/sr/itg/crm/";
//        String path = "/data/nfs/sr/itg/crm/fanganshu.xlsx";
//        String resolvePath = path.substring(path.indexOf(urlRootPath) + urlRootPath.length());
//        System.out.println(resolvePath);
////        Integer integer = new Integer(5);
////        System.out.println(integer.toString());
//        System.out.println((String)null);
//        BigDecimal bigDecimal = new BigDecimal("111");
//        System.out.println(bigDecimal.toString());

        //System.out.println(4/5);
        int[][] array = new int[2][2];
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.println("数字的默认值为:" + array[i][j]);
            }
        }
        String str = "hello";
        System.out.println("返回值为"+str.substring(4));
    }
}
