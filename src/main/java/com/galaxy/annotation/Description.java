package com.galaxy.annotation;

import java.lang.annotation.*;

/**
 * add by yhw 2020年5月28日 测试注解
 */
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
public @interface Description {
    String desc() default "";

    String author() default "";

    int age() default 18;
}
