package com.galaxy.test;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.*;

import java.math.BigDecimal;


/**
 * Created by yanghw on 2020/09/14.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class StaffTask {

    /**
     * 顶级任务ID
     */
    private Integer topTaskId;

    /**
     * 主管任务ID
     */
    private Integer directorTaskId;

    /**
     * 被考核人
     */
    private String userId;

    /**
     * 自评
     */
    private Integer selfScore;

    /**
     * 主管评分
     */
    private Integer assessmentScore;

    /**
     * 评级S A B C D
     */
    private String assessmentLevel;

    /**
     * 1.未开启,2.未提交,3.已提交,4.已评分,5.已评级,6.已完成,7.已退回
     */
    private Integer status;

    /**
     * 主管填写绩效内容
     */
    private String directorRemark;

    /**
     * 小故事（用户第一）
     */
    private String story1;

    /**
     * 小故事（用户第一）评分
     */
    private Integer story1Score;

    /**
     * 小故事（真诚担当）
     */
    private String story2;

    /**
     * 小故事（真诚担当）评分
     */
    private Integer story2Score;

    /**
     * 小故事（合作共赢）
     */
    private String story3;

    /**
     * 小故事（合作共赢）评分
     */
    private Integer story3Score;

    /**
     * 小故事证明人
     */
    private String storyWitness;

    /**
     * 绩效总分:主管评分*0.7+三个小故事分总和
     */
    private BigDecimal totalScore;

    /**
     * 考核类型，创建时为空，开启之后固话考核类型，不可变更
     */
    private Integer checkType;

    public StaffTask(Integer topTaskId, String userId) {
        this.topTaskId = topTaskId;
        this.userId = userId;
    }

    public StaffTask(Integer topTaskId) {
        this.topTaskId = topTaskId;
    }

    public StaffTask(String userId) {
        this.userId = userId;
    }

    /**
     * 归属部门名称
     */
    private String organName;

    /**
     * 归属员工姓名
     */
    private String realname;

    /**
     * 退回到的子任务ID
     */
    private Integer returnSubTaskId;

    /**
     * 退回理由
     */
    private String returnReason;

    /**
     * 当前任务类型：1,填写 2,量化绩效/管理绩效 3,绩效评分 4,绩效评级 5,审批
     */
    private Integer currentTaskType;

    /**
     * 返回下一个待审批的任务
     */
    private Integer nextStaffTaskId;
}
