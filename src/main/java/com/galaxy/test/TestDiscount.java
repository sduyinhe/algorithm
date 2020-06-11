package com.galaxy.test;

import lombok.extern.slf4j.Slf4j;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

@Slf4j
public class TestDiscount {
    public static void main(String[] args) {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        LocalDateTime end = LocalDateTime.parse(LocalDate.now().
                plusDays(1L).format(dateFormatter) + " 00:00:00", dateTimeFormatter);
        LocalDateTime now = LocalDateTime.now();
        Duration duration = Duration.between(now, end);
        LocalDateTime countDownTime = end.plusMinutes(duration.toMinutes());
        log.info("剩余份数：{}，优惠倒计时：{}", duration.toMinutes(), countDownTime.format(timeFormatter));
        System.out.println(LocalDateTime.now().plus(duration.toMillis(), ChronoUnit.MILLIS));
    }
}
