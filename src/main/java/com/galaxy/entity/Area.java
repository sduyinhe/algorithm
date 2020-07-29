package com.galaxy.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.*;

/**
 * @author yhw
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class Area{

    private Integer id;
    /**
     * 父级ID
     */
    private Integer parentId;

    /**
     * 所有父级ID
     */
    private String parentIds;

    /**
     * 名称
     */
    private String name;

    /**
     * 编码
     */
    private String code;

    /**
     * 类型(9.国家,0.省直辖市,1.地市,2.区县)
     */
    private Integer type;

    /**
     * 排序顺序
     */
    private Integer orders;

    /**
     * 查询关键字
     */
    private transient String keyword;

    public enum Type {
        /**
         * 枚举值
         */
        PROVINCE(0), CITY(1), COUNTY(2), COUNTRY(9);

        @Getter
        private int value;

        Type(int value) {
            this.value = value;
        }
    }

}
