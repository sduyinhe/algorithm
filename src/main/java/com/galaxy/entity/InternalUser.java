package com.galaxy.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Data
@EqualsAndHashCode(exclude = {"personInfo", "createTime", "updateTime"})
//需要排除algorithmPerson，不然查询AlgorithmUser实体时，调用toString方法会陷入死循环，导致线程栈溢出
@ToString(exclude = "personInfo")
@Table(name = "internal_user")
public class InternalUser implements Serializable {
    private static final long serialVersionUID = 42L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE})
    //如果不指定外键（不写JoinColumn)，hibernate自动帮你生成你指向这个类的类名加上下划线再加上id的列，也就是person_info_id
    @JoinColumn(name = "person_info")
    //jackson需要排除，否则会导致死循环。但是实体中是有这个数据的，转换后的json里面没有。
    @JsonIgnore
    private PersonInfo personInfo;
    private String password;
    private String account;
    private Integer enabled;
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime createTime;
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime updateTime;
}
