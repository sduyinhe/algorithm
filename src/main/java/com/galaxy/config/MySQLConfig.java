package com.galaxy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author galaxy
 * @功能描述:用于MySQL相关配置的类
 */
//下面此行用来排序的注解接口,用于处理加载优先级的问题,拥有两个枚举变量 　　　
//  Ordered.HIGHEST_PRECEDENCE- Integer.MIN_VALUE -最小值,拥有最高优先级
//　　　Ordered.LOWEST_PRECEDENCE -Integer.MAX_VALUE -最大值,拥有最低优先级
//@Order(Ordered.HIGHEST_PRECEDENCE)
@Configuration
//下面此行代表此类开启事务管理
@EnableTransactionManagement(proxyTargetClass = true)
//也可以定义为类 如DeptRepository.class   也可以定义过滤器 includeFilters={ @ComponentScan.Filter(type=FilterType.ANNOTATION,value=Service.class)}
@EnableJpaRepositories(basePackages = "com.galaxy.**.repository")
public class MySQLConfig {

    @Bean
    PersistenceExceptionTranslationPostProcessor persistenceExceptionTranslationPostProcessor() {
        return new PersistenceExceptionTranslationPostProcessor();
    }
}