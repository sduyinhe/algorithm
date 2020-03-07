package com.galaxy.service;

import com.galaxy.entity.UserBehavior;

import java.util.List;


public interface UserBehaviorService {
    UserBehavior queryById(Integer id);

    UserBehavior findByUserId(Integer id);

    List<UserBehavior> findAll();

    void save(UserBehavior userBehavior);

    void update(UserBehavior userBehavior);

    void delete(UserBehavior userBehavior);

}
