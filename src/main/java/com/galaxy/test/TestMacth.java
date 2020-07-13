package com.galaxy.test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class TestMacth {
    public static void main(String[] args) {
        //String url = "http://baoxian.pingan.com?WT.mc_id=T00-BD-HYDT-XZ20191217-GW+JP-023&WT.srch=1";
        String url = "https://baoxian.pingan.com?WT.mc_id=T00-BD-HYDT-XZ20191217-GW+JP-023&WT.srch=1";
        Pattern pattern = Pattern.compile("([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+)(\\?|\\/)");
        Matcher matcher = pattern.matcher(url);
        System.out.println(matcher.matches());
        while (matcher.find()) {
            String slot = matcher.group(1);
            System.out.println(slot);
        }
    }
}
