package com.galaxy.test;

import com.rabbitmq.tools.json.JSONUtil;

import java.util.Arrays;

public class TestSensitive {
    public static void main(String[] args) {
        //tmpStr.replaceAll('(\\d{3})\\d{4}(\\d{4})', '$1****$2')
//13063719931209****  身份证号最后4位加密展示
        String tmpStr = "130637199312090015";
        if (tmpStr.length() == 18) {
            tmpStr = tmpStr.replaceAll("(\\d{14})\\w{4}", "$1****");
        } else if (tmpStr.length() == 15) {
            tmpStr = tmpStr.replaceAll("(\\d{11})\\w{4}", "$1****");
        }
        System.out.println(tmpStr);

        //投保人信息-邮箱：从第二位开始，后面4位加密展示，加密展示效果示例：1****40@qq.com
        //被保人信息-邮箱：@之前，从第二位开始后面4位加密展示，加密展示效果示例：1****40@qq.com；3**@qq.com
        String tmpMail = "333@gmail.com";
        String suffix = tmpMail.substring(tmpMail.indexOf("@"));
        if (tmpMail.length() >= suffix.length() + 4) {
            tmpMail = tmpMail.replaceAll("(\\w{1})\\w{4}(\\w*)" + suffix, "$1****$2" + suffix);
        } else {
            String tmpStar = "";
            int tmpStarLength = tmpMail.length() - suffix.length() - 1;
            for (int i = 0; i < tmpStarLength; i++) {
                tmpStar += "*";
            }
            tmpMail = tmpMail.replaceAll("(\\w{1})\\w{0,3}" + suffix, "$1" + tmpStar + suffix);
        }

        System.out.println(tmpMail);
    }
}
