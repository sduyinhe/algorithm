package com.galaxy.algorithm;

/**
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 * <p>
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * <p>
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 * <p>
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
 * <p>
 * 示例 1:
 * <p>
 * 输入: 3
 * 输出: "III"
 * 示例 2:
 * <p>
 * 输入: 4
 * 输出: "IV"
 * 示例 3:
 * <p>
 * 输入: 9
 * 输出: "IX"
 * 示例 4:
 * <p>
 * 输入: 58
 * 输出: "LVIII"
 * 解释: L = 50, V = 5, III = 3.
 * 示例 5:
 * <p>
 * 输入: 1994
 * 输出: "MCMXCIV"
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 * <p>
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/integer-to-roman
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
public class IntegerToRoman
{
    public static void main(String[] args)
    {
        IntegerToRoman integerToRoman = new IntegerToRoman();
        System.out.println(integerToRoman.romanToInt("IV"));
    }

    public String intToRoman(int num)
    {
        String[] one = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
        String[] two = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
        String[] three = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
        String[] four = {"", "M", "MM", "MMM"};
        return four[num / 1000] + three[num % 1000 / 100] + two[num % 100 / 10] + one[num % 10];
    }

    /**
     * * 字符          数值
     * * I             1
     * * V             5
     * * X             10
     * * L             50
     * * C             100
     * * D             500
     * * M             1000
     *
     * @param roman
     * @return
     */
    public int romanToInt(String roman)
    {
        char[] charArray = roman.toCharArray();
        int a = 0;
        for (int i = 0; i < charArray.length; i++)
        {
            if (i < charArray.length - 1)
            {
                if (charArray[i] == 'I' && charArray[i + 1] == 'V')
                {
                    a += 4;
                    i++;
                    continue;
                } else if (charArray[i] == 'I' && charArray[i + 1] == 'X')
                {
                    a += 9;
                    i++;
                    continue;
                } else if (charArray[i] == 'X' && charArray[i + 1] == 'L')
                {
                    a += 40;
                    i++;
                    continue;
                } else if (charArray[i] == 'X' && charArray[i + 1] == 'C')
                {
                    a += 90;
                    i++;
                    continue;
                } else if (charArray[i] == 'C' && charArray[i + 1] == 'D')
                {
                    a += 400;
                    i++;
                    continue;
                } else if (charArray[i] == 'C' && charArray[i + 1] == 'M')
                {
                    a += 900;
                    i++;
                    continue;
                }
            }
            switch (charArray[i])
            {
                case 'M':
                    a += 1000;
                    break;
                case 'D':
                    a += 500;
                    break;
                case 'C':
                    a += 100;
                    break;
                case 'L':
                    a += 50;
                    break;
                case 'X':
                    a += 10;
                    break;
                case 'V':
                    a += 5;
                    break;
                case 'I':
                    a += 1;
                    break;
            }
        }

        return a;
    }
}
