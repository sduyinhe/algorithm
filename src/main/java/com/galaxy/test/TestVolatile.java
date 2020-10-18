package com.galaxy.test;

public class TestVolatile {
    private static volatile TestVolatile testVolatile = null;

    private TestVolatile() {
        System.out.println(Thread.currentThread().getName() + ":构造方法调用成功！");
    }

    public static TestVolatile getInstance() {
        if (testVolatile == null) {
            synchronized (TestVolatile.class) {
                if (testVolatile == null) {
                    testVolatile = new TestVolatile();
                }
            }
        }
        return testVolatile;
    }

    public static void main(String[] args) {
        for (int i = 0; i < 200; i++) {
            new Thread(new Runnable() {
                public void run() {
                    System.out.println(Thread.currentThread().getName() + ":" + TestVolatile.getInstance().hashCode());
                }
            }).start();
        }
    }

}
