package com.galaxy.test;

import javassist.runtime.Inner;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;

public class TestCompare {
    public static void main(String[] args) {
        ArrayList<InnerBehavior> innerBehaviorArrayList = new ArrayList<>();
        Date now = new Date();
        InnerBehavior innerBehavior1 = new InnerBehavior();
        innerBehavior1.setBehaviorTime(now);
        InnerBehavior innerBehavior2 = new InnerBehavior();
        innerBehavior2.setBehaviorTime(now);
        InnerBehavior innerBehavior3 = new InnerBehavior();
        innerBehavior3.setBehaviorTime(now);
        InnerBehavior innerBehavior4 = new InnerBehavior();
        InnerBehavior innerBehavior5 = new InnerBehavior();
        InnerBehavior innerBehavior6 = new InnerBehavior();
        innerBehaviorArrayList.add(innerBehavior1);
        innerBehaviorArrayList.add(innerBehavior2);
        innerBehaviorArrayList.add(innerBehavior3);
        innerBehaviorArrayList.add(innerBehavior4);
        innerBehaviorArrayList.add(innerBehavior5);
        innerBehaviorArrayList.add(innerBehavior6);

        for (int i = 0; i < 64; i++) {
            innerBehavior1 = new InnerBehavior();
            innerBehavior1.setBehaviorTime(now);
            innerBehavior2 = new InnerBehavior();
            innerBehavior2.setBehaviorTime(now);
            innerBehavior3 = new InnerBehavior();
            innerBehavior3.setBehaviorTime(now);
            innerBehavior4 = new InnerBehavior();
            innerBehavior5 = new InnerBehavior();
            innerBehavior6 = new InnerBehavior();
            innerBehaviorArrayList.add(innerBehavior1);
            innerBehaviorArrayList.add(innerBehavior2);
            innerBehaviorArrayList.add(innerBehavior3);
            innerBehaviorArrayList.add(innerBehavior4);
            innerBehaviorArrayList.add(innerBehavior5);
            innerBehaviorArrayList.add(innerBehavior6);
        }

        //自反性，compare(x, y) = - compare(y, x) 否则会抛异常Comparison method violates its general contract!
        Collections.sort(innerBehaviorArrayList, new Comparator<InnerBehavior>() {

            @Override
            public int compare(InnerBehavior o1, InnerBehavior o2) {
                if (o1.behaviorTime == null && o2.behaviorTime != null) {
                    return 1;
                } else if (o2.behaviorTime == null && o1.behaviorTime != null) {
                    return -1;
                } else if (o1.behaviorTime == null && o2.behaviorTime == null) {
                    return 0;
                } else {
                    return o2.behaviorTime.compareTo(o1.behaviorTime);
                }
            }

        });

    }

    @Data
    static class InnerBehavior {
        Date behaviorTime;
    }
}
