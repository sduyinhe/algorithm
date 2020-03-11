package com.galaxy.algorithm;

import java.util.ArrayList;
import java.util.List;

/**
 * 19. 删除链表的倒数第N个节点
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * <p>
 * 示例：
 * <p>
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * <p>
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 说明：
 * <p>
 * 给定的 n 保证是有效的。
 * <p>
 * 进阶：
 * <p>
 * 你能尝试使用一趟扫描实现吗？
 * <p>
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
public class RemoveNthFromEnd
{
    public static void main(String[] args)
    {
        ListNode currentNode = new ListNode(1);
        RemoveNthFromEnd removeNthFromEnd = new RemoveNthFromEnd();
        System.out.println(removeNthFromEnd.removeNthFromEnd2(currentNode, 1));
    }

    public ListNode removeNthFromEnd(ListNode head, int n)
    {
        int length = 1;
        // /dami/
        ListNode dummy = new ListNode(0);

        ListNode currentNode = head;
        while (currentNode.next != null)
        {
            length++;
            currentNode = currentNode.next;
        }
        dummy.next = head;

        int target = length - n;
        currentNode = dummy;
        while (target > 0)
        {
            target--;
            currentNode = currentNode.next;
        }

        currentNode.next = currentNode.next.next;

        return dummy.next;
    }

    /**
     * 双指针处理法
     */
    public ListNode removeNthFromEnd2(ListNode head, int n)
    {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode first = dummy;
        ListNode second = dummy;
        for (int i = 0; i <= n; i++)
        {
            first = first.next;
        }

        while (first != null)
        {
            first = first.next;
            second = second.next;
        }
        second.next = second.next.next;
        return dummy.next;
    }

    public boolean isValid(String s)
    {
        List<String> list = new ArrayList<>();
        boolean flag = true;
        char[] charArray = s.toCharArray();
        for (int i = 0; i < charArray.length; i++)
        {
            if (charArray[i] == '(')
            {
                list.add("(");
            } else if (charArray[i] == ')')
            {
                if (list.size() == 0 || !list.get(list.size() - 1).equals("("))
                {
                    flag = false;
                    break;
                } else
                {
                    list.remove(list.size() - 1);
                }
            } else if (charArray[i] == '[')
            {
                list.add("[");
            } else if (charArray[i] == ']')
            {
                if (list.size() == 0 || !list.get(list.size() - 1).equals("["))
                {
                    flag = false;
                    break;
                } else
                {
                    list.remove(list.size() - 1);
                }
            } else if (charArray[i] == '{')
            {
                list.add("{");
            } else if (charArray[i] == '}')
            {
                if (list.size() == 0 || !list.get(list.size() - 1).equals("{"))
                {
                    flag = false;
                    break;
                } else
                {
                    list.remove(list.size() - 1);
                }
            }
        }
        if (list.size() > 0)
        {
            flag = false;
        }
        return flag;
    }
}
