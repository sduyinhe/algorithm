package com.galaxy.algorithm;

/**
 * 一元一瓶矿泉水，喝完后两个空瓶换一瓶矿泉水
 * <p>
 * 问：你有20元，最多可以喝几瓶矿泉水
 */
public class TestWater {
    int amountOfWater = 1;
    int amountOfExchange = 2;
    int initialAmount = 20;
    int countOfWater = 0;

    public static void main(String[] args) {
        TestWater testWater = new TestWater();
        testWater.testWater();
    }

    public void testWater() {
        int count = initialAmount / amountOfWater;
        countOfWater += count;
        int leftOfBottle = countOfWater;
        while (leftOfBottle > 1) {
            leftOfBottle = changeWater(leftOfBottle);
        }
        System.out.println("一共可以买" + countOfWater + "瓶水");
    }

    private int changeWater(int leftOfBottle) {
        int tmpWater = 0;
        if (leftOfBottle == 1)
            return 0;
        if (leftOfBottle % amountOfExchange == 0) {
            tmpWater = leftOfBottle / amountOfExchange;
            leftOfBottle = tmpWater;
        } else {
            tmpWater = leftOfBottle / amountOfExchange;
            leftOfBottle = tmpWater + 1;
        }

        countOfWater += tmpWater;
        return leftOfBottle;
    }
}
