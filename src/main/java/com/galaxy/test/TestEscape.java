package com.galaxy.test;

import org.apache.commons.lang.StringEscapeUtils;

public class TestEscape {
    public static void main(String[] args) {
        String str = "<!DOCTYPE html><html><head><!--STATUS OK--><meta name=\"referrer\" content=\"always\"><";
        System.out.println(StringEscapeUtils.escapeHtml(str));
    }
}
