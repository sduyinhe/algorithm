package com.galaxy.algorithm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 三数之和（类似的两数之和）
 * <p>
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * <p>
 * 注意：答案中不可以包含重复的三元组。
 * <p>
 *  
 * <p>
 * 示例：
 * <p>
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * <p>
 * 满足要求的三元组集合为：
 * [
 * [-1, 0, 1],
 * [-1, -1, 2]
 * ]
 * <p>
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/3sum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
public class ThreeSum
{
    public static void main(String[] args)
    {
        int[] a = new int[]{-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0};
        //        Arrays.sort(a);
        //        System.out.println(Arrays.toString(a));
        ThreeSum threeSum = new ThreeSum();
        threeSum.threeSum(a);
        System.out.println(a.toString());
        //[[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]]
        //[[-5,1,4],[-2,-2,4],[-2,1,1],[0,0,0]]
    }

    public List<List<Integer>> threeSum(int[] nums)
    {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0)
            return result;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++)
        {
            if (i > 0 && nums[i] == nums[i - 1])
            {
                continue;
            }
            int right = nums.length - 1;
            int left = i + 1;
            int target = -nums[i];
            while (left < right)
            {
                List<Integer> tmpList = new ArrayList<>();
                if (nums[left] + nums[right] == target)
                {
                    tmpList.add(nums[i]);
                    tmpList.add(nums[left]);
                    tmpList.add(nums[right]);
                    result.add(tmpList);
                    left++;
                    right--;
                    while (left < nums.length - 1 && nums[left] == nums[left - 1])
                        left++;
                    while (right > 0 && nums[right] == nums[right + 1])
                        right--;
                } else if (nums[left] + nums[right] > target)
                {
                    right--;
                } else if (nums[left] + nums[right] < target)
                {
                    left++;
                }
            }
        }
        return result;
    }

}
