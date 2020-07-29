package com.galaxy.algorithm.queue;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * <p>
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * <p>
 * 此外，你可以假设该网格的四条边均被水包围。
 * <p>
 * 示例 1:
 * <p>
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 * 输出: 1
 * 示例 2:
 * <p>
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 * 输出: 3
 * 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 * <p>
 * 使用队列来实现广度优先算法
 */
public class NumIsIslandsBFS {
    public static void main(String[] args) {
        char[][] chars = new char[4][5];
        chars[0] = "11110".toCharArray();
        chars[1] = "11010".toCharArray();
        chars[2] = "11000".toCharArray();
        chars[3] = "00000".toCharArray();
        NumIsIslandsBFS numIsIslands = new NumIsIslandsBFS();
        System.out.println("岛屿数量为：" + numIsIslands.numIslands(chars));

        chars[0] = "11000".toCharArray();
        chars[1] = "11001".toCharArray();
        chars[2] = "00100".toCharArray();
        chars[3] = "10011".toCharArray();
        System.out.println("岛屿数量为：" + numIsIslands.numIslands(chars));
    }

    private static final List<int[]> DIRECTIONS = Arrays.asList(
            new int[]{1, 0},
            new int[]{-1, 0},
            new int[]{0, 1},
            new int[]{0, -1}
    );

    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }
        int[][] visited = new int[grid.length][grid[0].length];//0 未被访问，1被访问
        Queue<int[]> q = new LinkedList<>();
        int cnt = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (visited[i][j] == 0 && grid[i][j] == '1') {
                    breadthSearch(visited, q, grid, i, j);
                    cnt++;
                }
            }
        }
        return cnt;
    }

    public void breadthSearch(int[][] visited, Queue<int[]> q, char[][] grid, int i, int j) {
        q.offer(new int[]{i, j});
        while (!q.isEmpty()) {
            int[] point = q.poll();
            int xOrigin = point[0];
            int yOrigin = point[1];
            for (int[] direction : DIRECTIONS) {
                int x = xOrigin + direction[0];
                int y = yOrigin + direction[1];
                if (x < 0 || y < 0 || x > grid.length - 1 || y > grid[0].length - 1) {
                    continue;
                }
                if (visited[x][y] == 0 && grid[x][y] == '1') {
                    q.offer(new int[]{x, y});
                }
                visited[x][y] = 1;//已访问
            }
        }
    }

}
