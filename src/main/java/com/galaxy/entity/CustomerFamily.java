package com.galaxy.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.*;

import java.time.LocalDate;

/**
 * Created by yanghw on 2020/05/20.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class CustomerFamily extends BaseModel {

    /**
     * 客户ID
     */
    private Integer customerId;

    /**
     * 姓名
     */
    private String name;

    /**
     * 手机号
     */
    private String mobile;

    /**
     * 成员类型，1父亲、2母亲、3子女、4配偶、5其他
     */
    private Integer memberType;

    /**
     * 性别，1男，2女
     */
    private Integer gender;

    /**
     * 生日
     */
    private String birthday;
}
