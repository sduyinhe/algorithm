package com.galaxy.generator;

import com.galaxy.generator.exception.GeneratorException;
import com.galaxy.generator.provider.DataSourceProvider;
import org.apache.commons.lang.StringUtils;
import org.yaml.snakeyaml.Yaml;

import java.io.FileInputStream;
import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by luowei on 2017/7/24.
 */
public class CodeGenerator {
    public static void main(String[] args){
        String tableName = "log_poster_appointment_log";
        //构造参数
        GeneratorParam param = GeneratorParam.builder().tableName(tableName).build();
        //加载配置
        GeneratorConfig properties = loadConfig();
        //生成Code
        codeGenerate(properties,param);
    }
    private static GeneratorConfig loadConfig(){
        Yaml yaml = new Yaml();
        URI uri = null;
        try {
            uri = new URI(GeneratorConfig.class.getResource("/generator/generator.yml").toString());
            String path = uri.getPath();
            if (path != null) {
                GeneratorConfig properties =(GeneratorConfig)yaml.loadAs(new FileInputStream(path),
                        GeneratorConfig.class);
                System.out.println(properties);
                return properties;
            }else{
                throw new GeneratorException("配置文件generator.yml不存在!");
            }
        } catch (Exception e) {
            throw new GeneratorException("加载配置文件generator.yml错误!",e);
        }
    }
    private static void codeGenerate(GeneratorConfig properties, GeneratorParam param){
        GeneratorConfig.Template template = properties.getTemplate();
        String dataSourceProviderClass = template.getDataProvider();
        if(StringUtils.isNotBlank(dataSourceProviderClass)){
            DataSourceProvider dataSourceProvider;
            try {
                Class providerClass = Class.forName(dataSourceProviderClass);
                dataSourceProvider = (DataSourceProvider)providerClass.newInstance();
            } catch (ClassNotFoundException | IllegalAccessException | InstantiationException e) {
                throw new GeneratorException(String.format("初始化Provider类[%s]失败",dataSourceProviderClass),e);
            }
            //准备模板数据
            Map<String,Object> data = dataSourceProvider.provide(properties,param);
            contactMap(data,template.getCommonData());
            data.put("date",new SimpleDateFormat("yyyy/MM/dd").format(new Date()));
            //解析生成文件地址
            List<GeneratorConfig.Generator> generatorList = properties.getGenerator();
            resolveGenerator(generatorList,data);
            System.out.println(generatorList);
            //生成
            FreeMarkerGenerator freeMarkerGenerator = new FreeMarkerGenerator(template.getPath());
            boolean result;
            for(GeneratorConfig.Generator generator : generatorList){
                System.out.println(generator.getTargetFileName());
                result = freeMarkerGenerator.generate(data,generator.getTargetFileName(),generator.getTemplateName());
                System.out.println(result);
            }
        }
    }
    private static void contactMap(Map<String,Object> target,Map<String,Object> source){
        for(Map.Entry<String,Object> entry:source.entrySet()){
            target.putIfAbsent(entry.getKey(),entry.getValue());
        }
    }
    private static void resolveGenerator(List<GeneratorConfig.Generator> generatorList, Map<String,Object> data){
        for(GeneratorConfig.Generator generator : generatorList){
            generator.setTargetFileName(resolvePath(generator.getTargetFileName(),data));
        }
    }
    private static String resolvePath(String path,Map<String,Object> data){
        Pattern pattern = Pattern.compile("\\{(\\w+)\\}");
        Matcher matcher = pattern.matcher(path);
        StringBuffer sb = new StringBuffer();
        while (matcher.find()) {
            String slot = matcher.group(1);
            if(!data.containsKey(slot)){
                throw new RuntimeException("配置文件中占位参数{" + slot + "}未提供值!");
            }
            matcher.appendReplacement(sb, String.valueOf(data.get(slot)));
        }
        matcher.appendTail(sb);
        String result = sb.toString();
        return ProjectConstant.PROJECT_PATH + (result.startsWith("/") ? "" : "/") + result;
    }
}
