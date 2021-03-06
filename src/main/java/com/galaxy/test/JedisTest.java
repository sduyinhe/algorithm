package com.galaxy.test;

import com.galaxy.spark.RedisUtil;
import org.apache.spark.ml.linalg.Vectors;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.SortingParams;

import java.io.*;
import java.math.BigDecimal;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.*;
import java.util.stream.Collectors;

public class JedisTest {
    public static void main(String[] args) {
        BigDecimal bigDecimal;
        Jedis jedis = RedisUtil.getJedis();
        Long[] longList = new Long[10];
        for (int i = 0; i < 10; i++) {
            longList[i] = 50L;
        }
        try {
            //Long数组转成C#需要的格式
            String longListString = Arrays.asList(longList).stream().map(String::valueOf).collect(Collectors.joining(",", "[", "]"));
            jedis.set("key1", longListString);
            //转成Long数组
            Arrays.asList(longListString.substring(1, longListString.length() - 1).split(",")).stream().map(Long::valueOf).collect(Collectors.toList()).forEach(System.out::println);
            //jedis.set("testLong".getBytes("UTF-8"), serialize(longList));
//
//            byte[] longByte = jedis.get("testLong".getBytes("UTF-8"));
//            long[] testObject = (long[]) unserialize(longByte);
            //System.out.println("反序列化的值为:" + testObject.toString());
//            for (int i = 0; i < testObject.length; i++) {
//                System.out.println(testObject[i]);
//            }
            // Arrays.asList(testObject).stream().forEach(ele -> System.out.println(ele));
        } catch (Exception e) {
            e.printStackTrace();
        }
//        Set<String> stringSet = jedis.smembers("USER_ID_10");
//        stringSet.forEach(System.out::println);
//        int[] array1 = {0, 2, 3};
//        double[] array2 = {2, 33, 44};
////        jedis.set("name","yanghaowen");
////        System.out.println(jedis.get("name"));
////        jedis.append("name",".com");
////        System.out.println(jedis.get("name"));
////        jedis.del("name");
////        System.out.println(jedis.get("name"));
////        jedis.mset("name","yhw","age","32","qq","123456");
////        jedis.incr("age");
////        System.out.println("name="+jedis.get("name")+"--age="+jedis.get("age"));
////        jedis.del("name");
////        Map<String,String> map = new HashMap<>();
////        map.put("name1","yhw");
////        map.put("name2","zhaoli");
////        map.put("name3","zhanss");
////        jedis.hmset("name",map);
////        List<String> list = jedis.hmget("name","name1");
////        jedis.hdel("name","name1");
////
////        System.out.println(jedis.hlen("name")+"--"+jedis.exists("name")+"--"+jedis.hvals("name")+"--"+jedis.hkeys("name"));
////        jedis.del("name");
////        jedis.lpush("name", "1");
////        jedis.lpush("name", "2");
////        jedis.lpush("name", "4");
////        jedis.lpush("name", "3");
////        jedis.rpush("name", "5");
////        String[] strings={"6","7","8"};
////        jedis.lpush("name",strings);
////        System.out.println(jedis.lrange("name", 0, -1));
////        System.out.println(jedis.sort("name"));
//        String[] strings = {"hello4", "hello5"};
//        jedis.del("name");
//        String str = jedis.get("abao-token-Abao_Register_Token_086c72ad-b25e-47d3-9392-181c0785c043");
//        System.out.println("str值为" + str);
//        jedis.set("abao-token-024cf802-ed18-4c01-88e1-d18a09513eb4", "hello1");
        // System.out.println(jedis.smembers("spring:session:admin:index:org.springframework.session.FindByIndexNameSessionRepository.PRINCIPAL_NAME_INDEX_NAME:liuyang@cheche365.com"));
        //jedis.set("abao-token-Abao_Register_Token_187e046d-ec4a-4018-b5bf-9483a159ecbd","{\"user\":{\"updateTime\":null,\"mobile\":\"17092166518\",\"province\":\"\",\"member\":null,\"nickName\":null,\"id\":356,\"sex\":null,\"headImgUrl\":null,\"createTime\":null,\"logicalDel\":false,\"channel\":\"abao\",\"city\":\"\",\"password\":null,\"account\":null,\"language\":null,\"country\":\"\",\"enabled\":true,\"source\":\"_HOME_CUSTOM_SERVICE\",\"unionId\":null},\"token\":\"187e046d-ec4a-4018-b5bf-9483a159ecbb\",\"registerInfo\":{\"authSource\":\"_A_BAO_INSURANCE\",\"updateTime\":null,\"userId\":156,\"registerNo\":\"17092166518\",\"id\":152,\"createTime\":null,\"registerType\":\"_MOBILE\"}}");
//        jedis.sadd("name", "hello2");
//        jedis.sadd("name", "hello3");
//        jedis.sadd("name", strings);
//        jedis.sadd("name", strings);
//        jedis.srem("name", "hello2");
//        jedis.expire("name", 5);
//        try {
//            Thread.sleep(4000L);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        System.out.println(jedis.smembers("name"));
////        System.out.println(jedis.sismember("name","hello2"));
////        System.out.println(jedis.srandmember("name"));
////        System.out.println(jedis.scard("name"));
//        try {
//            System.out.println(URLDecoder.decode("CF%E4%BB%8B%E7%BB%8D", "UTF-8"));
//        } catch (UnsupportedEncodingException e) {
//            e.printStackTrace();
//        }

        //testJedis2(jedis);
    }

    /**
     * redis 性能测试
     */
    public static void testJedis(Jedis jedis) {
        long startTime = System.currentTimeMillis();
        int i = 0;
        while (true) {
            long endTime = System.currentTimeMillis();
            if (endTime - startTime > 1000) {
                break;
            }
            i++;
            jedis.set("yhw" + i, i + "");
        }
        System.out.println("redis每秒操作:" + i);
    }

    public static void testJedis2(Jedis jedis) {
        long startTime = System.currentTimeMillis();
        int i = 0;
        while (i <= 185) {

            i++;
            jedis.del("yhw" + i);
        }
        long endTime = System.currentTimeMillis();
        System.out.println("redis删除数据耗时:" + (endTime - startTime));
    }

    /**
     * redis 性能测试
     */
    public static void testJedis3() {
        Jedis jedis = new Jedis("192.168.2.81", 6379, 100000);
        long startTime = System.currentTimeMillis();
        int i = 0;
        try {
            while (true) {
                long endTime = System.currentTimeMillis();
                if (endTime - startTime > 1000) {
                    break;
                }
                i++;
                jedis.set("yhw" + i, i + "");
            }
        } finally {
            jedis.close();
        }
        System.out.println("redis每秒操作:" + i);
    }


    /**
     * 序列化
     *
     * @param object
     * @return
     */
    public static byte[] serialize(Object object) {
        ObjectOutputStream oos = null;
        ByteArrayOutputStream baos = null;
        // 序列化
        baos = new ByteArrayOutputStream();
        try {
            oos = new ObjectOutputStream(baos);
            oos.writeObject(object);
            byte[] bytes = baos.toByteArray();
            return bytes;
        } catch (IOException e) {
            // TODO Auto-generated catch block
            System.out.println(e.getMessage());
        } finally {
            try {
                oos.close();
                baos.close();
            } catch (IOException e) {
                // TODO Auto-generated catch block
                System.out.println(e.getMessage());
            }

        }
        return null;
    }

    /**
     * 反序列化
     *
     * @param bytes
     * @return
     */
    public static Object unserialize(byte[] bytes) {
        ByteArrayInputStream bais = null;
        try {
            // 反序列化
            bais = new ByteArrayInputStream(bytes);
            ObjectInputStream ois = new ObjectInputStream(bais);
            return ois.readObject();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            System.out.println(e.getMessage());
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            System.out.println(e.getMessage());
        } finally {
            try {
                bais.close();
            } catch (IOException e) {
                // TODO Auto-generated catch block
                System.out.println(e.getMessage());
            }

        }
        return null;
    }

}
