package com.galaxy.ecsGenerator;

import freemarker.template.Configuration;
import freemarker.template.TemplateExceptionHandler;
import org.apache.commons.lang.StringUtils;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Map;

/**
 * Created by luowei on 2017/7/26.
 */
public class FreeMarkerGenerator implements TemplateGenerator {
    private Configuration configuration;

    public FreeMarkerGenerator(String templatePath){
        this.configuration = getConfiguration(templatePath);
    }

    public boolean generate(Map<String, Object> data, String targetFileName,String templateName) {
        try {
            Configuration cfg = this.configuration;

            File file = new File(targetFileName);
            if (!file.getParentFile().exists()) {
                file.getParentFile().mkdirs();
            }
            cfg.getTemplate(templateName).process(data,
                    new FileWriter(file));
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private Configuration getConfiguration(String templatePath) {
        Configuration cfg = new Configuration(Configuration.VERSION_2_3_23);
        try {
            if(StringUtils.isBlank(templatePath)){
                templatePath = FreeMarkerGenerator.class.getResource("/generator/template").getPath();
            }
            cfg.setDirectoryForTemplateLoading(new File(templatePath));
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("FreeMarker加载模板位置错误",e);
        }
        cfg.setDefaultEncoding("UTF-8");
        cfg.setTemplateExceptionHandler(TemplateExceptionHandler.IGNORE_HANDLER);
        return cfg;
    }
}
