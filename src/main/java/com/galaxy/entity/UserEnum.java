package com.galaxy.entity;

import lombok.Getter;

/**
 * 多入参枚举测试类
 */
public enum UserEnum {
    USER1(1, "普通用户"), USER2(2, "VIP用户"), USER3(3, "内部用户");
    @Getter
    private Integer id;
    @Getter
    private String label;

    private UserEnum(Integer id, String label) {
        this.id = id;
        this.label = label;
    }

    public static void main(String[] args) {
//        for (UserEnum userEnum : UserEnum.values()) {
//            System.out.println(userEnum.getLabel() + " ordernal=" + userEnum.ordinal() + " name=" + userEnum.name() + " id=" + userEnum.getId());
//        }
        System.out.println(UserEnum.valueOf(UserEnum.class,"USER3").ordinal());
    }
}
