package com.galaxy.abao.multiRestrictGene;

import lombok.Data;

import java.util.List;

@Data
public class Precondition {
    private Integer id;
    private String code;
    private List<Relationship> relationships;
}
