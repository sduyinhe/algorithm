package com.galaxy.algorithm.queue;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Set;

/**
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * <p>
 * 示例 1:
 * <p>
 * 输入: n = 12
 * 输出: 3
 * 解释: 12 = 4 + 4 + 4.
 * 示例 2:
 * <p>
 * 输入: n = 13
 * 输出: 2
 * 解释: 13 = 4 + 9.
 * 一种思路就是BFS，另外一种就是从数学定理的角度来处理：
 * 四平方定理。
 * <p>
 * 四平方定理讲的就是任何一个正整数都可以表示成不超过四个整数的平方之和。也就是说，这道题的答案只有 1，2 ，3，4 这四种可能。
 * <p>
 * 同时，还有一个非常重要的推论满足四数平方和定理的数n（这里要满足由四个数构成，小于四个不行），必定满足 n = 4a * (8b + 7)。
 * <p>
 * 根据这个重要的推论来解决此题，首先将输入的n迅速缩小。然后再判断，这个缩小后的数是否可以通过两个平方数的和或一个平方数组成，不能的话我们返回3，能的话我们返回平方数的个数。
 */
public class NumSquares {
    public static void main(String[] args) {
        NumSquares numSquares = new NumSquares();
        System.out.println(numSquares.numSquares(13));
    }

    public class Node {
        int value;
        int step;

        public Node(int value, int step) {
            this.value = value;
            this.step = step;
        }

        public int getValue() {
            return value;
        }

        public int getStep() {
            return step;
        }
    }

    public int numSquares(int n) {
        Queue<Node> q = new LinkedList<>();
        Set<Integer> visitedSet = new HashSet<>();
        q.offer(new Node(n, 0));
        while (!q.isEmpty()) {
            Node node = q.poll();
            int value = node.getValue();
            int step = node.getStep();
            for (int i = 0; i < Integer.MAX_VALUE; i++) {
                int result = value - i * i;
                if (result < 0) break;
                if (result == 0) return step + 1;
                if (!visitedSet.contains(result)) {
                    q.offer(new Node(result, step + 1));
                    visitedSet.add(result);
                }
            }
        }
        return -1;
    }

}
