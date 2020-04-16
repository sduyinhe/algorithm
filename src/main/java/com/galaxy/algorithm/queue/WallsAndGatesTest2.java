package com.galaxy.algorithm.queue;

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
    public static Integer INF = Integer.MAX_VALUE;
    public static Integer WALL = -1;
    public static Integer GATE = 0;


}
