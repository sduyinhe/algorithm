package com.galaxy.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@EqualsAndHashCode
@ToString(exclude = {"parent"})
public class SysArea implements Serializable {
    private static final long serialVersionUID = 42L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "parent_id")
    @JsonIgnore
    private SysArea parent;
    private String name;
    private String code;
    private Integer type;
    private Integer orders;
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime createTime;
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime updateTime;
    @Transient
    private List<SysArea> children;
}
