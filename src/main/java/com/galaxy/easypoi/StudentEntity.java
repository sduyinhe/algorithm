package com.galaxy.easypoi;

import cn.afterturn.easypoi.excel.ExcelExportUtil;
import cn.afterturn.easypoi.excel.annotation.Excel;
import cn.afterturn.easypoi.excel.entity.ExportParams;
import com.google.common.collect.Lists;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.apache.poi.ss.usermodel.Workbook;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

@Data
@AllArgsConstructor
public class StudentEntity implements java.io.Serializable {
    /**
     * id
     */
    private Integer id;
    /**
     * 学生姓名
     */
    @Excel(name = "学生姓名", height = 20, width = 30, isImportField = "true_st")
    private String name;
    /**
     * 学生性别
     */
    @Excel(name = "学生性别", replace = {"男_1", "女_2"}, suffix = "生", isImportField = "true_st")
    private int sex;

    @Excel(name = "出生日期", databaseFormat = "yyyyMMddHHmmss", format = "yyyy-MM-dd", isImportField = "true_st", width = 20)
    private Date birthday;

    @Excel(name = "进校日期", databaseFormat = "yyyyMMddHHmmss", format = "yyyy-MM-dd")
    private Date registrationDate;

    public static void main(String[] args) throws FileNotFoundException, IOException {
        ArrayList<StudentEntity> arrayList = new ArrayList<>();
        arrayList.add(new StudentEntity(1, "杨浩文1", 1, new Date(), new Date()));
        arrayList.add(new StudentEntity(1, "杨浩文2", 1, new Date(), new Date()));
        Workbook workbook = ExcelExportUtil.exportExcel(new ExportParams("计算机一班学生", "学生"),
                StudentEntity.class, arrayList);

        FileOutputStream fos = new FileOutputStream("F:/algorithm/test111.xlsx");
        workbook.write(fos);
        fos.close();
    }
}