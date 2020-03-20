package com.galaxy.algorithm;

public class FatherStatic {
   static {
       System.out.println("父静态代码块");
    }
    {
        System.out.println("父构造代码块");
    }
    public FatherStatic(){
        System.out.println("父构造函数");
    }
}
