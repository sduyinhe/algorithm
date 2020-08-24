package com.galaxy.test;

import java.io.File;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class TestDirectory {
    public static void main(String[] args) {
        File file = new File("D:\\work\\ant-design-vue-pro\\node_modules");
        List<String> filenameList = Arrays.asList(file.listFiles()).stream().map(ele -> ele.getName()).collect(Collectors.toList());

        File file2 = new File("D:\\ant-design-vue-pro\\node_modules");
        List<String> filenameList2 = Arrays.asList(file2.listFiles()).stream().map(ele -> ele.getName()).collect(Collectors.toList());
        filenameList2.forEach(System.out::println);

    }
}
