package com.galaxy.algorithm;


import java.time.LocalDate;

import static java.time.format.TextStyle.FULL;
import static java.util.Locale.CHINA;

/**
 * 如果昨天是明天的话就好了。这样今天就周五了。
 * 问：句子中的今天是周几
 * A.周三
 * B.周四
 * C.周五
 * D.周日
 */
public class BigIntegerTest {
    public static void main(String[] args) {
        LocalDate yesterday;
        LocalDate tomorrow;
        LocalDate today = LocalDate.of(2019, 10, 25);//周五
        tomorrow = today.plusDays(1L);
        yesterday = tomorrow;
        LocalDate actualToday = yesterday.plusDays(1L);
        System.out.println("今天是" + actualToday.getDayOfWeek().getDisplayName(FULL, CHINA));
    }
}
