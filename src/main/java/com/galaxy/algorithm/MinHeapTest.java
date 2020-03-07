package com.galaxy.algorithm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MinHeapTest {
    public static void main(String[] args) {
        List<Integer> array = new ArrayList<Integer>(Arrays.asList(null, 1, 2, 5, 10, 3, 7, 11, 15, 17, 20, 9, 15, 8, 16));
        MinHeapTest minHeapTest = new MinHeapTest();
        minHeapTest.initialize(array);
        array.forEach(ele -> System.out.print(ele + " "));
        System.out.println("");
        minHeapTest.minHeapSort(array);
        array.forEach(ele -> System.out.print(ele + " "));
    }

    public void initialize(List<Integer> array) {
        int n;
        for (n = (array.size() - 1) / 2; n > 0; n--) {
            adjust(array, n, array.size() - 1);
        }

    }

    private void swap(List<Integer> array, int a, int b) {
        Integer tmp = array.get(a);
        array.set(a, array.get(b));
        array.set(b, tmp);
    }

    private void adjust(List<Integer> array, int n, int length) {
        //递归构建最小堆
        int child = 2 * n;
        if (n > length || child > length) return;

        if ((child + 1 <= length) && array.get(child) > array.get(child + 1)) {
            child = child + 1;
        }
        if (array.get(child) < array.get(n)) {
            swap(array, child, n);
            adjust(array, child, length);
        }
    }

    public void minHeapSort(List<Integer> array) {
        for (int i = array.size() - 1; i > 1; i--) {
            //swap
            swap(array, i, 1);
            adjust(array, 1, i - 1);
        }
    }
}
