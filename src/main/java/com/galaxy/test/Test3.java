package com.galaxy.test;

public class Test3 {
    public static void main(String[] args) {
        String urlRootPath = "/sr/itg/crm/";
        String path = "/data/nfs/sr/itg/crm/fanganshu.xlsx";
        String resolvePath = path.substring(path.indexOf(urlRootPath) + urlRootPath.length());
        System.out.println(resolvePath);
//        Integer integer = new Integer(5);
//        System.out.println(integer.toString());
    }
}
