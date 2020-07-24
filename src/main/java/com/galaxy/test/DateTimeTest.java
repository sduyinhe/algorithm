package com.galaxy.test;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class DateTimeTest {
    public static void main(String[] args) {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate localDate1 = LocalDate.parse("2020-07-17", dateTimeFormatter);
        LocalDate localDate2 = LocalDate.parse("2021-07-16", dateTimeFormatter);
        long y = ChronoUnit.YEARS.between(localDate1, localDate2);        //计算两个日期间的年
        System.out.println("相差的年为" + y);
    }
}
