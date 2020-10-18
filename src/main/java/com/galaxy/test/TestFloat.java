package com.galaxy.test;

import java.nio.ByteBuffer;

public class TestFloat {
    public static void main(String[] args) {
//        float ff = 33.24f;
////        byte[] bytes = getFloatBytes(ff);
////        System.out.println(toFloat(bytes, 0));
        long ll = 12334L;
        byte[] bytes = getBytes(ll);
        System.out.println(toInt64(bytes));
    }

    //这个函数将float转换成byte[]
    public static byte[] getFloatBytes(float f) {
        // 把float转换为byte[]
        int fbit = Float.floatToIntBits(f);
        byte[] b = new byte[4];
        for (int i = 0; i < 4; i++) {
            b[i] = (byte) (fbit >> (24 - i * 8));
        }
        return b;
//        // 翻转数组
//        int len = b.length;
//        // 建立一个与源数组元素类型相同的数组
//        byte[] dest = new byte[len];
//        // 为了防止修改源数组，将源数组拷贝一份副本
//        System.arraycopy(b, 0, dest, 0, len);
//        byte temp;
//        // 将顺位第i个与倒数第i个交换
//        for (int i = 0; i < len / 2; ++i) {
//            temp = dest[i];
//            dest[i] = dest[len - i - 1];
//            dest[len - i - 1] = temp;
//        }
//        return dest;
    }


    //这个函数将byte转换成float
    public static float toFloat(byte[] b, int index) {
        int l;
        l = b[index + 3];
        l &= 0xff;
        l |= ((long) b[index + 2] << 8);
        l &= 0xffff;
        l |= ((long) b[index + 1] << 16);
        l &= 0xffffff;
        l |= ((long) b[index + 0] << 24);
        return Float.intBitsToFloat(l);
    }

    private static ByteBuffer buffer = ByteBuffer.allocate(8);

    public static long toInt64(byte[] bytes) {
        buffer.put(bytes, 0, bytes.length);
        buffer.flip();//need flip
        return buffer.getLong();
    }

    public static byte[] getBytes(long x) {
        buffer.putLong(0, x);
        return buffer.array();
    }
}
