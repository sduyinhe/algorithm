package com.galaxy.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnBean(name="conditionConfig")
public class ConditionConfig {

//    @Bean
//    public ConditionCity getCity() {
//        ConditionCity conditionCity = new ConditionCity();
//        conditionCity.setName("上海市");
//        return conditionCity;
//    }


    @Bean
    public ConditionProvince getProvince2() {
        ConditionProvince conditionProvince = new ConditionProvince();
        conditionProvince.setName("山东省");
        return conditionProvince;
    }

//    @Bean
//    @ConditionalOnMissingBean
//    public ConditionProvince getProvince1() {
//        ConditionProvince conditionProvince = new ConditionProvince();
//        conditionProvince.setName("四川省");
//        return conditionProvince;
//    }

}
