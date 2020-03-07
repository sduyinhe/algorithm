package com.galaxy.service.impl;

import com.galaxy.service.ClearCacheService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Caching;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
@Slf4j
public class ClearCacheServiceImpl implements ClearCacheService {
    @Override
    @Caching(evict = {@CacheEvict(value = "algorithmUser1", beforeInvocation = true, allEntries = true),
            @CacheEvict(value = "algorithmPerson")})
    /**
     * key = "'com.galaxy.service.impl.PersonServiceImpl1'"
     */
    public void clearCache(List<String> keyList) {
        log.info("清除{}缓存", keyList == null ? "全部" : keyList);
        testStringRedisTemplate();
    }

    @Autowired
    private StringRedisTemplate stringRedisTemplate;
    @Autowired
    private RedisTemplate redisTemplate;

    private void testStringRedisTemplate() {

        stringRedisTemplate.opsForValue().append("msg", "hello");
        stringRedisTemplate.expire("msg", 2000L, TimeUnit.MILLISECONDS);
        log.info("超时时间:{}毫秒", stringRedisTemplate.getExpire("msg",TimeUnit.MILLISECONDS));
    }
}
