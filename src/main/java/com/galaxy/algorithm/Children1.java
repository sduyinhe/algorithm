package com.galaxy.algorithm;

import lombok.Data;
import lombok.ToString;

@Data
@ToString(callSuper = true)
public class Children1 extends Father1 implements Grandpa {
    private String name;

    public static void main(String[] args) {
        Children1 children1 = new Children1();
        children1.setName("yyyy");
        children1.setId(222);
        System.out.println(children1);
    }
}
