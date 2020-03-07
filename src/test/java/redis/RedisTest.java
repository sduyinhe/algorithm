package redis;

import com.galaxy.Application;
import com.galaxy.entity.UserBehavior;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class RedisTest {
    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @Test
    public void test() throws Exception {
        stringRedisTemplate.opsForValue().set("yhw1", "111");
        System.out.println("开始单元测试");
        Assert.assertEquals("111", stringRedisTemplate.opsForValue().get("yhw1"));
    }

    @Test
    public void test2() {
        UserBehavior userBehavior = new UserBehavior();
        userBehavior.setId(1L);
        userBehavior.setStayTime(1234L);
        userBehavior.setArticleTitle("寻仙之路");
        userBehavior.setUserId(2L);
        userBehavior.setStartTime(LocalDateTime.now());
        userBehavior.setEndTime(LocalDateTime.now().minusDays(1L));
        redisTemplate.opsForValue().set("yhw2", userBehavior);

        UserBehavior userBehavior1 = (UserBehavior) redisTemplate.opsForValue().get("yhw2");
        System.out.println(userBehavior1.getArticleTitle());
    }
}
