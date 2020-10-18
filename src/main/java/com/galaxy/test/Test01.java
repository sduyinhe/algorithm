package com.galaxy.test;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.LongAdder;

public class Test01 {

    static StringBuffer intNumber ;
    static AtomicInteger atomicIntegerNumber = new AtomicInteger(0);
    static LongAdder longAdderNumber = new LongAdder();

    static synchronized void addInt() {
        intNumber = new StringBuffer("21341324");
    }

    static void addAtomicInteger() {
        atomicIntegerNumber.getAndIncrement();
    }

    static void addLongAdder() {
        longAdderNumber.increment();
    }

    public static void runAdd(String key) {

        long start = System.currentTimeMillis();
        int times = 100;
        List<Thread> tl = new ArrayList<>();
        Thread t = null;
        if (Adder.INT.equals(Adder.getByKey(key))) {
            for (int i = 0; i < times; i++) {
                t = new Thread(() -> {
                    for (int j = 0; j < 100000; j++) {
                        addInt();
                    }
                });
                tl.add(t);
                t.start();
            }
        } else if (Adder.ATOMICTINTGER.equals(Adder.getByKey(key))) {
            for (int i = 0; i < times; i++) {
                t = new Thread(() -> {
                    for (int j = 0; j < 100000; j++) {
                        addAtomicInteger();
                    }
                });
                tl.add(t);
                t.start();
            }
        } else if (Adder.LONGADDER.equals(Adder.getByKey(key))) {
            for (int i = 0; i < times; i++) {
                t = new Thread(() -> {
                    for (int j = 0; j < 100000; j++) {
                        addLongAdder();
                    }
                });
                tl.add(t);
                t.start();
            }
        }

        for (Thread thread : tl) {
            try {
                thread.join();
                // System.out.println(Test01.intNumber);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        System.out.println(key + "Number: " + Adder.getValue(key) + "，耗时：" + (System.currentTimeMillis() - start));
    }

    public static void main(String[] args) {
        runAdd("int");
        runAdd("atomicInteger");
        runAdd("longAdder");
    }

}

enum Adder {

    INT("int", Test01.intNumber),
    ATOMICTINTGER("atomicInteger", Test01.atomicIntegerNumber),
    LONGADDER("longAdder", Test01.longAdderNumber),
    UNKNOW("unknow", null);

    private String key;
    private Object value;

    Adder(String key, Object value) {
        this.key = key;
        this.value = value;
    }

    static Object getValue(String key) {
        return getByKey(key).value;
    }

    static Adder getByKey(String key) {
        for (Adder nt : Adder.values()) {
            if (nt.key == key)
                return nt;
        }
        return UNKNOW;
    }
}
