package com.cheche.crm.enums;

import lombok.Getter;

import java.util.stream.Stream;

/**
 * @author yhw
 */
public enum EIncome {
    ONE(1, "10万元以下", "9"),
    TWO(2, "10-30/万元", "10"),
    THREE(3, "30-50/万元", "31"),
    FOUR(4, "50万元以上", "51"),
    ;
    @Getter
    private Integer id;
    @Getter
    private String name;
    @Getter
    private String value;

    EIncome(Integer id, String name, String value) {
        this.id = id;
        this.name = name;
        this.value = value;
    }

    public static EIncome toEnum(String name) {
        return Stream.of(values()).filter(ele -> ele.getName().equals(name)).findFirst().orElse(null);
    }

    public static EIncome toEnum(Integer id) {
        return Stream.of(values()).filter(ele -> ele.getId().equals(id)).findFirst().orElse(null);
    }

}
