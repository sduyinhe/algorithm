package com.galaxy.cache;


import com.galaxy.enumeration.EModel;
import org.redisson.Redisson;
import org.redisson.api.RedissonClient;
import org.redisson.client.codec.Codec;
import org.redisson.config.Config;
import org.redisson.config.SingleServerConfig;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.CustomizableThreadFactory;

import java.lang.reflect.InvocationTargetException;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

//@EnableConfigurationProperties(RedissonProperties.class)
@Configuration
public class RedissonConfig {
    public static void main(String[] args) {
        // RedissonConfig.getConnection();
    }

    @Bean
    @ConditionalOnBean(RedissonProperties.class)
    public static RedissonClient getConnection(RedissonProperties redissonProperties) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        Config config = new Config();
        Class codecClass = redissonProperties.getCodec();
        if (codecClass != null) {
            config.setCodec((Codec) codecClass.getDeclaredConstructor().newInstance());
        }
        if (redissonProperties.getThreads() != null) {
            config.setThreads(redissonProperties.getThreads());
        }
        if (redissonProperties.getNettyThreads() != null) {
            config.setNettyThreads(redissonProperties.getNettyThreads());
        }
        config.setExecutor(new ThreadPoolExecutor(2, 4, 1200L, TimeUnit.SECONDS,
                new ArrayBlockingQueue<>(10000), new CustomizableThreadFactory(), new ThreadPoolExecutor.CallerRunsPolicy()));
        config.setTransportMode(redissonProperties.getTransportMode());
        config.setLockWatchdogTimeout(redissonProperties.getLockWatchdogTimeout());
        config.setKeepPubSubOrder(redissonProperties.isKeepPubSubOrder());
        //config.useSingleServer().setAddress("redis://192.168.2.81:6379");


        EModel model = redissonProperties.getModel();
        switch (model) {
            case SINGLE:
                SingleServerConfig singleServerConfig = config.useSingleServer();
                SingleServerProperties singleServerProperties = redissonProperties.getSingleServerConfig();
                singleServerConfig.setAddress(singleServerProperties.getAddress());
                singleServerConfig.setDatabase(singleServerProperties.getDatabase());
                singleServerConfig.setClientName(singleServerProperties.getClientName());
                break;
            case CLUSTER:
                break;
            case MASTER_SLAVE:
                break;
            case SENTINEL:
                break;
            case REPLICATED:
                break;
            default:
                //默认单例模式
                break;
        }
        RedissonClient redissonClient = Redisson.create(config);
        return redissonClient;
    }
}
