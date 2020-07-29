package redis;

import com.galaxy.Application;
import lombok.Data;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.redisson.api.RBucket;
import org.redisson.api.RLock;
import org.redisson.api.RedissonClient;
import org.redisson.codec.JsonJacksonCodec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.concurrent.TimeUnit;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {Application.class})
public class RedissionTest {
    @Autowired
    private RedissonClient redissonClient;

    @Test
    public void test1() {
//        redissonClient.getKeys().getKeys().forEach(ele -> System.out.println(ele.toString()));
//        System.out.println("key总数为"+redissonClient.getKeys().count());
        RBucket<TokenObject> objectRBucket = redissonClient.getBucket("abao-token-Abao_Platform_Token_154", JsonJacksonCodec.INSTANCE);
        //System.out.println(objectRBucket.get().toString());
//        RLock lock = redissonClient.getLock("yhwLock");
//        lock.lock(1000L, TimeUnit.MILLISECONDS);
//        System.out.println("处理一些事情");
//        try {
//            lock.tryLock(100,1,TimeUnit.SECONDS);
//            System.out.println("获得到锁了");
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        lock.unlock();
    }

    @Data
    public class TokenObject {
        private String tokens;
    }
}
