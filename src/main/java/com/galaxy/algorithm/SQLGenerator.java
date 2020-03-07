package com.galaxy.algorithm;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * 生成指定类型的sql
 */
public class SQLGenerator {

    public static void main(String[] args) {
        SQLGenerator.generatorUser();
    }

    /**
     * zhanghao@cheche365.com	张浩
     * zhangpeng@cheche365.com	张鹏
     * deqingyun@cheche365.com	德青云
     * yuandongxin@cheche365.com	袁东鑫
     * huangyanan@cheche365.com	黄亚南
     * majingjing@cheche365.com	马晶晶
     * gonghongju@cheche365.com	龚红举
     **/
    public static String generatorUser() {

        String personInfoTemplate = "INSERT INTO `person_info` (`id`, `name`, `email`) VALUES ({id}, '{userName}', '{email}');";
        String internalUserTemplate = "INSERT INTO `internal_user` (`id`, `person_info`, `account`, `enabled`, `locked`,`password`) VALUES ({id}, {id},'{email}', 1, 0,'$2a$10$5J1LxQA5mrrHtOKy3Lu.iemdGVyyln5778WgcPci.jGpSvxPLI8km');";
        String internalUserRoleTemplate = "INSERT INTO `internal_user_role` (`internal_user`, `role`) VALUES ({id}, 2);";
        List<TempUserEntity> mapList = new ArrayList<>();
        TempUserEntity tempUserEntity = new TempUserEntity();
        tempUserEntity.setEmail("zhanghao@cheche365.com");
        tempUserEntity.setUserName("张浩");
        mapList.add(tempUserEntity);
        tempUserEntity = new TempUserEntity();
        tempUserEntity.setEmail("zhangpeng@cheche365.com");
        tempUserEntity.setUserName("张鹏");
        mapList.add(tempUserEntity);

        tempUserEntity = new TempUserEntity();
        tempUserEntity.setEmail("deqingyun@cheche365.com");
        tempUserEntity.setUserName("德青云");
        mapList.add(tempUserEntity);

        tempUserEntity = new TempUserEntity();
        tempUserEntity.setEmail("yuandongxin@cheche365.com");
        tempUserEntity.setUserName("袁东鑫");
        mapList.add(tempUserEntity);

        tempUserEntity = new TempUserEntity();
        tempUserEntity.setEmail("huangyanan@cheche365.com");
        tempUserEntity.setUserName("黄亚南");
        mapList.add(tempUserEntity);

        tempUserEntity = new TempUserEntity();
        tempUserEntity.setEmail("majingjing@cheche365.com");
        tempUserEntity.setUserName("马晶晶");
        mapList.add(tempUserEntity);

        tempUserEntity = new TempUserEntity();
        tempUserEntity.setEmail("gonghongju@cheche365.com");
        tempUserEntity.setUserName("龚红举");
        mapList.add(tempUserEntity);

        final AtomicInteger cardinality = new AtomicInteger(1700);
        mapList.forEach(ele -> {
            System.out.println(personInfoTemplate.replaceAll("\\{id}", cardinality.toString()).replaceAll("\\{userName}", ele.getUserName())
                    .replaceAll("\\{email}", ele.getEmail()));
            System.out.println(internalUserTemplate.replaceAll("\\{id}", cardinality.toString()).replaceAll("\\{userName}", ele.getUserName())
                    .replaceAll("\\{email}", ele.getEmail()));
            System.out.println(internalUserRoleTemplate.replaceAll("\\{id}", cardinality.toString()).replaceAll("\\{userName}", ele.getUserName())
                    .replaceAll("\\{email}", ele.getEmail()));
            cardinality.getAndIncrement();
        });
        return null;
    }
}
