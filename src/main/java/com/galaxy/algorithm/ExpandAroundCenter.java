package com.galaxy.algorithm;

/**
 * 中心扩展算法计算最长回文
 * <p>
 * 复杂度分析
 * <p>
 * 时间复杂度：O(n^2)O(n
 * 2
 * )，由于围绕中心来扩展回文会耗去 O(n)O(n) 的时间，所以总的复杂度为 O(n^2)O(n
 * 2
 * )。
 * <p>
 * 空间复杂度：O(1)O(1)。
 *
 * @author yhw
 */
public class ExpandAroundCenter
{
    public static void main(String[] args)
    {
        ExpandAroundCenter expandAroundCenter = new ExpandAroundCenter();
        System.out.println(expandAroundCenter.longestPalindrome("abba"));
    }

    //abc abbc
    public String longestPalindrome(String str)
    {
        if (str == null || "".equals(str))
        {
            return "";
        }

        int start = 0, end = 0;
        for (int i = 0; i < str.length(); i++)
        {
            int length1 = expandAroundCenter(str, i, i);
            int length2 = expandAroundCenter(str, i, i + 1);
            int length = Math.max(length1, length2);
            if (length > (end - start + 1))
            {
                start = i - (length - 1) / 2;
                end = i + length / 2;
            }
        }

        return str.substring(start, end + 1);
    }

    private int expandAroundCenter(String str, int left, int right)
    {
        while (left >= 0 && right < str.length() && str.charAt(left) == str.charAt(right))
        {
            left--;
            right++;
        }
        return right - left + 1 - 2;
    }


}
