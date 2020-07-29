package com.galaxy.util;

import lombok.extern.slf4j.Slf4j;

import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


/**
 * add by yhw 2020年2月27日
 * 各种常见的公共方法都放到这里
 */
@Slf4j
public class CrmCommonUtils {
    public static final List<String> TIME_RANGE_LIST = Arrays.asList(new String[]{
            "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00",
            "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00",
            "16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00"
    });

    /**
     * 脱敏处理
     */
    public static <T> void dealSensitive(boolean isAdmin, T object, String... propertyNames) {

        if (!isAdmin) {
            List<String> propertyList = Arrays.asList(propertyNames);
            propertyList.forEach(propertyName -> {
                //add by yhw 敏感字段替换中间的字符为*
                Class objectClass = object.getClass();
                Field declareField = null;
                try {
                    declareField = objectClass.getDeclaredField(propertyName);
                    declareField.setAccessible(true);
                    Type propertyType = declareField.getType();
                    if (propertyType.getTypeName().contains("String")) {
                        String tmpStr = String.valueOf(declareField.get(object));
                        if (tmpStr != null && !"".equals(tmpStr) && !"null".equals(tmpStr)) {
                            if (tmpStr.length() == 11) {
                                tmpStr = tmpStr.replaceAll("(\\d{3})\\d{4}(\\d{4})", "$1****$2");
                            } else if (tmpStr.length() == 18) {
                                tmpStr = tmpStr.replaceAll("(\\d{4})\\d{10}(\\w{4})", "$1****$2");
                            } else if (tmpStr.length() == 15) {
                                tmpStr = tmpStr.replaceAll("(\\d{4})\\d{7}(\\w{4})", "$1****$2");
                            }
                            declareField.set(object, tmpStr);
                        }
                    }
                } catch (NoSuchFieldException e) {
                    log.error(e.toString());
                } catch (IllegalAccessException e) {
                    log.error(e.toString());
                }
            });
        }
    }

    /**
     * 断言
     *
     * @param condition
     * @param message
     */
    public static void assertConstraint(boolean condition, String message) {
        if (!condition) {
            log.error(message);
        }
    }

    /**
     * 处理浮点数除法
     *
     * @param longValue
     * @param divisor
     * @param scale
     * @return
     */
    public static BigDecimal dealBigDecimal(Long longValue, int divisor, int scale) {
        if (longValue == null || longValue.longValue() == 0) {
            return new BigDecimal(0);
        }
        BigDecimal bigDecimal = new BigDecimal(longValue).divide(new BigDecimal(divisor));
        bigDecimal = bigDecimal.setScale(scale, RoundingMode.HALF_UP);
        return bigDecimal;
    }

    /**
     * 计算虚岁
     *
     * @param birthday
     * @return
     */
    public static int getXuAgeByBirth(Date birthday) {
        int age = 0;
        try {
            Calendar now = Calendar.getInstance();
            now.setTime(new Date());// 当前时间

            Calendar birth = Calendar.getInstance();
            birth.setTime(birthday);

            if (birth.after(now)) {//如果传入的时间，在当前时间的后面，返回0岁
                age = 0;
            } else {
                age = now.get(Calendar.YEAR) - birth.get(Calendar.YEAR);
                if (now.get(Calendar.DAY_OF_YEAR) > birth.get(Calendar.DAY_OF_YEAR)) {
                    age += 1;
                }
            }
            return age;
        } catch (Exception e) {//兼容性更强,异常后返回数据
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * 根据生日计算当前周岁数
     */
    public static int getZhouAgeByBirth(Date birthday) {
        // 当前时间
        Calendar curr = Calendar.getInstance();
        // 生日
        Calendar born = Calendar.getInstance();
        born.setTime(birthday);
        // 年龄 = 当前年 - 出生年
        int age = curr.get(Calendar.YEAR) - born.get(Calendar.YEAR);
        if (age <= 0) {
            return 0;
        }
        // 如果当前月份小于出生月份: age-1
        // 如果当前月份等于出生月份, 且当前日小于出生日: age-1
        int currMonth = curr.get(Calendar.MONTH);
        int currDay = curr.get(Calendar.DAY_OF_MONTH);
        int bornMonth = born.get(Calendar.MONTH);
        int bornDay = born.get(Calendar.DAY_OF_MONTH);
        if ((currMonth < bornMonth) || (currMonth == bornMonth && currDay <= bornDay)) {
            age--;
        }
        return age < 0 ? 0 : age;
    }

}
