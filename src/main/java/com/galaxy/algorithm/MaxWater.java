package com.galaxy.algorithm;

public class MaxWater
{
    public static void main(String[] args)
    {
        int[] a = {1, 8, 6, 2, 5, 4, 8, 3, 7};
        MaxWater maxWater = new MaxWater();
        System.out.println(maxWater.maxArea2(a));
    }

    /**
     * 暴力遍历法，时间复杂度O(n2),空间复杂度O(1)
     * 如何证明m = n*(n-1)/2?
     * 一共n个柱子，每个柱子都与其他的n-1个柱子作面积的运算
     * 每个柱子必然存在重复的情况，比如n*m和m*n是一样的，所以要/2
     * 从而m=n*(n-1)/2
     */
    public int maxArea(int[] height)
    {
        int maxarea = 0;
        int n = height.length;
        int m = 0;
        for (int i = 0; i < height.length; i++)
            for (int j = i + 1; j < height.length; j++)
            {
                maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i));
                m++;
            }
        System.out.println("(n*(n-1)/2)=" + (n * (n - 1) / 2) + ";m=" + m);
        return maxarea;
    }

    /**
     * 双指针法 O(n) O(1)
     */
    public int maxArea2(int[] height)
    {
        int l = 0, r = height.length - 1;
        int maxArea = 0;
        while (l < r)
        {
            maxArea = Math.max(maxArea, Math.min(height[l], height[r]) * (r - l));
            if (height[r] > height[l])
            {
                l++;
            } else
            {
                r--;
            }
        }

        return maxArea;
    }
}
