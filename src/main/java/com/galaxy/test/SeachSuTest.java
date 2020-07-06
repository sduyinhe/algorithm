package com.galaxy.test;

/**
 * //寻找2-100之间的素数：只能被1和本身整除的数字
 */
public class SeachSuTest {
    public static void main(String[] args) {
        boolean isSu = true;
        for (int i = 2; i <= 100; i++) {
            for (int j = 2; j <= i; j++) {
                if (j != i && i % j == 0) {
                    isSu = false;
                    break;
                } else if (j == i) {
                    continue;
                }
            }
            if (isSu) {
                System.out.println("发现素数：" + i);
            }
            isSu = true;
        }
    }
}
