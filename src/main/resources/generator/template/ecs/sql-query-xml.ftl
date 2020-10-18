<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.jdhn.ecs.repository.${prefix}.query.${modelName}QueryMapper">

    <sql id="basicColumns">
    <#list columnInfoList as col>
        <#if col.name == 'company_id'>
        ${modelNameLowerCamel}.${col.name} AS "company.id"<#if col_has_next>,</#if>
        <#else>
        ${modelNameLowerCamel}.${col.name}<#if col_has_next>,</#if>
        </#if>
    </#list>
    </sql>

    <sql id="conditionWhere">
        <where>
            1 = 1
        <#assign sysFields=["delete_flag","company_id"]>
        <#list columnInfoList as col>
            <#if !sysFields?seq_contains(col.name)>
            <if test="${col.modelColumnName} != null">
                AND ${modelNameLowerCamel}.${col.name} = ${r'#'}{${col.modelColumnName}}
            </if>
            </#if>
        </#list>
            AND ${modelNameLowerCamel}.delete_flag = 0
        </where>
    </sql>

    <select id="findById" resultType="com.jdhn.ecs.model.${prefix}.${modelName}">
        SELECT
        <include refid="basicColumns" />
        FROM ${tableName} ${modelNameLowerCamel}
        WHERE 1 = 1
        AND ${modelNameLowerCamel}.id = ${r'#'}{id}
        AND ${modelNameLowerCamel}.delete_flag = 0
    </select>

    <select id="findAll" resultType="com.jdhn.ecs.model.${prefix}.${modelName}">
        SELECT
        <include refid="basicColumns" />
        FROM ${tableName} ${modelNameLowerCamel}
        <include refid="conditionWhere" />
        ORDER BY ${modelNameLowerCamel}.create_time DESC
    </select>

    <select id="findByCondition" resultType="com.jdhn.ecs.model.${prefix}.${modelName}">
        SELECT
        <include refid="basicColumns" />
        FROM ${tableName} ${modelNameLowerCamel}
        <include refid="conditionWhere" />
        ORDER BY ${modelNameLowerCamel}.create_time DESC
    </select>
</mapper>
