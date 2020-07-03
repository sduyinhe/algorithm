package com.galaxy.test;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.galaxy.config.JsonTest;
import com.galaxy.entity.Area;
import com.galaxy.entity.CustomerFamily;
import com.galaxy.enumeration.EFamilyMemberType;
import com.galaxy.enumeration.EGender;
import com.galaxy.enumeration.EIncome;
import com.galaxy.util.CrmCommonUtils;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Data
@Slf4j
public class CRMData3Test {

    final List<String> crmDataList = new ArrayList<>();
    public static final String DELIMITER = ",";
    public static List<Area> AREA_LIST;

    /**
     * 来源渠道=自有
     * 入库时间=“表单提交 12:00:00”
     * 手机号=“手机号”
     * 姓名=“姓名”
     * 居住地=“地区”
     * 性别=“性别”
     * 微信昵称=“微信昵称”
     *
     * @param fileName
     * @return
     * @throws ParseException
     */
    public String readFileContent(String fileName) throws ParseException {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            AREA_LIST = objectMapper.readValue(JsonTest.readJsonFile("D:/test/AreaConfig.json"), new TypeReference<ArrayList<Area>>() {
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
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
                String outStr = "自有" + DELIMITER + stringArray[0] + DELIMITER + stringArray[3] + DELIMITER + stringArray[4];
                outStr += DELIMITER + stringArray[7] + DELIMITER + stringArray[5] + DELIMITER + stringArray[2];

                crmDataList.add(outStr);
                sbf.append(outStr);

                dealProvinceAndCityAndTime(stringArray);
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
        CRMData3Test semTest = new CRMData3Test();
        File file = new File("D:\\test\\2020年7月2日feature_2186历史数据修复\\3.csv");
//        Arrays.stream(file.listFiles()).forEach(ele -> {
//            System.out.println(ele.getPath());
//        });
//        Arrays.stream(file.listFiles()).forEach(ele -> {
//            semTest.readFileContent(ele.getPath());
//        });

        semTest.readFileContent(file.getPath());

        File fileOut = new File("D:\\test\\2020年7月2日feature_2186历史数据修复\\result3.txt");
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

    public static final String TEMPLATE_UPDATE_DATA = "update data_data a set a.f7=${1},a.f42=${2},a.create_time=d4,a.d13=d4,v20='${4}' where a.v2 = '${3}';";
    public static final String TEMPLATE_UPDATE_DATA_NO_AREA = "update data_data a set a.create_time=d4,a.d13=d4,v20='${4}' where a.v2 = '${3}';";

    /**
     * 处理省份和地市、入库时间、创建时间
     *
     * @param stringArray
     */
    private void dealProvinceAndCityAndTime(String[] stringArray) {
        //获取省份 stringArray[8]
        if (StringUtils.isNotEmpty(stringArray[8])) {
            StringBuffer cityIdBuffer = new StringBuffer();
            Area province = AREA_LIST.stream().filter(provinceEle -> stringArray[8].replace("中国", "").
                    startsWith(provinceEle.getName().replace("省", "").replace("市", ""))
                    && provinceEle.getType().equals(Area.Type.PROVINCE.getValue())).findFirst().orElse(null);
            if (province != null) {
                String tmpProvinceName = province.getName().replace("省", "").replace("市", "");
                StringBuffer cityNameTempBuffer = new StringBuffer("");
                if ("北京上海天津重庆".contains(tmpProvinceName)) {
                    cityNameTempBuffer.append(tmpProvinceName);
                } else {
                    //获取居住地
                    cityNameTempBuffer.append(stringArray[8].substring(stringArray[8].indexOf(tmpProvinceName) + tmpProvinceName.length()));
                }
                if (StringUtils.isNotEmpty(cityNameTempBuffer.toString())) {
                    Area livingCity = AREA_LIST.stream().filter(cityEle -> cityEle.getName().startsWith(cityNameTempBuffer.toString())
                            && cityEle.getType().equals(Area.Type.CITY.getValue())).findFirst().orElse(null);
                    if (livingCity != null) {
                        cityIdBuffer.append(livingCity.getId());
                    }
                }
                System.out.println(TEMPLATE_UPDATE_DATA.replace("${1}", province.getId().toString()).replace("${2}", cityIdBuffer.toString())
                        .replace("${3}", stringArray[3]).replace("${4}", stringArray[5]));
            }else{
                System.out.println(TEMPLATE_UPDATE_DATA_NO_AREA
                        .replace("${3}", stringArray[3]).replace("${4}", stringArray[5]));
            }
        } else {
            System.out.println(TEMPLATE_UPDATE_DATA_NO_AREA
                    .replace("${3}", stringArray[3]).replace("${4}", stringArray[5]));
        }
    }
}
