package com.galaxy.test;

import com.esotericsoftware.kryo.util.ObjectMap;
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
import org.apache.commons.lang.StringUtils;

import java.io.*;
import java.net.URLDecoder;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.chrono.ChronoZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Data
@Slf4j
public class CRMDataTest {

    final List<String> crmDataList = new ArrayList<>();
    final List<String> sem1Url = new ArrayList<>();
    public static final String DELIMITER = ",";
    public static final String SEM_3_STR = "GET /article/article-3-";
    public static final String SEM_1_STR = "GET /article/article-1-";
    public static List<Area> AREA_LIST;

    /**
     * 来源渠道=自有
     * 入库时间=“表单提交时间”
     * 手机号=“手机号”
     * 姓名=“姓名”
     * 居住地=“居住地”
     * 家庭成员情况=“家庭成员情况”
     * 性别=“性别”
     * 生日=“生日”
     * 年龄=根据“生日”计算的年龄
     * 社保情况=“本人社保情况”
     * 个人年收入=“本人收入”取数字
     * 如“配偶生日”字段不为空，增加成员角色：配偶，性别=本人性别取反，生日=“配偶生日”
     * 如“大宝生日”字段不为空，增加成员角色：子女，性别=“大宝性别”，生日=“大宝生日”
     * 如“二宝生日”字段不为空，增加成员角色：子女，性别=“二宝性别”，生日=“二宝生日”
     * 如“三宝生日”字段不为空，增加成员角色：子女，性别=“三宝性别”，生日=“三宝生日”
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
                String outStr = "自有" + DELIMITER + stringArray[0] + DELIMITER + stringArray[1] + DELIMITER + stringArray[2];
                String livingProvinceAndCity = stringArray[5];
                String provinceName = ConstUtil.provinceList.stream().filter(ele -> livingProvinceAndCity.startsWith(ele)).findAny().orElse(null);
                String city = livingProvinceAndCity.substring(provinceName.length());
                outStr += DELIMITER + provinceName + DELIMITER + city + DELIMITER + stringArray[6] + DELIMITER + stringArray[7] + DELIMITER + stringArray[8];

                //计算年龄
                int age = 0;
                if (StringUtils.isNotEmpty(stringArray[8])) {
                    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
                    age = CrmCommonUtils.getZhouAgeByBirth(simpleDateFormat.parse(stringArray[8]));
                }
                outStr += DELIMITER + age + DELIMITER + stringArray[9];
                //计算个人年收入
                String income = EIncome.toEnum(stringArray[10]).getValue();
                outStr += DELIMITER + income;
                crmDataList.add(outStr);
                sbf.append(outStr);

                //  dealProvinceAndCityAndTime(stringArray, provinceName, city);
                dealCustomerFamily(stringArray);
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
        CRMDataTest semTest = new CRMDataTest();
        File file = new File("D:\\test\\2020年7月2日feature_2186历史数据修复\\2.csv");
//        Arrays.stream(file.listFiles()).forEach(ele -> {
//            System.out.println(ele.getPath());
//        });
//        Arrays.stream(file.listFiles()).forEach(ele -> {
//            semTest.readFileContent(ele.getPath());
//        });

        semTest.readFileContent(file.getPath());

        File fileOut = new File("D:\\test\\2020年7月2日feature_2186历史数据修复\\result.txt");
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

    public static final String TEMPLATE_CUSTOMER_FAMILY = "INSERT INTO `customer_family`(`company_id`, `customer_id`, `name`, `mobile`, `member_type`, `gender`, `birthday`, `create_user_id`, `create_time`, `update_user_id`, `update_time`, `delete_flag`) VALUES (2, (select id from data_data where v2='${1}' and delete_flag = 0), NULL, NULL, ${2}, ${3}, '${4}', 2, now(), 2, now(), 0);";

    private void dealCustomerFamily(String[] stringArray) {
        List<CustomerFamily> customerFamilyList = new ArrayList<>();
        if (StringUtils.isNotEmpty(stringArray[13])) {
            //增加新的数据
            CustomerFamily customerFamily = new CustomerFamily();
            customerFamily.setCustomerId(0);
            customerFamily.setGender(EGender.toEnum(stringArray[13]).getId());
            customerFamily.setBirthday(stringArray[14]);
            customerFamily.setMemberType(EFamilyMemberType.CHILDREN.getId());
            customerFamilyList.add(customerFamily);
        }
        if (StringUtils.isNotEmpty(stringArray[15])) {
            //增加新的数据
            CustomerFamily customerFamily = new CustomerFamily();
            customerFamily.setCustomerId(0);
            customerFamily.setGender(EGender.toEnum(stringArray[15]).getId());
            customerFamily.setBirthday(stringArray[16]);
            customerFamily.setMemberType(EFamilyMemberType.CHILDREN.getId());
            customerFamilyList.add(customerFamily);
        }
        if (StringUtils.isNotEmpty(stringArray[17])) {
            //增加新的数据
            CustomerFamily customerFamily = new CustomerFamily();
            customerFamily.setCustomerId(0);
            customerFamily.setGender(EGender.toEnum(stringArray[17]).getId());
            customerFamily.setBirthday(stringArray[18]);
            customerFamily.setMemberType(EFamilyMemberType.CHILDREN.getId());
            customerFamilyList.add(customerFamily);
        }
        if (StringUtils.isNotEmpty(stringArray[11])) {
            //增加新的数据
            CustomerFamily customerFamily = new CustomerFamily();
            customerFamily.setCustomerId(0);
            if (StringUtils.isNotEmpty(stringArray[7])) {
                EGender currentGender = EGender.toEnum(stringArray[7]);
                if (currentGender == EGender.MAN) {
                    customerFamily.setGender(EGender.WOMAN.getId());
                } else {
                    customerFamily.setGender(EGender.MAN.getId());
                }
            }
            customerFamily.setBirthday(stringArray[11]);
            customerFamily.setMemberType(EFamilyMemberType.SPOUSE.getId());
            customerFamilyList.add(customerFamily);
        }
        customerFamilyList.forEach(ele -> {
            //打印插入sql
            System.out.println(TEMPLATE_CUSTOMER_FAMILY.replace("${1}", stringArray[1])
                    .replace("${2}", ele.getMemberType().toString())
                    .replace("${3}", ele.getGender().toString())
                    .replace("${4}", ele.getBirthday()));
        });
    }

    public static final String TEMPLATE_UPDATE_DATA = "update data_data a set a.f7=${1},a.f42=${2},a.create_time=d4,a.d13=d4 where a.v2 = '${3}';";

    /**
     * 处理省份和地市、入库时间、创建时间
     *
     * @param stringArray
     */
    private void dealProvinceAndCityAndTime(String[] stringArray, String province, String city) {
        Area provinceArea = AREA_LIST.stream().filter(ele -> ele.getName().equals(province) && ele.getType().equals(Area.Type.PROVINCE.getValue())).findFirst().orElse(null);
        Area cityArea = AREA_LIST.stream().filter(ele -> ele.getName().equals(city) && ele.getType().equals(Area.Type.CITY.getValue())).findFirst().orElse(null);
        System.out.println(TEMPLATE_UPDATE_DATA.replace("${1}", provinceArea.getId().toString()).replace("${2}", cityArea.getId().toString())
                .replace("${3}", stringArray[1]));
    }
}
