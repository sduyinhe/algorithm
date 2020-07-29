package com.galaxy.cache;

import com.galaxy.enumeration.EModel;
import io.netty.channel.EventLoopGroup;
import lombok.Data;
import org.redisson.config.TransportMode;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;
import org.springframework.stereotype.Component;

import java.util.concurrent.ExecutorService;

@Data
@Component
@ConfigurationProperties(prefix = "galaxy.redisson")
public class RedissonProperties {
    /**
     * 编码
     * 默认值: FstCodec
     */
    private Class codec;
    /**
     * 线程池数量
     * 默认值: 当前处理核数量 * 2
     */
    private Integer threads = 4;
    /**
     * Netty线程池数量
     * 默认值: 当前处理核数量 * 2
     */
    private Integer nettyThreads = 4;
//    /**
//     * 单独提供一个用来执行所有RTopic对象监听器，
//     * RRemoteService调用者和
//     * RExecutorService任务的线程池（ExecutorService）实例。
//     */
//    private ExecutorService executor;
//    /**
//     * 用于特别指定一个EventLoopGroup. EventLoopGroup是用来处理所有通过Netty与Redis服务之间的连接发送和接受的消息。
//     * 每一个Redisson都会在默认情况下自己创建管理一个EventLoopGroup实例。因此，如果在同一个JVM里面可能存在多个Redisson实例的情况下，
//     * 采取这个配置实现多个Redisson实例共享一个EventLoopGroup的目的。
//     */
//    private EventLoopGroup eventLoopGroup;
    /**
     * 默认值：TransportMode.NIO
     * <p>
     * 可选参数：
     * TransportMode.NIO,
     * TransportMode.EPOLL - 需要依赖里有netty-transport-native-epoll包（Linux）
     * TransportMode.KQUEUE - 需要依赖里有 netty-transport-native-kqueue包（macOS）
     */
    private TransportMode transportMode = TransportMode.NIO;
    /**
     * 监控锁的看门狗超时，单位：毫秒
     * 默认值：30000
     * 监控锁的看门狗超时时间单位为毫秒。该参数只适用于分布式锁的加锁请求中未明确使用leaseTimeout参数的情况。
     * 如果该看门口未使用lockWatchdogTimeout去重新调整一个分布式锁的lockWatchdogTimeout超时，
     * 那么这个锁将变为失效状态。这个参数可以用来避免由Redisson客户端节点宕机或其他原因造成死锁的情况。
     */
    private Long lockWatchdogTimeout = 30000L;
    /**
     * 默认值：true
     * keepPubSubOrder（保持订阅发布顺序）
     * 默认值：true
     * <p>
     * 通过该参数来修改是否按订阅发布消息的接收顺序出来消息，如果选否将对消息实行并行处理，该参数只适用于订阅发布消息的情况
     */
    private boolean keepPubSubOrder = true;
    /**
     * 默认值：HIGHER_THROUGHPUT
     * <p>
     * 用来指定高性能引擎的行为。由于该变量值的选用与使用场景息息相关（NORMAL除外）我们建议对每个参数值都进行尝试。
     * <p>
     * 该参数仅限于Redisson PRO版本。
     * 可选模式：
     * HIGHER_THROUGHPUT - 将高性能引擎切换到 高通量 模式。
     * LOWER_LATENCY_AUTO - 将高性能引擎切换到 低延时 模式并自动探测最佳设定。
     * LOWER_LATENCY_MODE_1 - 将高性能引擎切换到 低延时 模式并调整到预设模式1。
     * LOWER_LATENCY_MODE_2 - 将高性能引擎切换到 低延时 模式并调整到预设模式2。 NORMAL - 将高性能引擎切换到 普通 模式
     */
    //private PerformanceMode performanceMode;

    private EModel model = EModel.SINGLE;

    @NestedConfigurationProperty
    /**
     * NestedConfigurationProperty这个注解不加，yml也能根据配置的方式自动识别，当然加了这个注释的好处是，
     * 告诉Spring，这不是单个值，而是一个结构体
     */
    private SingleServerProperties singleServerConfig;

}
