package com.cheche.crm.enums;

import lombok.Getter;

import java.util.stream.Stream;

/**
 * @author yhw
 */
public enum EGender {
    MAN(1, "男"),
    WOMAN(2, "女"),
    ;
    @Getter
    private Integer id;
    @Getter
    private String name;

    EGender(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public static EGender toEnum(String name) {
        return Stream.of(values()).filter(ele -> ele.getName().equals(name)).findFirst().orElse(null);
    }

    public static EGender toEnum(Integer id) {
        return Stream.of(values()).filter(ele -> ele.getId().equals(id)).findFirst().orElse(null);
    }

}
