package com.galaxy.algorithm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 最大堆，最小堆，堆排序
 * 最大堆：每个节点的值大于左右子节点的完全二叉树
 * 最小堆：每个节点的值小于左右子节点的完全二叉树
 * <p>
 * 使用java List构建的特点
 * 左节点都是偶数，右节点都是奇数
 * <p>父节点开始的位置是n/2的位置</p>
 */
public class HeapTest {
    public static void main(String[] args) {
//        List<Integer> array = new ArrayList<Integer>(Arrays.asList(null, 1, 2, 5, 10, 3, 7, 11, 15, 17, 20, 9, 15, 8, 16));
//        // adjust(array);//调整使array成为最大堆
        HeapTest heapTest = new HeapTest();
//        heapTest.adjust(array, array.size() - 1);
//        array.forEach(ele -> {
//            System.out.print(ele + " ");
//        });
//
//        //删除
//        System.out.println("删除第八个元素之后");
//        heapTest.delete(array, 8);
//
//        System.out.println("新增元素之后");
//        heapTest.insert(array, 99);//堆中插入
//
//        System.out.println("堆排序之后");
//        //将堆排序之后
//        heapTest.sort(array);
        List<Integer> array1 = new ArrayList<Integer>();
        heapTest.insert(array1, 0);
        heapTest.insert(array1, 1);
        heapTest.insert(array1, 2);
        heapTest.insert(array1, 5);
        heapTest.insert(array1, 10);
        heapTest.insert(array1, 3);
        heapTest.insert(array1, 7);
        heapTest.insert(array1, 11);
        heapTest.insert(array1, 15);
        heapTest.insert(array1, 17);
        heapTest.insert(array1, 20);
        heapTest.insert(array1, 9);
        heapTest.insert(array1, 15);
        heapTest.insert(array1, 8);
        heapTest.insert(array1, 16);
        array1.forEach(ele -> System.out.print(ele + " "));

    }

    /**
     * 初始化最大堆，对数组的前半部分n/2，依次进行处理
     *
     * @param array
     * @return
     */
    public List<Integer> adjust(List<Integer> array, int n) {
        //数组的前半部分n/2，都是节点
        int i = n / 2;
        for (; i > 0; i--) {
            adjustNode(array, i, n);
        }

        return array;
    }

    /**
     * 调整单个节点（及它的最大孩子节点，向下遍历）
     *
     * @param array
     * @param i
     * @return
     */
    public void adjustNode(List<Integer> array, int i, int length) {
        int child = i * 2;

        if (child > length) {
            return;
        }

        if (child + 1 > length) {
            //只有一个左孩子
        } else {
            if (child <= length && array.get(child) < array.get(child + 1)) {
                child = child + 1;
            }
        }

        if (array.get(child) > array.get(i)) {
            swapNode(array, child, i);
            adjustNode(array, child, length);
        }

    }

    public void swapNode(List<Integer> array, int a, int b) {
        int tmpValue = array.get(a);
        array.set(a, array.get(b));
        array.set(b, tmpValue);
    }

    /**
     * 节点上升
     *
     * @param array
     * @param i
     */
    public void heapUp(List<Integer> array, int i) {
        int n = array.size() - 1;
        int parent = i / 2;
        if (parent == 0) {
            return;
        }

        if (array.get(i) > array.get(parent)) {
            swapNode(array, i, parent);
            heapUp(array, parent);
        }
    }

    /**
     * 删除第几个节点
     *
     * @param i
     */
    public void delete(List<Integer> list, int i) {
        list.set(i, list.get(list.size() - 1));
        list.remove(list.size() - 1);
        heapDown(list, i);
        list.forEach(ele -> System.out.print(ele + " "));
    }

    /**
     * 节点下沉
     *
     * @param array
     * @param i
     */
    public void heapDown(List<Integer> array, int i) {
        int n = array.size() - 1;
        int child = i * 2;
        if (child > n) {
            return;
        }
        if (child + 1 == n) {
            //只有一个左孩子
        } else {
            if (array.get(child) < array.get(child + 1)) {
                child++;
            }
        }

        if (array.get(child) > array.get(i)) {
            swapNode(array, child, i);
            heapDown(array, child);
        }
    }

    //增加一个元素到最大堆中
    public void insert(List<Integer> array, int value) {
        if (array.size() == 0) {
            array.add(null);
        }
        array.add(value);
        heapUp(array, array.size() - 1);
        //array.forEach(ele -> System.out.print(ele + " "));
    }

    //堆排序
    public void sort(List<Integer> array) {
        int n = array.size() - 1;
        for (int i = n; i > 0; i--) {
            swapNode(array, i, 1);
            adjustNode(array, 1, i - 1);
        }

        array.forEach(ele -> {
            System.out.print(ele + " ");
        });
    }
}
