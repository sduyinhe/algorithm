package redis;

import com.galaxy.Application;
import com.galaxy.config.ConditionProvince;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class ConditionTest {
    @Autowired(required=false)
    private ConditionProvince conditionProvince;
    @Test
    public void test(){
        System.out.println(conditionProvince);
    }
}
