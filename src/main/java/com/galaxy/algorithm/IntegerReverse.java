package com.galaxy.algorithm;

/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * <p>
 * 示例 1:
 * <p>
 * 输入: 123
 * 输出: 321
 * 示例 2:
 * <p>
 * 输入: -123
 * 输出: -321
 * 示例 3:
 * <p>
 * 输入: 120
 * 输出: 21
 * 注意:
 * <p>
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

public class IntegerReverse
{
    public static void main(String[] args)
    {
        IntegerReverse integerReverse = new IntegerReverse();
        System.out.println(integerReverse.isPalindrome(6));
    }

    public int reverse(int x)
    {
        long ret = 0;
        while (x != 0)
        {
            int pop = x % 10;
            x = x / 10;
            ret = ret * 10 + pop;
            if (ret > Integer.MAX_VALUE || ret < Integer.MIN_VALUE)
                return 0;
        }
        return (int) ret;
    }

    /**
     * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
     * <p>
     * 示例 1:
     * <p>
     * 输入: 121
     * 输出: true
     * 示例 2:
     * <p>
     * 输入: -121
     * 输出: false
     * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
     * 示例 3:
     * <p>
     * 输入: 10
     * 输出: false
     * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
     * 进阶:
     * <p>
     * 你能不将整数转为字符串来解决这个问题吗？
     * <p>
     */
    public boolean isPalindrome(int x)
    {
        if (x < 0 || (x != 0 && x % 10 == 0))
            return false;
        int n = 0;
        while (x > n)
        {
            int pop = x % 10;
            n = n * 10 + pop;
            x /= 10;
        }
        return (x == n || n / 10 == x);
    }
}
