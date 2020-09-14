package ${controllerPackage}.${prefix}.response;

import ${modelPackage}.${prefix}.${modelName};
import com.github.crm.bean.Converter;
import lombok.Data;
import org.springframework.beans.BeanUtils;

<#list importList as import>
import ${import};
</#list>

/**
* Created by ${author} on ${date}.
*/
@Data
public class ${modelName}FoundResponse implements Converter<${modelName}, ${modelName}FoundResponse> {
<#assign sysFields=["createTime","updateTime","createUserId","updateUserId","companyId","languageCode","deleteFlag"]>
<#list columnInfoList as col>
    <#if !sysFields?seq_contains(col.modelColumnName)>

    /**
     * ${col.comment}
     */
    private ${col.javaType} ${col.modelColumnName};
    </#if>
</#list>

    @Override
    public ${modelName}FoundResponse convert(${modelName} s) {
        ${modelName}FoundResponse t = new ${modelName}FoundResponse();
        BeanUtils.copyProperties(s, t);
        return t;
    }
}