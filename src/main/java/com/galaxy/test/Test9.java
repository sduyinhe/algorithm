package com.galaxy.test;


import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Test9 {
    public static void main(String[] args) {
        //String str = "/cardnews/search/1500/";
        String str = "<div class=\"text\">\n" +
                " <p>　　对于借款人而言，一旦陷入高利贷的圈套，就会面临无穷无尽的催收，其中电话轰炸比较让人烦恼。那么催收电话有哪些方式呢？电话号码都有什么特点呢？</p> \n" +
                " <br>\n" +
                " <br> \n" +
                " <p>　　<strong>一、改号码软件</strong></p> \n" +
                " <p>　　现在很多催收都会利用这种软件来改号码，让借款人无法知道对方真实的所在地，小王就面临了这样的情况，借了一些714高炮，没想到协商不成对方就直接采用电话骚扰、爆通讯录的方式，每天都会接到来自广东深圳、浙江杭州、辽宁鞍山、江苏徐州等地的座机号码，内容无非就是催促尽快还款，每次号码都不同，举报投诉效果不好。</p> \n" +
                " <p>　　温馨提醒：这些骚扰电话很可能是催收人员通过改号软件，更改了来电显示号码。</p> \n" +
                " <br>\n" +
                " <br> \n" +
                " <p>　　<strong>二、第三方催收公司</strong></p> \n" +
                " <p>　　很多网贷在借款人逾期不还的情况下，会把债务委托给第三方催收公司，按回款提成，所以这些催收公司会采用各种各样的办法骚扰，比如电话轰炸、爆通讯录、P图群发等。</p> \n" +
                " <p>　　除了恶意骚扰外，这些催收一般会采用固定的座机拨打电话，目的是催促你尽快还款，这时候可以尝试与催收进行协商，否则的话直接举报到12321，能有效的屏蔽固定号码。</p> \n" +
                " <br>\n" +
                " <br> \n" +
                " <p>　　<strong>三、网贷公司</strong></p> \n" +
                " <p>　　如果是网贷公司内部催收，直接屏蔽掉这些号码就可以了，如果有意愿还款，可以协商。小编建议大家，越是违法贷款公司，越不接受协商，可以收集相关证据报警求助。</p>\n" +
                "</div>";

        Document document = Jsoup.parse(str);
        Elements divElements = document.getElementsByTag("div");
        divElements.get(0).getElementsByTag("p").get(0).remove();
        String contentHtml = divElements.get(0).html();
        System.out.println(contentHtml.substring(contentHtml.indexOf("<p>")));

    }
}
