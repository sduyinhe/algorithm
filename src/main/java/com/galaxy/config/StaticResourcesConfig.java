package com.galaxy.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 静态资源控制类：此类所在包，需被Spring扫描到，才会被实例化
 */
@Configuration
@Slf4j
public class StaticResourcesConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        try {
            log.info("start to map static resource");
            // 映射Locations所指定的文件夹资源，到Handler指定的这个访问路径
            registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
            super.addResourceHandlers(registry);
            log.info("map static resource successfully");
        } catch (Exception e) {
            log.error("add resource error," + e.getMessage(), e);
        }
    }

}