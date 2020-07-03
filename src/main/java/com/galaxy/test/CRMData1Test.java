package com.galaxy.test;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.galaxy.config.JsonTest;
import com.galaxy.entity.Area;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

import java.io.*;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@Data
@Slf4j
public class CRMData1Test {

    final List<String> crmDataList = new ArrayList<>();
    public static final String DELIMITER = ",";

    /**
     * 根据表格内用户编号，变更用户入库时间为“来源日期 12:00:00”，变更用户分配时间为“来源日期 12:00:00”
     * 如用户结束码为承保有效，更改结束码变更承保有效的时间为“承保日期 12:00:00”
     * 如用户结束码非承保有效，设置为承保有效，更改结束码变更承保有效的时间为“承保日期 12:00:00”
     *
     * @param fileName
     * @return
     * @throws ParseException
     */
    public String readFileContent(String fileName) throws ParseException {
        File file = new File(fileName);
        BufferedReader reader = null;
        StringBuffer sbf = new StringBuffer();
        try {
            reader = new BufferedReader(new InputStreamReader(new FileInputStream(file), "GB2312"));
            String tempStr;
            int i = 0;
            while ((tempStr = reader.readLine()) != null) {
                if (i == 0) {
                    i++;
                    continue;
                }
                String[] stringArray = tempStr.split(DELIMITER, 19);
//                String outStr = "自有" + DELIMITER + stringArray[0] + DELIMITER + stringArray[3] + DELIMITER + stringArray[4];
//                outStr += DELIMITER + stringArray[7] + DELIMITER + stringArray[5] + DELIMITER + stringArray[2];
//
//                crmDataList.add(outStr);
//                sbf.append(outStr);

                dealModify(stringArray);
                // dealCustomerFamily(stringArray);
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

    public static void main(String[] args) throws ParseException {

//        String tempStr = "[139.9.96.108][-][05/Jun/2020:07:10:39 +0800][GET /article/article-3-36726.html?utm_source=baidu&utm_medium=WAP%2D%E9%87%8D%E7%96%BE%E9%99%A9%2D%E7%96%91%E9%97%AE%E8%AF%8D&utm_campaign=%E9%87%8D%E7%96%BE%2D%E7%96%91%E9%97%AE&utm_term=%E4%BF%9D%E9%99%A9%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88&utm_content=&bd_vid=9640802065284654751 HTTP/1.1][0.043][500][1537][-][Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36][101.200.216.245, 112.45.122.73]";
//        String str = tempStr.substring(tempStr.indexOf(" +0800") - 20, tempStr.indexOf(" +0800")).replace("2020:","2020 ");
//        System.out.println(str);
//        String tempStr = "GET /article/article-3-36726.html?utm_source=baidu&utm_medium=PC%2D%E9%87%8D%E7%96%BE%E9%99%A9%2D%E7%96%91%E9%97%AE%E8%AF%8D&utm_campaign=%E9%87%8D%E7%96%BE%2D%E7%96%91%E9%97%AE&utm_term=%E5%9B%BD%E5%AE%B6%E4%BF%9D%E9%99%A9%E5%85%AC% HTTP/1.1";
//        System.out.println(URLDecoder.decode(convertPercent(tempStr.substring(tempStr.indexOf(SEM_3_STR), tempStr.indexOf("HTTP/1.1") - 1))));
        CRMData1Test semTest = new CRMData1Test();
        File file = new File("D:\\test\\2020年7月2日feature_2186历史数据修复\\modify.csv");
//        Arrays.stream(file.listFiles()).forEach(ele -> {
//            System.out.println(ele.getPath());
//        });
//        Arrays.stream(file.listFiles()).forEach(ele -> {
//            semTest.readFileContent(ele.getPath());
//        });

        semTest.readFileContent(file.getPath());

        File fileOut = new File("D:\\test\\2020年7月2日feature_2186历史数据修复\\result1.txt");
        try {
            if (!fileOut.exists()) {
                fileOut.createNewFile();
            }
            final FileWriter fw = new FileWriter(fileOut);

            semTest.getCrmDataList().forEach(ele -> {
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

    public static final String TEMPLATE_UPDATE_DATA = "update data_data a set a.d8 = '${1}',a.allocate_time='${2}',a.create_time='${3}',a.d13='${4}',a.d4='${5}',a.f33=6,a.f41=601,a.d12='${6}' where a.id = '${7}' and a.delete_flag = 0;";

    /**
     * * 根据表格内用户编号，变更用户入库时间为“来源日期 12:00:00”，变更用户分配时间为“来源日期 12:00:00”
     * * 如用户结束码为承保有效，更改结束码变更承保有效的时间为“承保日期 12:00:00”
     * * 如用户结束码非承保有效，设置为承保有效，更改结束码变更承保有效的时间为“承保日期 12:00:00”
     *
     * @param stringArray
     */
    private void dealModify(String[] stringArray) {
        //获取来源时间stringArray[3]
        //承保日期stringArray[4]
        String inputDate = stringArray[3]+" 12:00:00";
        String underwriteDate = stringArray[4]+" 12:00:00";
        System.out.println(TEMPLATE_UPDATE_DATA.replace("${1}",inputDate).replace("${2}",inputDate)
                .replace("${3}",inputDate).replace("${4}",inputDate).replace("${5}",inputDate)
                .replace("${6}",underwriteDate).replace("${7}",stringArray[0]));

    }
}
