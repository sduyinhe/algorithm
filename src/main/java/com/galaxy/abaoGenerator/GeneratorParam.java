package com.galaxy.abaoGenerator;

import lombok.Builder;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;

/**
 * Created by luowei on 2017/7/24.
 */
@Data
@Builder
public class GeneratorParam {
    /**
     * table名
     */
    private String tableName;

    /**
     * table 别名
     */
    private String tableAlias;
    public String getTableAlias(){
       if(StringUtils.isBlank(this.tableAlias)){
           return Utility.underscoreToCamelCase(Utility.substringTableAlias(this.getTableName()));
       }else{
           return this.tableAlias;
       }
    }
    /**
     * pojo类名
     */
    private String modelName;
    public String getModelName(){
        if(StringUtils.isBlank(this.modelName)){
            return Utility.upperNameFirstChar(Utility.substringTableAlias(this.getTableName()));
        }else{
            return this.modelName;
        }
    }

    /**
     * 业务前缀
     */
    private String prefix;
    public String getPrefix(){
        if(StringUtils.isBlank(this.prefix)){
            String[] arrTableName = this.getTableName().split("_");
            return arrTableName[0];
        }else{
            return this.prefix;
        }
    }
}
