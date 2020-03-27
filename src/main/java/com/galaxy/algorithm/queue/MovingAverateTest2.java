package com.galaxy.algorithm.queue;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

public class MovingAverateTest2 {
    //保存当前窗口数字的总和
    private double previousSum = 0.0;
    //窗口的最大值
    private int maxSize;
    //链表用于保存当前窗口的值
    private Queue<Integer> currentWindow;

    public MovingAverateTest2(int val) {
        currentWindow = new LinkedList<Integer>();
        maxSize = val;
    }

    public double next(int val) {
        double sum = 0;
        if (maxSize == currentWindow.size()) {
            previousSum -= currentWindow.remove();
        }
        currentWindow.add(val);
        previousSum += val;
        return previousSum / currentWindow.size();
    }

    public static void main(String[] args) {
        MovingAverateTest2 movingAverateTest = new MovingAverateTest2(3);
        System.out.println(movingAverateTest.next(1));
        System.out.println(movingAverateTest.next(10));
        System.out.println(movingAverateTest.next(3));
        System.out.println(movingAverateTest.next(5));
    }

}
