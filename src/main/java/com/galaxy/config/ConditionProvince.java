package com.galaxy.config;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConditionProvince {
    private String id;
    private String name;
    private ConditionCity city;
}
