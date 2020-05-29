package com.galaxy.algorithm.queue;

/**
 * 循环队列（环形缓冲器）
 */
public class MyCircularQueue {
    private int[] data;
    private int size;
    private int head;
    private int tail;

    /**
     * Initialize your data structure here. Set the size of the queue to be k.
     */
    public MyCircularQueue(int k) {
        this.size = k;
        this.head = -1;
        this.tail = -1;
        this.data = new int[this.size];
    }

    /**
     * Insert an element into the circular queue. Return true if the operation is successful.
     */
    public boolean enQueue(int value) {
        if (isFull()) {
            return false;
        }
        if (isEmpty()) {
            head = 0;
        }
        tail = (++tail) % size;
        this.data[tail] = value;
        return true;
    }

    /**
     * Delete an element from the circular queue. Return true if the operation is successful.
     */
    public boolean deQueue() {
        if (isEmpty()) {
            return false;
        }
        if (head == tail) {
            head = -1;
            tail = -1;
            return true;
        }
        head = (++head) % size;
        return true;
    }

    /**
     * Get the front item from the queue.
     */
    public int Front() {
        if (isEmpty()) {
            return -1;
        }
        return data[head];
    }

    /**
     * Get the last item from the queue.
     */
    public int Rear() {
        if (isEmpty()) {
            return -1;
        }
        return data[tail];
    }

    /**
     * Checks whether the circular queue is empty or not.
     */
    public boolean isEmpty() {
        return head == -1;
    }

    /**
     * Checks whether the circular queue is full or not.
     */
    public boolean isFull() {
        return (tail + 1) % size == head;
    }

    public static void main(String[] args) {
        MyCircularQueue obj = new MyCircularQueue(5);
        boolean param_1 = obj.enQueue(5);
        boolean param_2 = true;//obj.deQueue();
        int param_3 = obj.Front();
        int param_4 = obj.Rear();
        boolean param_5 = obj.isEmpty();
        boolean param_6 = obj.isFull();
        System.out.println("param_1=" + param_1 + ";param_2=" + param_2 + ";param_3=" + param_3 + ";param_4=" + param_4 + ";param_5=" + param_5 + ";param_6=" + param_6);
    }
}



