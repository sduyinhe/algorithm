package ${modelPackage}.${prefix}

import ${modelPackage}.base.ABaseTimeTrackEntity
import groovy.transform.AutoClone
import groovy.transform.EqualsAndHashCode
import groovy.transform.TupleConstructor

import javax.persistence.Entity
import javax.persistence.Table

<#list importList as import>
import ${import}
</#list>

/**
 * ${tableComments}
 * Created by ${author} on ${date}.
 */
@Entity
@Table(name = '${tableName}')
@TupleConstructor(excludes = 'updateTime,createTime', includeSuperProperties = true)
@AutoClone
@EqualsAndHashCode
class ${modelName} extends ABaseTimeTrackEntity {

    private static final long serialVersionUID = 1L
<#assign sysFields=['createTime','updateTime','id']>
<#list columnInfoList as col>
    <#if !sysFields?seq_contains(col.modelColumnName)>

    /**
    * ${col.comment}
    */
    ${col.javaType} ${col.modelColumnName}
    </#if>
</#list>

}