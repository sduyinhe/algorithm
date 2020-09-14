package com.galaxy.pmsGenerator.provider;

import lombok.Data;

import java.util.List;
import java.util.Set;

/**
 * Created by luowei on 2017/7/25.
 */
@Data
public class BaseTableModel {
    /**
     * table comments
     */
    private String tableComments;
    /**
     * table 别名
     */
    private String tableAlias;

    /**
     * table名
     */
    private String tableName;

    /**
     * pojo类名
     */
    private String modelName;

    /**
     * 驼峰modelName
     */
    private String modelNameLowerCamel;

    /**
     * 业务前缀
     */
    private String prefix;

    /**
     * 列信息
     */
    private List<ColumnInfo> columnInfoList;

    /**
     * 引入记录列表
     */
    private Set<String> importList;
}
