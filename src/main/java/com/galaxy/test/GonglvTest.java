package com.galaxy.test;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

public class GonglvTest {
    public static void main(String[] args) throws IOException {
        System.out.println(System.getProperty("user.dir"));
        ObjectMapper objectMapper = new ObjectMapper();
        List<GonglvEntity> gonglvList = objectMapper.readValue(new File(System.getProperty("user.dir") + "/src/main/java/com/galaxy/test/dzglqxMock.json"), new TypeReference<ArrayList<GonglvEntity>>() {
        });

        List<GonglvEntity> gonglvList2 = gonglvList.stream().map(ele -> {
                    if (ele.getPvPower() != null && ele.getPvPower() != 0) {
                        //ele.setPvPower((int) (100 * Math.random()));
                        int chp = ele.getPvPower() - (int) (100 * Math.random());
                        ele.setChpPower(chp > 0 ? chp : 0);
                        int line = ele.getPvPower() - (int) (400 * Math.random());
                        ele.setLinePower(line > 0 ? line : 0);
                        int load = ele.getPvPower() - (int) (600 * Math.random()) - 100;
                        ele.setLoadPower(load > 0 ? load : 0);
                        int pc = ele.getPvPower() - (int) (700 * Math.random());
                        ele.setPcPower(pc > 0 ? pc : 0);
                    }
                    return ele;
                }
        ).collect(Collectors.toList());
        System.out.println(objectMapper.writeValueAsString(gonglvList2));
    }

}
