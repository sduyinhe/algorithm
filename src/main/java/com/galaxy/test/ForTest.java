package com.galaxy.test;

/**
 * *******
 * ***#***
 * **###**
 * *#####*
 */
public class ForTest {

    public static void main(String[] args) {
        int n = 7;
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < n; j++) {
                if (j > n / 2 - i && j < n / 2 + i) {
                    System.out.print("#");
                } else {
                    System.out.print("*");
                }
            }
            System.out.println();
        }
    }
}
