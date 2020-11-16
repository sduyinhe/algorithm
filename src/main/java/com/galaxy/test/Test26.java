package com.galaxy.test;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;

public class Test26 {
    public static void main(String[] args) throws Exception {
        importExcel();
    }

    public static List<TmpTable> importExcel() throws Exception {
        HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(new File("D:\\jdhn\\光伏模拟器曲线导入模板.xls")));
        HSSFSheet sheet = null;

        for (int i = 0; i < workbook.getNumberOfSheets(); i++) {
            //获取每个sheet
            sheet = workbook.getSheetAt(i);
            List<TmpTable> list = new ArrayList<TmpTable>();
            //getPhysicalNumberOfRows获取有记录的行数
            for (int j = 0; j < sheet.getPhysicalNumberOfRows(); j++) {
                if (j <= 2) {
                    continue;
                }
                Row row = sheet.getRow(j);
                if (null != row) {
                    //getLastCellNum获取最后一列
                    TmpTable tmpTable = new TmpTable();
                    for (int k = 0; k < row.getLastCellNum(); k++) {
                        if (null != row.getCell(k)) {
                            if (k == 0) {
                                Cell cell = row.getCell(0);
                                //cell->double
                                Double d = cell.getNumericCellValue();
                                tmpTable.setValue1(d);
                            }
                            if (k == 1) {
                                Cell cell = row.getCell(1);
                                //cell->string
                                tmpTable.setValue2(cell.getNumericCellValue());
                            }
                            if (k == 2) {
                                Cell cell = row.getCell(2);
                                tmpTable.setValue3(cell.getNumericCellValue());
                            }
                            if (k == 3) {
                                Cell cell = row.getCell(3);
                                tmpTable.setValue4(cell.getNumericCellValue());
                            }
                        }

                    }
                    list.add(tmpTable);
                }
            }
            System.out.println("读取sheet表：" + workbook.getSheetName(i) + "完成");
            list.stream().forEach(ele -> {
                System.out.println(ele.toString());
            });
            return list;
        }

        return null;
    }
}
