package com.galaxy.algorithm;

public class HashTest {
    public static void main(String[] args) {
        //String str = "8701:是_8702:0岁";
        String str = "Aa";
        System.out.println(str.hashCode());
        //-323901600
        char[] charArray = str.toCharArray();
        int hashcode = 0;
        int n = charArray.length;
        //str.charAt(0) * 31n-1 + str.charAt(1) * 31n-2 + ... + str.charAt(n-1)
        for (int i = 0; i < n; i++) {
            char tmpChar = charArray[i];

            hashcode += tmpChar * Math.pow(31, (n - 1 - i));
            // hashcode = 31 * hashcode + charArray[i];
        }
        System.out.println("hashcode =" + hashcode);
    }
}
