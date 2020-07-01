package com.galaxy.test;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Test5 {
    public static void main(String[] args) {
        List<HomeCustomization> list = new ArrayList<>();
        HomeCustomization h1 = new HomeCustomization();
        h1.setBehaviorTime(LocalDateTime.now());
        h1.setName("h1");
        HomeCustomization h2 = new HomeCustomization();
        h2.setBehaviorTime(LocalDateTime.now().minusDays(1L));
        h2.setName("h2");
        HomeCustomization h3 = new HomeCustomization();
        h3.setBehaviorTime(null);
        h3.setName("h3");
        list.add(h1);
        list.add(h2);
        list.add(h3);

        Collections.sort(list, new Comparator<HomeCustomization>() {
            @Override
            public int compare(HomeCustomization o1, HomeCustomization o2) {
                if (o1.behaviorTime == null) {
                    return 1;
                } else if (o2.behaviorTime == null) {
                    return -1;
                }
                return o2.behaviorTime.compareTo(o1.behaviorTime);
            }
        });

        list.forEach(System.out::println);
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class HomeCustomization {
        private LocalDateTime behaviorTime;
        private String name;
    }
}
