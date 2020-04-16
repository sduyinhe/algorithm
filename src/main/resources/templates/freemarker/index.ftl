<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8"/>
    <title></title>
</head>
<body>
<h1>hello,${var}</h1>
${hello!'我是控制'} 啊哈哈哈
${hello!"我也是控制"} 嘎嘎嘎啊
<br/>
<#list list1?sort?reverse as item>
    ${item}<br/>
</#list>
<#list map1?keys as key>
    ${key}:${map1[key]}<br/>
</#list>
<#assign var1=111>
<#if var1==9>var1=9
<#elseif var1==111> var1=888
<#else>var1=333</#if>
var1的值是${var1}

<#assign var2="hello">
<#assign var3=" world">
output:${var2+var3}<br/>
<#assign var4="abcdefg">
output:${var4?substring(0,1)},length:${var4?length},upper_case:${var4?upper_case},
lower_case:${var4?lower_case}

</body>
</html>