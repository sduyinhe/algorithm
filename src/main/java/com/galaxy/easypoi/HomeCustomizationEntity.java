package com.galaxy.easypoi;

import cn.afterturn.easypoi.cache.manager.POICacheManager;
import cn.afterturn.easypoi.excel.ExcelExportUtil;
import cn.afterturn.easypoi.excel.ExcelXorHtmlUtil;
import cn.afterturn.easypoi.excel.annotation.Excel;
import cn.afterturn.easypoi.excel.entity.ExcelToHtmlParams;
import cn.afterturn.easypoi.excel.entity.ExportParams;
import cn.afterturn.easypoi.excel.entity.enmus.ExcelType;
import cn.afterturn.easypoi.excel.export.styler.ExcelExportStylerBorderImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;


/**
 * 表单提交时间
 * 手机号
 * 姓名
 * 沟通时间-日期
 * 沟通时间-时间段
 * 居住地
 * 家庭成员情况
 * 本人性别
 * 本人生日
 * 本人社保情况
 * 本人收入
 * 配偶生日
 * 孩子数量
 * 大宝性别
 * 大宝生日
 * 二宝性别
 * 二宝生日
 * 三宝性别
 * 三宝生日
 *
 * @author yhw
 */
@Data
public class HomeCustomizationEntity implements Serializable {
    private static final long serialVersionUID = 1L;
    @Excel(name = "手机号", orderNum = "2", width = 15)
    String mobile;
    @Excel(name = "姓名", orderNum = "3")
    String name;
    @Excel(name = "沟通时间-日期", format = "yyyy-MM-dd", orderNum = "4", width = 15)
    Date communicationDate;
    @Excel(name = "沟通时间-时间段", orderNum = "5", width = 15)
    String communicationTimeRange;
    @Excel(name = "居住地", orderNum = "6")
    String areaName;
    @Excel(name = "家庭成员情况", orderNum = "7", width = 15)
    String familyComposition;
    @Excel(name = "本人性别", orderNum = "8")
    String gender;
    @Excel(name = "本人生日", format = "yyyy-MM-dd", orderNum = "9")
    Date birthday;
    @Excel(name = "本人社保情况", orderNum = "10", width = 15)
    String socialInsurance;
    @Excel(name = "本人收入", orderNum = "11", width = 15)
    String income;
    @Excel(name = "配偶生日", format = "yyyy-MM-dd", orderNum = "12")
    Date spouseBirthday;
    @Excel(name = "孩子数量", orderNum = "13")
    String childCount;
    @Excel(name = "大宝性别", orderNum = "14")
    String firstGender;
    @Excel(name = "大宝生日", format = "yyyy-MM-dd", orderNum = "15")
    Date firstBirthday;
    @Excel(name = "二宝性别", orderNum = "16")
    String secondGender;
    @Excel(name = "二宝生日", format = "yyyy-MM-dd", orderNum = "17")
    Date secondBirthday;
    @Excel(name = "三宝性别", orderNum = "18")
    String thirdGender;
    @Excel(name = "三宝生日", format = "yyyy-MM-dd", orderNum = "19")
    Date thirdBirthday;
    @Excel(name = "表单提交时间", format = "yyyy-MM-dd HH:mm:ss", orderNum = "1", width = 20)
    Date formDate;

    public static void main(String[] args) throws IOException, InvalidFormatException {
//        HomeCustomizationEntity hoHomeCustomizationEntity = new HomeCustomizationEntity();
//        String str = "{\n" +
//                "    \"mobile\":\"17092166516\",\n" +
//                "    \"name\":\"赵思捷\",\n" +
//                "    \"communicationDate\":\"2019-09-27\",\n" +
//                "    \"communicationTimeRange\":\"10:00-11:00\",\n" +
//                "    \"areaName\":\"上海市\",\n" +
//                "    \"familyComposition\":\"单亲已婚\",\n" +
//                "    \"gender\":\"男\",\n" +
//                "    \"birthday\":\"2019-09-22\",\n" +
//                "    \"socialInsurance\":\"有\",\n" +
//                "    \"income\":\"10万收入以下\",\n" +
//                "    \"spouseBirthday\":\"1998-10-22\",\n" +
//                "    \"childCount\":\"3个\",\n" +
//                "    \"firstGender\":\"男\",\n" +
//                "    \"firstBirthday\":\"2019-08-22\",\n" +
//                "    \"secondGender\":\"女\",\n" +
//                "    \"secondBirthday\":\"2019-07-23\",\n" +
//                "    \"thirdGender\":\"男\",\n" +
//                "    \"thirdBirthday\":\"2018-03-22\"\n" +
//                "}";
//        ObjectMapper objectMapper = new ObjectMapper();
//        try {
//            hoHomeCustomizationEntity = objectMapper.readValue(str, HomeCustomizationEntity.class);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        hoHomeCustomizationEntity.setFormDate(new Date());
//        ArrayList<HomeCustomizationEntity> arrayList = new ArrayList<>();
//        arrayList.add(hoHomeCustomizationEntity);
//        arrayList.add(hoHomeCustomizationEntity);
//        ExportParams exportParams = new ExportParams();
//        exportParams.setStyle(ExcelExportStylerBorderImpl.class);
//        exportParams.setType(ExcelType.XSSF);
//
//        Workbook workbook = ExcelExportUtil.exportExcel(exportParams,
//                HomeCustomizationEntity.class, arrayList);
//        workbook.getSheetAt(0).createFreezePane(0, 0);
//        FileOutputStream fos = new FileOutputStream("F:/algorithm/test112.xlsx");
//        workbook.write(fos);
//        fos.close();

        Workbook workbook = WorkbookFactory.create(POICacheManager.getFile("E:/test/test2.xlsx"));

        Sheet sheet1 = workbook.getSheetAt(0);


        ExcelToHtmlParams params = new ExcelToHtmlParams(workbook);
        ExcelToHtmlParams params2 = new ExcelToHtmlParams(workbook, 1);
        System.out.println(ExcelXorHtmlUtil.excelToHtml(params));
        //System.out.println(ExcelXorHtmlUtil.excelToHtml(params2));
    }
}
