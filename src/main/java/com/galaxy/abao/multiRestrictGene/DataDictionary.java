package com.galaxy.abao.multiRestrictGene;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class DataDictionary {
    private Integer id;
    private String name;
}
