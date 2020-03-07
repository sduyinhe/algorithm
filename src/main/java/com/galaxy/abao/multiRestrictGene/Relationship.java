package com.galaxy.abao.multiRestrictGene;

import lombok.Data;

import java.util.List;

@Data
public class Relationship {
    private Integer id;
    private Boolean display;
    private Interval preInterval;
    private Interval postInterval;
    private List<Option> preOptions;
    private List<Option> postOptions;
}
