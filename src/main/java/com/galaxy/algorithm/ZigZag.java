package com.galaxy.algorithm;

/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * <p>
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * <p>
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * <p>
 * 请你实现这个将字符串进行指定行数变换的函数：
 * <p>
 * string convert(string s, int numRows);
 * 示例 1:
 * <p>
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 示例 2:
 * <p>
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * <p>
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 */
public class ZigZag
{
    public static void main(String[] args)
    {
        ZigZag zigZag = new ZigZag();
        System.out.println(zigZag.convert("LEETCODEISHIRING", 4));
    }

    public String convert(String s, int numRows)
    {
        if (s == null || "".equals(s) || numRows == 1)
        {
            return s;
        }
        StringBuilder[] sbArray = new StringBuilder[numRows];
        int direction = 1;
        for (int i = 0; i < sbArray.length; i++)
        {
            sbArray[i] = new StringBuilder();
        }
        int index = 0;
        for (int i = 0; i < s.length(); i++)
        {
            sbArray[index].append(s.charAt(i));
            index += direction;
            if (index == 0 || index == numRows - 1)
            {
                direction = -direction;
            }
        }

        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < sbArray.length; i++)
        {
            stringBuilder.append(sbArray[i]);
        }
        return stringBuilder.toString();
    }
}
