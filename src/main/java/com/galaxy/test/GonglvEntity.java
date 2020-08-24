package com.galaxy.test;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * {"load_power":0,"line_power":0,"tol_tim":1597852800000,"chp_power":0,"crtTim":1597852800000,"pc_power":0,"pv_power":0}
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(value = JsonInclude.Include.NON_NULL)
public class GonglvEntity implements Serializable {
    @JsonProperty("load_power")
    Integer loadPower;
    @JsonProperty("line_power")
    Integer linePower;
    @JsonProperty("tol_tim")
    Long tolTim;
    @JsonProperty("chp_power")
    Integer chpPower;
    @JsonProperty("crt_time")
    Long crtTime;
    @JsonProperty("pc_power")
    Integer pcPower;
    @JsonProperty("pv_power")
    Integer pvPower;
}
