package com.galaxy.algorithm.queue;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

public class MovingAverateTest {
    Queue<Integer> queue;
    int size;

    public MovingAverateTest(int size) {
        queue = new LinkedList<>();
        this.size = size;
    }

    public double next(int val) {
        if (queue.size() == size) {
            queue.poll();
        }
        queue.offer(val);
        int sum = 0;
        Iterator<Integer> iterator = queue.iterator();
        while (iterator.hasNext()) {
            sum += iterator.next();
        }

        return new java.math.BigDecimal(sum).divide(new java.math.BigDecimal(queue.size()), 5, java.math.RoundingMode.HALF_UP).doubleValue();
    }

    public static void main(String[] args) {
        MovingAverateTest movingAverateTest = new MovingAverateTest(3);
        System.out.println(movingAverateTest.next(1));
        System.out.println(movingAverateTest.next(10));
        System.out.println(movingAverateTest.next(3));
        System.out.println(movingAverateTest.next(5));
    }

}
