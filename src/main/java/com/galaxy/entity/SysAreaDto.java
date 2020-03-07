package com.galaxy.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(value = JsonInclude.Include.NON_NULL)
public class SysAreaDto {
    private String value;
    private String label;
    private List<SysAreaDto> children;
}
