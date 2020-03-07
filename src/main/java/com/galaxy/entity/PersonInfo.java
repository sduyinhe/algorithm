package com.galaxy.entity;

import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "person_info")
@Data
@EqualsAndHashCode(callSuper = false, exclude = {"createTime", "updateTime"})
public class PersonInfo implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", length = 50)
    private String name;
    @Column(name = "gender", nullable = true, unique = false)
    private Integer gender;
    @Column(name = "birthday", nullable = true, unique = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthday;
    @Column(name = "identity", nullable = true, unique = false)
    private String identity;
    @Column(name = "create_time", nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
    @Column(name = "update_time", nullable = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateTime;
    @Column(name = "mobile")
    private String mobile;
    @Column(name = "email")
    private String email;
    @Column(name = "address")
    private String address;
    @Column(name = "wechat_account")
    private String wechatAccount;

    //mappedBy指向的是AlgorithmUser中的personInfo属性 mappedBy = "personInfo"
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "personInfo", orphanRemoval = true)
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<InternalUser> internalUserList;

    @PrePersist
    public void onCreate() {
        System.out.println("@PrePersist被调用,获取到的数据库生成的id是" + this.id);
    }

    @PostPersist
    public void afterCreate() {
        System.out.println("@PostPersist被调用,获取到的数据库生成的id是" + this.id);
    }
}
