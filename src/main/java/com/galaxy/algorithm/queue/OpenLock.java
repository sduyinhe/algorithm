package com.galaxy.algorithm.queue;

import java.util.*;

/**
 * 打开转盘锁
 * <p>
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
 * 每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
 * <p>
 * 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 * <p>
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 * <p>
 * 字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。
 * <p>
 * <p>
 * <p>
 * 示例 1:
 * <p>
 * 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
 * 输出：6
 * 解释：
 * 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
 * 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
 * 因为当拨动到 "0102" 时这个锁就会被锁定。
 * 示例 2:
 * <p>
 * 输入: deadends = ["8888"], target = "0009"
 * 输出：1
 * 解释：
 * 把最后一位反向旋转一次即可 "0000" -> "0009"。
 * 示例 3:
 * <p>
 * 输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
 * 输出：-1
 * 解释：
 * 无法旋转到目标数字且不被锁定。
 * 示例 4:
 * <p>
 * 输入: deadends = ["0000"], target = "8888"
 * 输出：-1
 * <p>
 * <p>
 * 提示：
 * <p>
 * 死亡列表 deadends 的长度范围为 [1, 500]。
 * 目标数字 target 不会在 deadends 之中。
 * 每个 deadends 和 target 中的字符串的数字会在 10,000 个可能的情况 '0000' 到 '9999' 中产生。
 */
public class OpenLock
{
    public static void main(String[] args)
    {
        String[] deadends = {"8887","8889","8878","8898","8788","8988","7888","9888"};
        OpenLock openLock = new OpenLock();
        System.out.println("最小解锁次数为" + openLock.openLock(deadends, "8888"));
    }

    private class Lock
    {
        public String lockNum;
        public int lockLength;

        public Lock(String lockNum, int lockLength)
        {
            this.lockNum = lockNum;
            this.lockLength = lockLength;
        }

        public String getLockNum()
        {
            return lockNum;
        }

        public void setLockNum(String lockNum)
        {
            this.lockNum = lockNum;
        }

        public int getLockLength()
        {
            return lockLength;
        }

        public void setLockLength(int lockLength)
        {
            this.lockLength = lockLength;
        }
    }

    public int openLock(String[] deadends, String target)
    {
        if (target.equals("0000"))
        {
            return 0;
        }
        Set<String> deadSet = new HashSet<>(Arrays.asList(deadends));
        Set<String> visitedSet = new HashSet<>();
        Queue<Lock> q = new LinkedList<>();
        //对于队列里面的每个元素需要记录他的路径长度
        int cnt = -1;
        q.offer(new Lock("0000", 0));
        while (!q.isEmpty())
        {
            Lock tmpLock = q.poll();
            if (deadSet.contains(tmpLock.getLockNum()))
            {
                continue;
            }
            if (target.equals(tmpLock.getLockNum()))
            {
                return tmpLock.getLockLength();
            }
            getNext(tmpLock, q, deadSet, visitedSet);
        }

        return cnt;
    }

    public void getNext(Lock tmpLock, Queue<Lock> q, Set<String> deadSet, Set<String> visitedSet)
    {

        String currentStr = tmpLock.getLockNum();
        int lockLength = tmpLock.getLockLength();
        char ascChar, descChar;
        String ascString, descString;
        for (int i = 0; i < 4; i++)
        {
            char currentChar = currentStr.charAt(i);
            if (currentChar == '0')
            {
                ascChar = '1';
                descChar = '9';
            } else if (currentChar == '9')
            {
                ascChar = '0';
                descChar = '8';
            } else
            {
                ascChar = (char) (currentChar + 1);
                descChar = (char) (currentChar - 1);
            }

            ascString = currentStr.substring(0, i) + ascChar + currentStr.substring(i + 1);
            descString = currentStr.substring(0, i) + descChar + currentStr.substring(i + 1);
            if (!deadSet.contains(ascString) && !visitedSet.contains(ascString))
            {
                //System.out.println("ascString="+ascString);
                q.offer(new Lock(ascString, lockLength + 1));
                visitedSet.add(ascString);
            }
            if (!deadSet.contains(descString) && !visitedSet.contains(descString))
            {
                //System.out.println("descString="+descString);
                q.offer(new Lock(descString, lockLength + 1));
                visitedSet.add(descString);
            }
        }
    }
}
