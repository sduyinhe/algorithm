package com.galaxy.algorithm;

import com.alibaba.druid.util.StringUtils;
import com.google.common.collect.Lists;
import org.apache.commons.lang.math.NumberUtils;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * 测试结论，UUID不需要用URLEncoder编码
 */
public class TempTest {
    public static void main(String[] args) {
        String dateStr = "2018-5-1 12:03:02";
        DateTimeFormatter dateTimeFormatter =DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        System.out.println(LocalDateTime.parse(dateStr,dateTimeFormatter));

        String tmpStr = "";
        if (dateStr != null && !"".equals(dateStr)) {
            if (dateStr.length() == 8 && NumberUtils.isNumber(dateStr)) {
                System.out.println(dateStr.substring(0, 4) + "-" + dateStr.substring(4, 6) + "-" + dateStr.substring(6, 8));

                return;
            } else {
                String[] strArr = dateStr.split("/");
                if (dateStr.contains("/")) {
                    strArr = dateStr.split("/");
                } else if (dateStr.contains("-")) {
                    strArr = dateStr.split("-");
                }
                List<String> strList = Lists.newArrayList(strArr);
                tmpStr = strList.stream().map(ele -> {
                    if (ele.length() == 1) {
                        ele = "0" + ele;
                    }
                    return ele;
                }).collect(Collectors.joining("-")).toString();
            }
        }
        System.out.println(tmpStr);
    }
}
