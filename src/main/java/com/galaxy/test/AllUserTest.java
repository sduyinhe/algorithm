package com.galaxy.test;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.*;

public class AllUserTest {
    public static void main(String[] args) throws IOException {
        System.out.println(System.getProperty("user.dir"));
        ObjectMapper objectMapper = new ObjectMapper();
        List<User> userList = objectMapper.readValue(new File(System.getProperty("user.dir") + "/src/main/java/com/galaxy/test/allUser.json"), new TypeReference<ArrayList<User>>() {
        });

        Collections.sort(userList, new Comparator<User>() {
            @Override
            public int compare(User o1, User o2) {
                return o1.getId().compareTo(o2.getId());
            }
        });


        userList.forEach(user -> {
            System.out.println(user.getId() + "," + user.getRealname() + "," + user.getMobile() + "," + user.getEmail() + "," + user.getChecheEmail());
        });
    }

}
