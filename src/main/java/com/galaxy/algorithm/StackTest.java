package com.galaxy.algorithm;

import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class StackTest
{
    private Map<Character, Character> mappings;

    public static void main(String[] args)
    {
        StackTest stackTest = new StackTest();
        System.out.println(stackTest.isValid("]"));
    }

    public boolean isValid(String s)
    {
        mappings = new HashMap<>();
        mappings.put(')', '(');
        mappings.put(']', '[');
        mappings.put('}', '{');
        Stack<Character> stack = new Stack<>();
        char[] charArray = s.toCharArray();
        for (int i = 0; i < charArray.length; i++)
        {
            if (mappings.containsKey(charArray[i]))
            {

                Character c = stack.isEmpty() ? null : stack.pop();
                if (c != mappings.get(charArray[i]))
                {
                    return false;
                }
            } else
            {
                stack.push(charArray[i]);

            }
        }

        return stack.isEmpty();
    }
}
