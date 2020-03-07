package com.galaxy.algorithm;

import com.github.binarywang.java.emoji.EmojiConverter;

public class EmojiTest {
    public static void main(String[] args) {
        EmojiConverter emojiConverter = EmojiConverter.getInstance();
        String str = "  An ����awesome ����string with a few ����emojis!";
       // String alias = emojiConverter.toAlias(str);
        String html = emojiConverter.toHtml("阿\uD83C\uDDE8\uD83C\uDDF3贵⛺");
        //System.out.println(str);
        System.out.println(html);
//        System.out.println("EmojiConverterTest.testToAlias()=====>");
//        System.out.println(alias);
    }
}
