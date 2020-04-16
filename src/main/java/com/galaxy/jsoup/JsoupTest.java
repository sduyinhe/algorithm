package com.galaxy.jsoup;

import cn.afterturn.easypoi.cache.manager.POICacheManager;
import cn.afterturn.easypoi.excel.ExcelXorHtmlUtil;
import cn.afterturn.easypoi.excel.entity.ExcelToHtmlParams;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;

public class JsoupTest {
    public static void main(String[] args) throws IOException, InvalidFormatException {
//        Document document = Jsoup.connect("http://www.baidu.com/").data("query", "Java")
//                .userAgent("Mozilla")
//                .cookie("auth", "token")
//                .timeout(3000)
//                .post();
        //document.getE

//        Workbook workbook = WorkbookFactory.create(POICacheManager.getFile("E:/test/现有保单分析表yhw.xlsx"));
//        int sheetCount = workbook.getNumberOfSheets();
//        String result = "";
//        for (int i = 0; i < sheetCount; i++) {
//            //ExcelXorHtmlUtil每次转换得到的样式名称不一样，所以style必须带着返回前端
//            result += dealSheet(workbook.getSheetAt(i).getSheetName(), ExcelXorHtmlUtil.excelToHtml(new ExcelToHtmlParams(workbook, i)));
//        }
//
//        File file1 = new File("C:\\Users\\cheche\\Desktop\\test4.html");
//        FileOutputStream outputStream = new FileOutputStream(file1);
//        byte[] bytes = result.getBytes();
//        System.out.println("字节数：" + bytes.length);
//        outputStream.write(bytes, 0, bytes.length);
//        outputStream.flush();
//        outputStream.close();
        String txt ="";
        JsoupTest.dealImage("https://dev1.wx.abaobaoxian.com","<div></div><p>少时诵诗书</p><p>yyyyyyny<img src=\"/sr/itg/abao/cms/www/202004/15094309lxgl.png\" style=\"max-width: 750px; width: 368px; height: 164px;\" width=\"368\" height=\"164\"/>&nbsp; &nbsp; &nbsp; asdfadffdaf&nbsp;<img src=\"/sr/itg/abao/cms/www/202004/15094309lxgl.png\" style=\"max-width: 750px; width: 375px; \" width=\"375\" height=\"164\"/> &nbsp; &nbsp; &nbsp;<img src=\"/sr/itg/abao/cms/www/202004/15094309lxgl.png\" style=\"max-width: 750px; width: 375px; \" width=\"375\" height=\"164\"/> &nbsp; &nbsp; &nbsp;<img src=\"/sr/itg/abao/cms/www/202004/15094309lxgl.png\" style=\"max-width: 750px; width: 375px; \" width=\"375\" height=\"164\"/></p><p>阿达的范范</p>");

    }

    private static String dealSheet(String sheetName, String html) throws IOException {
        Document document = Jsoup.parse(html, "html");
        Elements elements = document.select("style");

        elements.html(elements.html().replaceFirst("#000000", "#FFFFFF"));

        Elements tr = document.select("tr");
        dealTdColor(tr);

        Element td1 = tr.get(0).select("td").get(0);

        td1.attr("style", "background:rgba(41,64,95,1);font-size:14px;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:rgba(255,255,255,1);line-height:37px;text-align:left");
        td1.text("被保险人：" + sheetName);
        String divStyle = tr.last().attr("style");
        String divStr = "";
        if (divStyle == null || "".equals(divStyle)) {
            divStr = "<div style='height:22px'></div>";
        } else {
            divStr = "<div style='" + divStyle + "'></div>";
        }

        //table更改宽度，4.1.3的easypoi处理excel宽度有问题，要再除以2
        Elements tables = document.select("table");
        tables.attr("width", String.valueOf(Integer.parseInt(tables.attr("width").replace("px;", "")) / 2));

        //table下面增加高度为30的空div
        String strAll = document.select("style").outerHtml() + document.select("table").outerHtml() + divStr;
        return strAll;
    }

    private static void dealTdColor(Elements trs) {
        int rowspan = 0;
        boolean applicantRowFlag = false;
        for (int i = 0; i < trs.size(); i++) {
            Elements tds = trs.get(i).select("td");

            for (int j = 0; j < tds.size(); j++) {
                Element tmpTd = tds.get(j);
                if (i <= 3) {
                    //处理颜色
                    tmpTd.attr("style", "background:rgba(58,143,255,1)");
                } else if (i > 3) {
                    if ("投 保 人".equals(tmpTd.text())) {
                        applicantRowFlag = true;
                    }
                    if (j == 0 && rowspan == 0) {
                        if (applicantRowFlag == false) {
                            tmpTd.attr("style", "background:rgba(58,143,255,1)");

                            String rowspanStr = tmpTd.attr("rowspan");
                            rowspan = rowspanStr == null || "".equals(rowspanStr) ? 0 : Integer.parseInt(rowspanStr);
                        } else {
                            tmpTd.attr("style", "background:rgba(67,122,197,1)");
                        }
                    } else if (j > 0 || (j == 0 && rowspan > 0)) {
                        if (applicantRowFlag == false) {
                            if (i % 2 == 0) {
                                tmpTd.attr("style", "background:rgba(58,143,255,0.14)");
                            } else {
                                tmpTd.attr("style", "background:rgba(58,143,255,0.1)");
                            }
                        } else {
                            tmpTd.attr("style", "background:rgba(67,122,197,0.2)");
                        }
                    }
                }
            }

            if (rowspan > 0) {
                rowspan--;
            }
        }
    }

    public static void dealImage(String domainNoRest, String txt) {
        long startTime = System.currentTimeMillis();
        Document document = Jsoup.parse(txt);
        Elements elements = document.select("img");
        elements.forEach(ele -> {
            ele.attr("style", "width:100%");
            ele.attr("src", domainNoRest + ele.attr("src"));
        });

        System.out.println(document.body().html());
        System.out.println("耗时："+ (System.currentTimeMillis()-startTime));
    }
}
