package com.galaxy.algorithm;

public class ChildStatic extends FatherStatic {
    static {
        System.out.println("子静态代码块");
    }

    {
        System.out.println("子构造代码块");
    }

    public ChildStatic() {
        System.out.println("子构造函数");
    }

    public static void main(String[] args) {
        ChildStatic childStatic = new ChildStatic();
    }
}
