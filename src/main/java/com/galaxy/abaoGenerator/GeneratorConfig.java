package com.galaxy.abaoGenerator;

import lombok.Data;

import java.util.List;
import java.util.Map;

/**
 * Created by luowei on 2017/8/4.
 */
@Data
public class GeneratorConfig {

    private DataSource dataSource;
    private Template template;
    private List<Generator> generator;

    @Data
    public static class DataSource{
        private String url;
        private String username;
        private String password;
        private String driverClassName;
    }

    @Data
    public static class Template{
        private String path;
        private Map<String,Object> CommonData;
        private String dataProvider;
    }

    @Data
    public static class Generator{
        private String templateName;
        private String targetFileName;
    }
}
