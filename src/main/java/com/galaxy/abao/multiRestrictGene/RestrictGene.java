package com.galaxy.abao.multiRestrictGene;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class RestrictGene {
    private Integer id;
    private String code;
    private String defaultValue;
    private Interval interval;
    private List<Option> options;
    private List<Precondition> preconditions;
    private DataDictionary dataDictionary;
}
