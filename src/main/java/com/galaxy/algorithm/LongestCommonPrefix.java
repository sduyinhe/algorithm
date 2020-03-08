package com.galaxy.algorithm;

public class LongestCommonPrefix
{
    public static void main(String[] args)
    {
        LongestCommonPrefix longestCommonPrefix = new LongestCommonPrefix();
        System.out.println(longestCommonPrefix.longestCommonPrefix(new String[]{"dog", "racecar", "car"}));
    }

    public String longestCommonPrefix(String[] strs)
    {
        if (strs == null || strs.length == 0)
            return "";
        String prefix = strs[0];
        for (String s : strs)
        {
            while (s.indexOf(prefix) != 0)
            {
                if (prefix.length() == 1)
                {
                    return "";
                }
                prefix = prefix.substring(0, prefix.length() - 1);
            }
        }
        return prefix;
    }
}
