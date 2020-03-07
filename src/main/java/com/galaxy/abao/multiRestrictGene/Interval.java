package com.galaxy.abao.multiRestrictGene;

import lombok.Data;

@Data
public class Interval {
    private Integer id;
    private Integer min;
    private Integer max;
    private Boolean minIsClosed;
    private Boolean maxIsClosed;
    private Unit minUnit;
    private Unit maxUnit;

}
