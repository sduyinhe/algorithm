package com.galaxy.algorithm.queue;

import java.util.Arrays;
import java.util.List;

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
 */
public class NumIsIslandsDFS {
    public static void main(String[] args) {
        char[][] chars = new char[4][5];
        chars[0] = "11110".toCharArray();
        chars[1] = "11010".toCharArray();
        chars[2] = "11000".toCharArray();
        chars[3] = "00000".toCharArray();
        NumIsIslandsDFS numIsIslands = new NumIsIslandsDFS();
        System.out.println("岛屿数量为：" + numIsIslands.numIslands(chars));

        chars[0] = "11000".toCharArray();
        chars[1] = "11000".toCharArray();
        chars[2] = "00100".toCharArray();
        chars[3] = "00011".toCharArray();
        System.out.println("岛屿数量为：" + numIsIslands.numIslands(chars));
    }

    private static final List<int[]> DIRECTIONS = Arrays.asList(
            new int[]{1, 0},
            new int[]{-1, 0},
            new int[]{0, 1},
            new int[]{0, -1}
    );

    public int numIslands(char[][] grid) {

        int cnt = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    depthSearch(grid, i, j);
                    cnt++;
                }
            }
        }
        return cnt;
    }

    public void depthSearch(char[][] grid, int i, int j) {
        if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1) {
            return;
        }
        if (grid[i][j] == '0') {
            return;
        }
        grid[i][j] = '0';
        DIRECTIONS.stream().forEach(direction -> {
            depthSearch(grid, i + direction[0], j + direction[1]);
        });
    }

}
