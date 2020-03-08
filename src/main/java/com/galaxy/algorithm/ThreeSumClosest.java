package com.galaxy.algorithm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * <p>
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * <p>
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * <p>
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/3sum-closest
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
public class ThreeSumClosest
{
    public static void main(String[] args)
    {
        ThreeSumClosest threeSumClosest = new ThreeSumClosest();
        System.out.println(threeSumClosest.threeSumClosest(new int[]{0, 2, 1, -3}, 1));
    }

    public int threeSumClosest(int[] nums, int target)
    {
        int closest = Integer.MAX_VALUE;
        int flag = 1;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++)
        {
            int left = i + 1;
            int right = nums.length - 1;
            while (left < right)
            {
                int tmpClosest = nums[left] + nums[right] + nums[i] - target;
                if (tmpClosest > 0)
                {
                    closest = Math.min(tmpClosest, closest);
                    if (closest == tmpClosest)
                    {
                        flag = 1;
                    }
                    right--;
                } else if (tmpClosest < 0)
                {
                    closest = Math.min(-tmpClosest, closest);
                    if (closest == -tmpClosest)
                        flag = -1;
                    left++;

                } else
                {
                    return target;
                }
            }
        }
        return target + closest * flag;
    }
}
