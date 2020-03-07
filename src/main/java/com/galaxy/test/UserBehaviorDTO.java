package com.galaxy.test;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.galaxy.entity.UserBehavior;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(value = JsonInclude.Include.NON_NULL)
public class UserBehaviorDTO {
    private Long id;
    private Long userId;
    private Integer behaviorType;
    //文章标题
    private String articleTitle;
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String stayTime;

    UserBehavior convert(UserBehaviorDTO userBehaviorDTO) {
        UserBehavior userBehavior = new UserBehavior();
        userBehavior.setBehaviorType(userBehaviorDTO.getBehaviorType());
        userBehavior.setEndTime(userBehaviorDTO.getEndTime());
        userBehavior.setStartTime(userBehaviorDTO.getStartTime());
        userBehavior.setStayTime(Long.parseLong(userBehaviorDTO.getStayTime()));
        userBehavior.setUserId(userBehaviorDTO.getUserId());
        userBehavior.setArticleTitle(userBehaviorDTO.getArticleTitle());
        return userBehavior;
    }
}
