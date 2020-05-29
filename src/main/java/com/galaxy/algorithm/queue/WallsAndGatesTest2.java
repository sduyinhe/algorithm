package com.galaxy.algorithm.queue;

import com.google.common.collect.ImmutableMap;

import java.util.*;

/**
 * 题目描述
 * 你被给定一个 m × n 的二维网格，网格中有以下三种可能的初始化值：
 * -1 表示墙或是障碍物
 * 0 表示一扇门
 * INF 无限表示一个空的房间。然后，我们用 2^(31 - 1)= 2147483647 代表 INF。你可以认为通往门的距离总是小于 2147483647 的。
 * 你要给每个空房间位上填上该房间到 最近 门的距离，如果无法到达门，则填 INF 即可。
 * 示例：
 * 给定二维网格：
 * INF  -1  0  INF
 * INF INF INF  -1
 * INF  -1 INF  -1
 * 0  -1 INF INF
 * 运行完你的函数后，该网格应该变成：
 * 3  -1   0   1
 * 2   2   1  -1
 * 1  -1   2  -1
 * 0  -1   3   4
 * 思路
 * 与其从一个空的房间开始找门，我们何不按另一种方式来搜索？
 * 换言之，我们从门开始做宽度优先搜索。由于宽度优先搜索保证我们在搜索 d + 1 距离的位置时， 距离为 d 的位置都已经被搜索过了，所以到达每一个房间的时候都一定是最短距离。
 */
public class WallsAndGatesTest2 {
    private static final int EMPTY = Integer.MAX_VALUE;
    private static final int GATE = 0;
    private static final int WALL = -1;
    private static final List<int[]> DIRECTIONS = Arrays.asList(
            new int[]{1, 0},
            new int[]{-1, 0},
            new int[]{0, 1},
            new int[]{0, -1}
    );

    public static void main(String[] args) {
        int[][] rooms = new int[2][2];
        rooms[0][0] = Integer.MAX_VALUE;
        rooms[0][1] = -1;
        rooms[1][0] = Integer.MAX_VALUE;
        rooms[1][1] = 0;
        WallsAndGatesTest wallsAndGatesTest = new WallsAndGatesTest();
        wallsAndGatesTest.wallsAndGates(rooms);
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(rooms[i][j] + " ");
            }
            System.out.println("");
        }
    }

    public void wallsAndGates(int[][] rooms) {
        if (rooms.length == 0) return;
        for (int row = 0; row < rooms.length; row++) {
            for (int col = 0; col < rooms[0].length; col++) {
                if (rooms[row][col] == EMPTY) {
                    rooms[row][col] = distanceToNearestGate(rooms, row, col);
                }
            }
        }
    }

    private int distanceToNearestGate(int[][] rooms, int startRow, int startCol) {
        Queue<Map<String, Integer>> queue = new LinkedList<>();
        Map<String, Integer> point = new HashMap<>();
        point.put("row", startRow);
        point.put("col", startCol);
        int m = rooms.length;
        int n = rooms[0].length;
        //这个二维数组不需要，直接用dis就可以了
        int[][] distance = new int[m][n];
        int dis = 0;

        queue.add(point);
        while (!queue.isEmpty()) {
            Map<String, Integer> tmpPoint = queue.poll();
            int r = tmpPoint.get("row");
            int c = tmpPoint.get("col");
            dis++;
            for (int[] direction : DIRECTIONS) {
                r += direction[0];
                c += direction[1];
                if (r < 0 || c < 0 || r > m || c > n || rooms[r][c] == WALL) {
                    continue;
                }
                if (rooms[r][c] == GATE) {
                    distance[r][c] = dis;
                    return distance[r][c];
                }
                queue.add(ImmutableMap.of("row", r, "col", c));
            }
        }
        return Integer.MAX_VALUE;
    }

}
