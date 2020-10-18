package com.galaxy.ecsGenerator;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by luowei on 2017/7/24.
 */
public class Utility {

//    public static String tableNameConvertLowerCamel(String tableName) {
//        StringBuilder result = new StringBuilder();
//        if (tableName != null && tableName.length() > 0) {
//            tableName = tableName.toLowerCase();//兼容使用大写的表名
//            boolean flag = false;
//            for (int i = 0; i < tableName.length(); i++) {
//                char ch = tableName.charAt(i);
//                if ("_".charAt(0) == ch) {
//                    flag = true;
//                } else {
//                    if (flag) {
//                        result.append(Character.toUpperCase(ch));
//                        flag = false;
//                    } else {
//                        result.append(ch);
//                    }
//                }
//            }
//        }
//        return result.toString();
//    }

    public static String tableNameConvertUpperCamel(String tableName) {
        String camel = tableNameConvertLowerCamel(tableName);
        return camel.substring(0, 1).toUpperCase() + camel.substring(1);

    }

    public static String tableNameConvertLowerCamel(String modelName) {
        return modelName.substring(0, 1).toLowerCase() + modelName.substring(1);

    }

    public static String underscoreToCamelCase(String name){

        String[] arr = name.split("_");
        for (int i =0;i < arr.length ;i++){
            if(i== 0){
                arr[i] = arr[i].substring(0, 1).toLowerCase() + arr[i].substring(1);
            }else{
                arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
            }
        }
        return StringUtils.join(arr);
    }

    public static String substringTableAlias(String name){
        String[] arr = name.split("_");
        String removePrefix;
        if(arr.length > 1){
            removePrefix = StringUtils.join(ArrayUtils.remove(arr,0),"_");
        }else{
            removePrefix = arr[0];
        }
        return removePrefix;
    }

    public static String upperNameFirstChar(String name){
        String[] arr = name.split("_");
        return StringUtils.join(Arrays.stream(arr).map(e->tableNameConvertUpperCamel(e)).toArray());
    }

    public static Map<String, Object> transBean2Map(Object obj) {
        if(obj == null){
            return null;
        }
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            BeanInfo beanInfo = Introspector.getBeanInfo(obj.getClass());
            PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
            for (PropertyDescriptor property : propertyDescriptors) {
                String key = property.getName();

                // 过滤class属性
                if (!key.equals("class")) {
                    // 得到property对应的getter方法
                    Method getter = property.getReadMethod();
                    Object value = getter.invoke(obj);

                    map.put(key, value);
                }

            }
        } catch (Exception e) {
            System.out.println("transBean2Map Error " + e);
        }
        return map;
    }
}
