package ${servicePackage}.dto

import ${servicePackage}.constants.EInsuranceTarget
import ${servicePackage}.model.${prefix}.${modelName}
import com.fasterxml.jackson.annotation.JsonFormat
import groovy.transform.ToString

import javax.validation.constraints.NotBlank

import static ${basePackage}.constants.Constants._SIMPLE_DATE_PATTERN

/**
 * ${tableComments}dto
 */
@ToString(includeNames = true, allNames = true)
class D${modelName} extends ABaseDTO<${modelName}> {

<#assign sysFields=['createTime','updateTime','id']>
<#list columnInfoList as col>
    <#if !sysFields?seq_contains(col.modelColumnName)>
        <#if col.javaType == 'Date'>
            @JsonFormat(pattern = _SIMPLE_DATE_PATTERN, timezone = 'GMT+8')
            ${col.javaType} ${col.modelColumnName}
        <#else>
            ${col.javaType} ${col.modelColumnName}
        </#if>
    </#if>
</#list>
    D${modelName}() {
        super(null)
    }

    @Override
    ${modelName} convertToModel() {
        new ${modelName}(
            <#list columnInfoList as col>
            <#if !sysFields?seq_contains(col.modelColumnName)>
            ${col.modelColumnName}: ${col.modelColumnName}<#sep>,</#sep>
            </#if>
            </#list>
        )
    }

}
