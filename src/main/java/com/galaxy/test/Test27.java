package com.galaxy.test;

import lombok.SneakyThrows;

import java.util.concurrent.RunnableScheduledFuture;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class Test27 {
    private static ScheduledThreadPoolExecutor scheduledThreadPoolExecutor;

    public static void main(String[] args) throws InterruptedException {
        scheduledThreadPoolExecutor = new ScheduledThreadPoolExecutor(10);
        RunnableScheduledFuture<?> schedule = (RunnableScheduledFuture<?>) scheduledThreadPoolExecutor.scheduleAtFixedRate(new ScheduledTask(), 0, 20, TimeUnit.SECONDS);
        System.out.println("hello");
        scheduledThreadPoolExecutor.remove(schedule);
        Thread.sleep(8000L);
        System.out.println("当前活跃的线程数：" + scheduledThreadPoolExecutor.getActiveCount());

    }

    private static class ScheduledTask extends Thread {
        int time;

        @SneakyThrows
        public void run() {
            System.out.println("继续执行！" + (time++));
            if (time == 3) {
                throw new InterruptedException("完成");
            }
        }
    }
}
