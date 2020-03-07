package com.galaxy.generator.provider;

import com.galaxy.generator.GeneratorConfig;
import com.galaxy.generator.GeneratorParam;
import com.galaxy.generator.Utility;
import org.assertj.core.util.Lists;
import org.mybatis.generator.api.IntrospectedColumn;
import org.mybatis.generator.api.IntrospectedTable;
import org.mybatis.generator.api.dom.java.FullyQualifiedJavaType;
import org.mybatis.generator.config.*;
import org.mybatis.generator.internal.NullProgressCallback;

import java.lang.reflect.Field;
import java.util.*;

/**
 * Created by luowei on 2017/8/4.
 */
public class MyDataSourceProvider implements DataSourceProvider {

    @Override
    public Map<String, Object> provide(GeneratorConfig configuration, GeneratorParam param) {
        Context context = new Context(ModelType.FLAT);
        context.setId("Case");
        context.setTargetRuntime("MyBatis3Simple");
        context.addProperty(PropertyRegistry.CONTEXT_BEGINNING_DELIMITER, "`");
        context.addProperty(PropertyRegistry.CONTEXT_ENDING_DELIMITER, "`");

        //读取数据库配置文件
        GeneratorConfig.DataSource dataSource = configuration.getDataSource();
        JDBCConnectionConfiguration jdbcConnectionConfiguration = new JDBCConnectionConfiguration();
        jdbcConnectionConfiguration.setConnectionURL(dataSource.getUrl());
        jdbcConnectionConfiguration.setUserId(dataSource.getUsername());
        jdbcConnectionConfiguration.setPassword(dataSource.getPassword());
        jdbcConnectionConfiguration.setDriverClass(dataSource.getDriverClassName());
        context.setJdbcConnectionConfiguration(jdbcConnectionConfiguration);

        //自定义类型解析实现
        JavaTypeResolverConfiguration javaTypeResolverConfiguration = new JavaTypeResolverConfiguration();
        javaTypeResolverConfiguration.setConfigurationType(MyJavaTypeResolverImpl.class.getName());
        context.setJavaTypeResolverConfiguration(javaTypeResolverConfiguration);

        TableConfiguration tableConfiguration = new TableConfiguration(context);
        tableConfiguration.setTableName(param.getTableName());
        tableConfiguration.setDomainObjectName(param.getModelName());
        context.addTableConfiguration(tableConfiguration);

        try {
            List<String> warnings = new ArrayList<String>();
            Set<String> setTable = new HashSet<>();
            setTable.add(param.getTableName());
            context.introspectTables(new NullProgressCallback(),warnings, setTable);

            IntrospectedTable introspectedTable = getTableInfoByReflect(context);
            BaseTableModel baseTableModel = transformBaseTableModel(introspectedTable,param);
            return Utility.transBean2Map(baseTableModel);

        } catch (Exception e) {
            throw new RuntimeException("生成Model和Mapper失败", e);
        }
    }

    private static IntrospectedTable getTableInfoByReflect(Context context){
        Field[] fields = context.getClass().getDeclaredFields();
        for(Field field : fields){
            if(field.getName().equals("introspectedTables")){
                field.setAccessible(true);
                try {
                    return ((List<IntrospectedTable>)field.get(context)).get(0);
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
            }
        }
        return null;
    }

    private static BaseTableModel transformBaseTableModel(IntrospectedTable introspectedTable,GeneratorParam param){
        BaseTableModel baseModel = new BaseTableModel();

        List<ColumnInfo> cols = Lists.newArrayList();
        //生成列信息
        List<IntrospectedColumn> columnList = introspectedTable.getAllColumns();
        Set<String> importList = new HashSet<>();
        ColumnInfo columnInfo;
        FullyQualifiedJavaType javaType;
        for (IntrospectedColumn column : columnList){
            columnInfo = new ColumnInfo();
            columnInfo.setName(column.getActualColumnName());
            columnInfo.setModelColumnName(Utility.underscoreToCamelCase(column.getActualColumnName()));
            columnInfo.setComment(column.getRemarks());
            javaType = column.getFullyQualifiedJavaType();
            columnInfo.setJavaType(javaType.getShortName());
            addImportByJavaType(importList,javaType);
            cols.add(columnInfo);
        }
        baseModel.setColumnInfoList(cols);

        String tableName = introspectedTable.getTableConfiguration().getTableName();
        baseModel.setTableName(tableName);
        baseModel.setPrefix(param.getPrefix());
        baseModel.setTableAlias(param.getTableAlias());

        String modelName = introspectedTable.getTableConfiguration().getDomainObjectName();
        baseModel.setModelName(modelName);
        baseModel.setModelNameLowerCamel(Utility.tableNameConvertLowerCamel(modelName));
        baseModel.setImportList(importList);
        return baseModel;
    }


    private static void addImportByJavaType(Set<String> importList,FullyQualifiedJavaType javaType){
        if(javaType.getShortName().equals("LocalDateTime")){
            importList.add("java.time.LocalDateTime");
        }
    }
}
