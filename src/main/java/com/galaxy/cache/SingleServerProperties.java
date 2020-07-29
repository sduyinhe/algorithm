package com.galaxy.cache;

import lombok.Data;

/**
 * idleConnectionTimeout: 10000
 * connectTimeout: 10000
 * timeout: 3000
 * retryAttempts: 3
 * retryInterval: 1500
 * password: null
 * subscriptionsPerConnection: 5
 * clientName: null
 * address: "redis://127.0.0.1:6379"
 * subscriptionConnectionMinimumIdleSize: 1
 * subscriptionConnectionPoolSize: 50
 * connectionMinimumIdleSize: 24
 * connectionPoolSize: 64
 * database: 0
 * dnsMonitoringInterval: 5000
 * 单例模式常见参数
 */
@Data
public class SingleServerProperties {
    private Long idleConnectionTimeout = 10000L;
    private Long connectTimeout = 10000L;
    private Long timeout = 3000L;
    private Integer retryAttempts = 3;
    private Long retryInterval = 1500L;
    private String password;
    private Integer subscriptionsPerConnection = 5;
    /**
     * Name of client connection
     * 不能为中文，会报错
     */
    private String clientName;
    private String address = "redis://127.0.0.1:6379";
    private Integer subscriptionConnectionMinimumIdleSize = 1;
    private Integer subscriptionConnectionPoolSize = 50;
    private Integer connectionMinimumIdleSize = 24;
    private Integer connectionPoolSize = 64;
    private Integer database = 0;
    private Long dnsMonitoringInterval = 5000L;

}
