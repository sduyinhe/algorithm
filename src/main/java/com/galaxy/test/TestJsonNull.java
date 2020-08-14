package com.galaxy.test;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.galaxy.entity.Area;

public class TestJsonNull {
    public static void main(String[] args) {
        Area area = new Area();
        area.setId(1);
        area.setName("北京市");
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            System.out.println(objectMapper.writeValueAsString(area));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }
}
