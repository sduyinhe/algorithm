package com.galaxy.test;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Start {
    public static void main(String[] args) {
        int contestantNum;   //定义参赛者数量
        int moneyCount = 0;      //定义总金额
        for (contestantNum = 1; moneyCount == 0 || moneyCount % 75 > 0; contestantNum++) {
            moneyCount = (contestantNum + 2) * (contestantNum + 1) / 2 - 1;
        }
        log.info("总计来的人数为:{}", contestantNum);
        log.info("豆子一共需要出: {}元", moneyCount);
        log.info("一共买了:{}张月卡", moneyCount / 75);
    }
}
