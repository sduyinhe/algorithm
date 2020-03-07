package com.galaxy.controller;

import com.galaxy.entity.UserBehavior;
import com.galaxy.service.UserBehaviorService;
import com.galaxy.test.UserBehaviorDTO;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/userBehavior")
public class UserBehaviorController {
    @Autowired
    UserBehaviorService userBehaviorService;

    @GetMapping(value = "/findAll")
    public List<UserBehaviorDTO> testQuery() {
        List<UserBehavior> userBehaviorList = userBehaviorService.findAll();
        return userBehaviorList.stream().map(userBehavior -> {
            UserBehaviorDTO userBehaviorDTO = new UserBehaviorDTO();
            try {
                BeanUtils.copyProperties(userBehaviorDTO, userBehavior);
                userBehaviorDTO.setStayTime(getCallDurationDescription(userBehavior.getStayTime()));
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }
            return userBehaviorDTO;
        }).collect(Collectors.toList());
    }

    /**
     * 返回日时分秒
     *
     * @param second
     * @return
     */
    private String getCallDurationDescription(long second) {

        long days = second / 86400;//转换天数
        second = second % 86400;//剩余秒数

        long hours = second / 3600;//转换小时数
        second = second % 3600;//剩余秒数

        long minutes = second / 60;//转换分钟
        second = second % 60;//剩余秒数

        if (0 < days) {
            return days + "天" + hours + "小时" + minutes + "分钟" + second + "秒";
        } else if (hours > 0) {
            return hours + "小时" + minutes + "分钟" + second + "秒";
        } else if (minutes > 0) {
            return minutes + "分钟" + second + "秒";
        } else {
            return second + "秒";
        }
    }
}
