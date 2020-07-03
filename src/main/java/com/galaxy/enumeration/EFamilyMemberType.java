package com.cheche.crm.enums;

import lombok.Getter;

import java.util.stream.Stream;

/**
 * @author yhw
 */
public enum EFamilyMemberType {
    FATHER(1, "父亲"),
    MOTHER(2, "母亲"),
    CHILDREN(3, "子女"),
    SPOUSE(4, "配偶"),
    OTHER(5, "其他"),
    ;
    @Getter
    private Integer id;
    @Getter
    private String name;

    EFamilyMemberType(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public static EFamilyMemberType toEnum(String name) {
        return Stream.of(values()).filter(ele -> ele.getName().equals(name)).findFirst().orElse(null);
    }

    public static EFamilyMemberType toEnum(Integer id) {
        return Stream.of(values()).filter(ele -> ele.getId().equals(id)).findFirst().orElse(null);
    }

}
