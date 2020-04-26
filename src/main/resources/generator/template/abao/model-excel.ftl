package ${modelPackage}.${prefix}

import cn.afterturn.easypoi.excel.annotation.Excel
import groovy.transform.AutoClone
import groovy.transform.EqualsAndHashCode
import groovy.transform.TupleConstructor

/**
 * ${tableComments}
 *
 * Created by ${author} on ${date}.
 */
@TupleConstructor
@AutoClone
@EqualsAndHashCode
class ${modelName}Excel implements Serializable {

    private static final long serialVersionUID = 1L
<#assign sysFields=['createTime','updateTime','id']>
<#list columnInfoList as col>
    <#if !sysFields?seq_contains(col.modelColumnName)>
    <#if col.javaType == 'Date'>
    @Excel(name = '${col.comment}', format = 'yyyy-MM-dd HH:mm:ss', orderNum = '${col?counter}', width = 20d)
    <#else>
    @Excel(name = '${col.comment}', orderNum = '${col?counter}', width = 20d)
    </#if>
    ${col.javaType} ${col.modelColumnName}
    </#if>
</#list>

}
