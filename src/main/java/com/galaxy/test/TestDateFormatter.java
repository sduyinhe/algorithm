package com.galaxy.test;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.TimeZone;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TestDateFormatter {

    /**
     * Dates those have not EXACTLY 24 hours ?
     **/
    public static void testDayTime(TimeZone timeZone) {

        SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        System.out.println("Time Zone is " + timeZone.getDisplayName() + " " + timeZone.getID());

        Calendar start = Calendar.getInstance(timeZone);
        start.setTime(new Date(0));// UTC 1970-01-01

        System.out.println("start=" + fmt.format(start.getTime()));

        long now = Calendar.getInstance(timeZone).getTimeInMillis();
        long year = 1000l * 3600 * 24 * 365;
        long end = now + year * 5;//

        // System.out.println("now=" + now + "\tend" + end);

        System.out.println(new Date(end));
        // time

        boolean find = false;
        for (long i = start.getTimeInMillis(); i < end; i = start.getTimeInMillis()) {
            start.add(Calendar.DATE, 1); // add one day

            if ((start.getTimeInMillis() - i) % (24 * 3600 * 1000L) != 0) {
                System.out.println("start.getTimeInMillis()=" + start.getTimeInMillis());
                find = true;
                System.out.println("from " + fmt.format(new Date(i)) + "to " + fmt.format(start.getTime()) + " has "
                        + (start.getTimeInMillis() - i) + "ms" + "[" + (start.getTimeInMillis() - i) / (3600 * 1000L)
                        + "hours]");
            }
        }
        if (!find) {
            System.out.println("Every day is ok.");
        }
    }

    public static void main(String argv[]) throws Exception {

//        TimeZone timeZone = TimeZone.getDefault();
//        TestDateFormatter.testDayTime(timeZone);
//
//        System.out.println("----------------------------------------------------------------");
//
//        timeZone = TimeZone.getTimeZone("GMT");
//        TestDateFormatter.testDayTime(timeZone);
//
//        System.out.println("----------------------------------------------------------------");
//
//        timeZone = TimeZone.getTimeZone("America/Los_Angeles");
//        TestDateFormatter.testDayTime(timeZone);
      //  System.out.println(TestDateFormatter.conventTime(515545200000L));
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        TimeZone timeZone = TimeZone.getDefault();
        System.out.println(LocalDateTime.now().format(dateTimeFormatter));

        TimeZone.setDefault(TimeZone.getTimeZone("GMT+08:05"));
        System.out.println(LocalDateTime.now().format(dateTimeFormatter));
//        System.out.println(timeZone.useDaylightTime());//Asia/Shanghai
//        System.out.println(TimeZone.getTimeZone("Asia/Shanghai").getDisplayName());
//        System.out.println(TimeZone.getTimeZone("America/Los_Angeles").useDaylightTime());
//        System.out.println("Asia/Shanghai是否使用夏令时："+TimeZone.getTimeZone("Asia/Shanghai").useDaylightTime());
//        System.out.println("Asia/Chongqing是否使用夏令时："+TimeZone.getTimeZone("Asia/Chongqing").useDaylightTime());
//        System.out.println("Asia/Chungking是否使用夏令时："+TimeZone.getTimeZone("Asia/Chungking").useDaylightTime());
//        System.out.println("Asia/Harbin是否使用夏令时："+TimeZone.getTimeZone("Asia/Harbin").useDaylightTime());
//        System.out.println("Asia/Urumqi是否使用夏令时："+TimeZone.getTimeZone("Asia/Urumqi").useDaylightTime());
//        System.out.println("GMT+08是否使用夏令时："+TimeZone.getTimeZone("GMT+08").useDaylightTime());


    }

    //515545200000
    private static String conventTime(long time) {
        // 中国时间
         TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));
        // 美国时间
        //TimeZone.setDefault(TimeZone.getTimeZone("America/Los_Angeles"));
       // TimeZone.setDefault(TimeZone.getTimeZone("GMT"));
        return new Date(time).toLocaleString();
    }
}