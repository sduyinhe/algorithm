package com.galaxy.test;

/**
 * 交换两个变量 swap，通过亦或的方式进行交换
 * <p>
 * 综上：同一变量与另一变量和其异或值异或等于另一个数，如（a^b）^b=a。
 * 用例：可使用于加密算法某一环节或更多环节，使算法更复杂，不易被破解，安全性更高。
 */
public class Test25 {
    public static void main(String[] args) {
        int a = 3, b = 4;
        a = a ^ b;
        b = b ^ a;
        a = a ^ b;
        System.out.println(" a=" + a + " b=" + b);
    }
}
