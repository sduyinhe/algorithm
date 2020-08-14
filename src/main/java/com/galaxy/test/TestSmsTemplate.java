package com.galaxy.test;

import com.google.common.collect.ImmutableMap;
import org.apache.commons.lang3.StringUtils;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class TestSmsTemplate {
    public static void main(String[] args) {
        String message = "用户${name}（${id}）于${time}投保成功，产品：${product}，保单号：${policy}，保费：1234。";
        Map<String, String> variableMap = ImmutableMap.of("${name}", "杨浩文", "${id}", "1234", "${time}", "2091", "${product}", "妈咪宝贝", "${policy}", "");
        Pattern pattern = Pattern.compile("\\$\\{((\\w*)\\.?(\\w*))}");
        Matcher matcher = pattern.matcher(message);
        while (matcher.find()) {
            String variableName = matcher.group(0);
            String value = variableMap.get(variableName);
            if(StringUtils.isEmpty(value)){
                System.out.println("模板变量"+variableName+"不存在，在请检查！");
            }
            message = message.replace(variableName, value);
        }
        System.out.println(message);
    }
}
