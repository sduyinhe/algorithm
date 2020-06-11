package com.galaxy.test;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class TestBigDecimal {
    public static void main(String[] args) {
        int premiumSummary = 482557;
        BigDecimal bigDecimal = new BigDecimal(premiumSummary).divide(new BigDecimal(100));
        bigDecimal = bigDecimal.setScale(2, RoundingMode.HALF_UP);
        System.out.println(bigDecimal);
    }
}
