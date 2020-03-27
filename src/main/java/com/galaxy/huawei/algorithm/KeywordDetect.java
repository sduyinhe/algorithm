package com.galaxy.huawei.algorithm;

import java.util.*;
import java.util.stream.Collectors;

/**
 * 题目描述
 * 现在有一个字符串列表，和一个关键词列表，请设计一个高效算法，检测出含关键字列表中关键字(一个或多个)的字符串。
 * <p>
 * 给定字符串数组A及它的大小n以及关键词数组key及它的大小m，请返回一个排好序的含关键词的字符串序号的列表。
 * 保证所有字符串长度小于等于100，关键词个数小于等于100，字符串个数小于等于200。保证所有字符串全部由小写英文字符组成。若不存在含关键字的字符串，请返回一个只含-1的数组。
 * <p>
 * 测试样例：
 * ["nowcoder","hello","now"],3,["coder",now],2
 * 返回：[0,2]
 */
public class KeywordDetect {
    public int[] containKeyword(String[] A, int n, String[] keys, int m) {
        // write code here
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            for (String keyStr : keys) {
                if (A[i].contains(keyStr)) {
                    list.add(i);
                }
            }
        }
        if (list.size() == 0) {
            list.add(-1);
        }
        Set<Integer> set = new HashSet<>();
        set.addAll(list);
        list.clear();
        list.addAll(set);
        int[] resultArray = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            resultArray[i] = list.get(i);
        }
        Arrays.sort(resultArray);
        return resultArray;
    }
}
