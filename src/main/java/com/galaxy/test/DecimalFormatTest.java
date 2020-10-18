package com.galaxy.test;

import java.math.BigDecimal;
import java.text.DecimalFormat;

public class DecimalFormatTest {
    public static void main(String[] args) {
        DecimalFormat decimalFormat = new DecimalFormat("#0.00");
        System.out.println(decimalFormat.format(new BigDecimal(123432145.333d)));
    }
}
