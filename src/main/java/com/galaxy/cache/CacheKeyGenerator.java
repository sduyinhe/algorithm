package com.galaxy.cache;

import lombok.Data;
import lombok.SneakyThrows;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.util.StringUtils;

import java.lang.reflect.Method;

@Data
public class CacheKeyGenerator implements KeyGenerator {
    /**
     * 包含主键，主键参数须放在第一个
     */
    public boolean includePrimaryKey = false;
    /**
     * 包含参数
     */
    public boolean includeParams = false;
    /**
     * 包含级联键
     */
    public boolean includeCascadeKeys = false;

    @SneakyThrows
    @Override
    public Object generate(Object target, Method method, Object... params) {
        Object primaryKey = includePrimaryKey ? params[0] : null;
        if (includePrimaryKey && primaryKey == null) {
            throw new Exception("第一个参数不能为空！");
        }
        String paramsKey = includeParams && params != null ? StringUtils.arrayToCommaDelimitedString(params) : null;
        

        return null;
    }
}
