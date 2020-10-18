package com.galaxy.test;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Test17 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        today = today.plusDays(5);
        System.out.println(today.getDayOfWeek().getValue());
        //   "date": "9日星期五",
        //                "high": "高温 20℃",
        //                "fengli": "<![CDATA[2级]]>",
        //                "low": "低温 11℃",
        //                "fengxiang": "南风",
        //                "type": "多云"
        System.out.println(isNight());
    }

    public static String getDesc(String low, String high) {
        StringBuffer stringBuffer = new StringBuffer();
        return stringBuffer.append(low.substring(low.indexOf(" ") + 1, low.indexOf("℃"))).append("~").append(high.substring(high.indexOf(" ") + 1)).toString();
    }

    public static boolean isNight() {
        LocalDate localDate = LocalDate.now();
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDateTime morning = LocalDateTime.parse(localDate.format(dateFormatter) + " 06:00:00", dateTimeFormatter);
        LocalDateTime night = LocalDateTime.parse(localDate.format(dateFormatter) + " 18:00:00", dateTimeFormatter);
        return now.isBefore(morning) || now.isAfter(night);
    }
}
