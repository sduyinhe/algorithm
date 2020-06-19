package com.galaxy.test;

import com.galaxy.util.UnicodeUtil;
import lombok.Data;

import java.io.*;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Data
public class AbaoLogTest {

    final List<String> sem3Url = new ArrayList<>();
    final List<String> sem1Url = new ArrayList<>();
    public static final String FIND_STR = "社群预约家庭定制调用CRM客户信息同步接口";
    public static final String FIND_STR2 = "请求入参";
    public static final String FIND_STR3 = "HomeCustomizationServiceFacade";

    //读取文件内容
    public String readFileContent(String fileName) {
        File file = new File(fileName);
        BufferedReader reader = null;
        StringBuffer sbf = new StringBuffer();
        try {
            reader = new BufferedReader(new FileReader(file));
            String tempStr;
            while ((tempStr = reader.readLine()) != null) {
                if (tempStr.contains(FIND_STR) && tempStr.contains(FIND_STR2) && tempStr.contains(FIND_STR3)) {
                    //System.out.println(tempStr);
                    // sem3Url.add(URLDecoder.decode(convertPercent(tempStr.substring(tempStr.indexOf(SEM_3_STR), tempStr.indexOf("HTTP/1.1") - 1))));
                    //查找时间
                    String[] strArray = tempStr.split("]");
                    String timeStr = strArray[4].substring(1, strArray[4].indexOf("."));
                    String tmpStr = strArray[8];
                    String telephone = tmpStr.substring(tmpStr.indexOf("用户手机号:") + 6, tmpStr.indexOf("用户手机号:") + 6 + 11);
                    String customerFindStr = "\"customerName\",\"fieldValue\":\"";
                    String customerName = tmpStr.substring(tmpStr.indexOf(customerFindStr) + customerFindStr.length(), tmpStr.indexOf("\"", tmpStr.indexOf(customerFindStr) + customerFindStr.length()));
                    String wechatNickNameFindStr = "wechatNickName\",\"fieldValue\":\"";
                    String wechatNickName = tmpStr.substring(tmpStr.indexOf(wechatNickNameFindStr) + wechatNickNameFindStr.length(), tmpStr.indexOf("\"", tmpStr.indexOf(wechatNickNameFindStr) + wechatNickNameFindStr.length()));
                    System.out.println(timeStr + "," + telephone + "," + customerName + "," + wechatNickName);
                    sem3Url.add(timeStr + "," + telephone.replaceAll("(\\d{3})\\d{4}(\\d{4})", "$1****$2") + "," + UnicodeUtil.decodeUnicode(customerName) + "," + UnicodeUtil.decodeUnicode(wechatNickName));
                    if (tempStr.indexOf(".html?") > 0) {
                        //sem3Url.add(timeStr+","+URLDecoder.decode(convertPercent(tempStr.substring(tempStr.indexOf(SEM_3_STR), tempStr.indexOf(".html?")))));
                    } else {
                        //sem3Url.add(timeStr+","+URLDecoder.decode(convertPercent(tempStr.substring(tempStr.indexOf(SEM_3_STR), tempStr.indexOf(".html")))));
                    }
                }
                sbf.append(tempStr);
            }
            reader.close();
            return sbf.toString();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e1) {
                    e1.printStackTrace();
                }
            }
        }
        return sbf.toString();
    }

    public static void main(String[] args) {

//        String tempStr = "[139.9.96.108][-][05/Jun/2020:07:10:39 +0800][GET /article/article-3-36726.html?utm_source=baidu&utm_medium=WAP%2D%E9%87%8D%E7%96%BE%E9%99%A9%2D%E7%96%91%E9%97%AE%E8%AF%8D&utm_campaign=%E9%87%8D%E7%96%BE%2D%E7%96%91%E9%97%AE&utm_term=%E4%BF%9D%E9%99%A9%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88&utm_content=&bd_vid=9640802065284654751 HTTP/1.1][0.043][500][1537][-][Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36][101.200.216.245, 112.45.122.73]";
//        String str = tempStr.substring(tempStr.indexOf(" +0800") - 20, tempStr.indexOf(" +0800")).replace("2020:","2020 ");
//        System.out.println(str);
//        String tempStr = "GET /article/article-3-36726.html?utm_source=baidu&utm_medium=PC%2D%E9%87%8D%E7%96%BE%E9%99%A9%2D%E7%96%91%E9%97%AE%E8%AF%8D&utm_campaign=%E9%87%8D%E7%96%BE%2D%E7%96%91%E9%97%AE&utm_term=%E5%9B%BD%E5%AE%B6%E4%BF%9D%E9%99%A9%E5%85%AC% HTTP/1.1";
//        System.out.println(URLDecoder.decode(convertPercent(tempStr.substring(tempStr.indexOf(SEM_3_STR), tempStr.indexOf("HTTP/1.1") - 1))));
        AbaoLogTest semTest = new AbaoLogTest();
        File file = new File("D:\\test\\2020年6月18日生产免费表单没入crm查询");
//        Arrays.stream(file.listFiles()).forEach(ele -> {
//            System.out.println(ele.getPath());
//        });
        Arrays.stream(file.listFiles()).forEach(ele -> {
            semTest.readFileContent(ele.getPath());
        });
        // semTest.readFileContent(file.getPath());

        File fileOut = new File("D:\\test\\2020年6月18日生产免费表单没入crm查询\\abao_log_result.txt");
        try {
            if (!fileOut.exists()) {
                fileOut.createNewFile();
            }
            final FileWriter fw = new FileWriter(fileOut);

            semTest.getSem3Url().forEach(ele -> {
                try {
                    fw.write(ele + "\r\n");
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
            fw.flush();
            fw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }


    //判断是否为16进制数 https://blog.csdn.net/woaigaolaoshi/article/details/51160999
    public static boolean isHex(char c) {
        if (((c >= '0') && (c <= '9')) ||
                ((c >= 'a') && (c <= 'f')) ||
                ((c >= 'A') && (c <= 'F')))
            return true;
        else
            return false;
    }

    public static String convertPercent(String str) {
        StringBuilder sb = new StringBuilder(str);

        for (int i = 0; i < sb.length(); i++) {
            char c = sb.charAt(i);
            //判断是否为转码符号%
            if (c == '%') {
                if (((i + 1) < sb.length() - 1) && ((i + 2) < sb.length() - 1)) {
                    char first = sb.charAt(i + 1);
                    char second = sb.charAt(i + 2);
                    //如只是普通的%则转为%25
                    if (!(isHex(first) && isHex(second)))
                        sb.insert(i + 1, "25");
                } else {//如只是普通的%则转为%25
                    sb.insert(i + 1, "25");
                }

            }
        }

        return sb.toString();
    }
}
