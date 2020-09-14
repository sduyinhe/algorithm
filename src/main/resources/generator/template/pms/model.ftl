package ${modelPackage}.${prefix};

import ${modelPackage}.BaseMultiTenantModel;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.*;

<#list importList as import>
import ${import};
</#list>

/**
* Created by ${author} on ${date}.
*/
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class ${modelName} extends BaseMultiTenantModel {
<#assign sysFields=["createTime","updateTime","createUserId","updateUserId","deleteFlag","companyId","remark","languageCode","id"]>
<#list columnInfoList as col>
    <#if !sysFields?seq_contains(col.modelColumnName)>

    /**
    * ${col.comment}
    */
    private ${col.javaType} ${col.modelColumnName};
    </#if>
</#list>
}