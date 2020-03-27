package com.galaxy.algorithm.queue;

// 本题为考试多行输入输出规范示例，无需提交，不计分。
/**
 * 输入两个不超过100位的大整数，输入两个数的乘积
 */

import java.util.Scanner;

public class Main1 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        char[] param1 = trim1(in.next()).toCharArray();
        char[] param2 = trim1(in.next()).toCharArray();
        if (param1.length > 100) {
           System.out.println("error");
            return;
        }

        if (param2.length > 100) {
            System.out.println("error");
            return;
        }

        if(!checkNum(param1)||!checkNum(param2)){
            System.out.println("error");
            return;
        }

        String result = multiBigInt(param1, param2);
// 除去首位的0
        char[] temp = result.toCharArray();
        int i = 0;
        for (; i < temp.length; i++) {
            if (temp[i] == '0')
                continue;
            else
                break;
        }

        System.out.println(result.substring(i, result.length()));
        in.close();
    }

    private static boolean checkNum(char[] num)
    {
        int i;
        for(i = 0; i < num.length; i++)
        {
            if(num[i] < '0' || num[i] > '9')
            {
                return false;
            }
        }
        return true;
    }
//计算单个字符 乘 一个字符串

    public static String multiBigIntSingle(char[] a, char b) {

        int pre = 0;

        String result = "";

        for (int j = a.length - 1; j >= 0; j--) {

            int temp = a[j] - '0';

            int tempb = b - '0';

            int sum = temp * tempb + pre;

            pre = sum / 10;

            int left = sum % 10;

            result += left;

        }

        if (pre != 0)

            result += pre;

        char[] sb = result.toCharArray();

        String value = "";

        for (int j = sb.length - 1; j >= 0; j--)

            value += sb[j];

        return value;

    }

    public static String multiBigInt(char[] a, char[] b) {

        String c = "";// 保存每一行相加后的结果

        int j = 0;// 控制错位

        for (int i = b.length - 1; i >= 0; i--) {

            c = addBigInt(c.toCharArray(), multiBigIntSingle(a, b[i]).toCharArray(), j++);

        }

        return c;

    }

//将两个大整数相加 len用于控制错位相加

    public static String addBigInt(char[] a, char[] b, int len) {

        int maxlen = a.length + b.length;

        char[] revA = reverse(a);

        char[] revB = reverse(b);

        String sb = "";

        int tempa = 0;

        int tempb = 0;

        int pre = 0;

        for (int i = 0; i < maxlen; i++) {

            tempa = 0;

            tempb = 0;

            if (i < revA.length)

                tempa = revA[i] - '0';

// 第二行要先以为len的距离 ,错位相加

            if (i < revB.length + len && i >= len)

                tempb = revB[i - len] - '0';

            int sum = tempa + tempb + pre;

            pre = sum / 10;

            int left = sum % 10;

            sb += left;

        }

//        while (pre != 0) {
//
//            sb += pre % 10;
//
//            pre /= 10;
//
//        }

        char[] result = sb.toCharArray();

        String value = "";

//        for (int j = result.length - 1; j >= 0; j--)
//
//            value += result[j];

        return new String(reverse(result));

    }

//将一个字符数组反转，便于整数相加

    public static char[] reverse(char[] a) {

        char[] b = new char[a.length];

        int i = 0;

        int j = a.length - 1;

        for (; j >= 0; j--) {

            b[i] = a[j];

            i++;

        }

        return b;

    }

//去掉字符串两端空格

    public static String trim1(String param) {

        param = param.trim();

//去全角空格

        while (param.startsWith("　")) {

            param = param.substring(1, param.length()).trim();

        }

        while (param.endsWith("　")) {

            param = param.substring(0, param.length() - 1).trim();

        }

        return param;

    }

}