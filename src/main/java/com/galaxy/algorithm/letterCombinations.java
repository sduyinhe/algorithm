package com.galaxy.algorithm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 电话号码的字母组合
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * <p>
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * <p>
 * <p>
 * <p>
 * 示例:
 * <p>
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * <p>
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
public class letterCombinations
{
    public static void main(String[] args)
    {
        letterCombinations letterCombinations = new letterCombinations();
        System.out.println(letterCombinations.letterCombinations("234"));
    }

    public List<String> letterCombinations(String digits)
    {
        List<String> output = new ArrayList<>();

        if (digits == null || "".equals(digits))
            return output;
        Map<String, String> phone = new HashMap<String, String>();
        phone.put("2", "abc");
        phone.put("3", "def");
        phone.put("4", "ghi");
        phone.put("5", "jkl");
        phone.put("6", "mno");
        phone.put("7", "pqrs");
        phone.put("8", "tuv");
        phone.put("9", "wxyz");

        backtrack(output, phone, "", digits);
        return output;
    }

    private void backtrack(List<String> output, Map<String, String> phone, String combinations, String nextDigits)
    {
        if (nextDigits.length() == 0)
        {
            output.add(combinations);
        } else
        {
            String letters = phone.get(nextDigits.substring(0, 1));
            for (int j = 0; j < letters.length(); j++)
            {
                backtrack(output, phone, combinations + letters.charAt(j), nextDigits.substring(1));
            }
        }
    }
}
