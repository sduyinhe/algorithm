package com.galaxy.test;

import org.apache.tomcat.jni.Local;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class TestTime {
    public static void main(String[] args) {
        /**
         * 每日0点显示为1440份，优惠倒计时24:00:00
         * 每分钟减少1份，每日00:01:00时，即显示为剩余1439份，优惠倒计时23:59:00
         */
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        LocalDateTime end = LocalDateTime.parse(LocalDate.now().plusDays(1L).format(dateFormatter) + " 00:00:00", dateTimeFormatter);
        LocalDateTime now = LocalDateTime.now();
        //now = LocalDateTime.parse("2020-06-04 23:59:00", dateTimeFormatter);
        Duration duration = Duration.between(now, end);
        LocalDateTime showTime = end.plusMinutes(duration.toMinutes());
        System.out.println(showTime.format(timeFormatter));
        System.out.println("剩余份数：（等于分钟数）"+duration.toMinutes());
    }
}
