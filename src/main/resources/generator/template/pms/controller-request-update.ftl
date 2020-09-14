package ${controllerPackage}.${prefix}.request;

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
public class ${modelName}UpdateRequest implements Converter<${modelName}UpdateRequest, ${modelName}> {
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
    public ${modelName} convert(${modelName}UpdateRequest s) {
        ${modelName} t = new ${modelName}();
        BeanUtils.copyProperties(s, t);
        return t;
    }
}