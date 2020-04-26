package com.galaxy.abaoGenerator.provider;

import lombok.Data;

/**
 * Created by luowei on 2017/7/25.
 */
@Data
public class ColumnInfo {
    private String comment;
    private String javaType;
    private String name;
    private String modelColumnName;
}
