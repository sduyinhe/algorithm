<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.cheche.pms.repository.${prefix}.command.${modelName}CommandMapper">
    <insert id="save" parameterType="com.cheche.pms.model.${prefix}.${modelName}" useGeneratedKeys="true" keyProperty="id">
        INSERT INTO ${tableName}(
        <#assign sysFields=["create_time","update_time","delete_flag","id"]>
        <#list columnInfoList as col>
            <#if !sysFields?seq_contains(col.name)>
            ${col.name},
            </#if>
        </#list>
            create_time,
            update_time,
            delete_flag
        )
        VALUES (
        <#list columnInfoList as col>
            <#if !sysFields?seq_contains(col.name)>
            <#if col.name == 'company_id'>
            ${r'#'}{company.id},
            <#else>
            ${r'#'}{${col.modelColumnName}},
            </#if>
            </#if>
        </#list>
            NOW(),
            NOW(),
            0
        )
    </insert>

    <update id="update">
        UPDATE ${tableName}
        <set>
        <#assign sysUpdateFields=["update_user_id","update_time","delete_flag","company_id","id","create_time","create_user_id"]>
        <#list columnInfoList as col>
            <#if !sysUpdateFields?seq_contains(col.name)>
            <if test="${col.modelColumnName} != null">
                ${col.name} = ${r'#'}{${col.modelColumnName}},
            </if>
            </#if>
        </#list>
            update_user_id=${r'#'}{updateUserId},
            update_time=NOW()
        </set>
        WHERE id = ${r'#{id}'}
    </update>

    <delete id="deleteById">
        UPDATE ${tableName} SET delete_flag = 1 WHERE id = ${r'#{id}'}
    </delete>
</mapper>
