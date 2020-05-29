package com.galaxy.annotation;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

@Component
@Aspect
public class TestAspect {
    @AfterReturning(value = "@annotation(com.galaxy.annotation.Description)")
    public void doSomething(JoinPoint joinPoint) {
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        Method method = methodSignature.getMethod();
        Description description = method.getAnnotation(Description.class);
        String desc = description.desc();
        int age = description.age();
        String author = description.author();
        System.out.println("desc:" + desc + ";age:" + age + ";author:" + author);
        System.out.println("切点后处理结束");
    }

    @Around("execution(public * com.galaxy.controller.PersonController.testAnnotation())")
    public Object around(ProceedingJoinPoint joinPoint) {
        try {
            System.out.println("method:" + joinPoint.getSignature().getName() + " begin");
            Object result = joinPoint.proceed();
            System.out.println("method:" + joinPoint.getSignature().getName() + " end");
            return result;
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        return null;
    }
}
