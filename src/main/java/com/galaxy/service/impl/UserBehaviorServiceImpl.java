package com.galaxy.service.impl;

import cn.afterturn.easypoi.cache.manager.POICacheManager;
import cn.afterturn.easypoi.excel.ExcelExportUtil;
import cn.afterturn.easypoi.excel.ExcelXorHtmlUtil;
import cn.afterturn.easypoi.excel.entity.ExcelToHtmlParams;
import cn.afterturn.easypoi.excel.entity.ExportParams;
import cn.afterturn.easypoi.excel.export.styler.ExcelExportStylerBorderImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.galaxy.easypoi.HomeCustomizationEntity;
import com.galaxy.entity.*;
import com.galaxy.mail.ApplicationEntity;
import com.galaxy.mail.EmailDto;
import com.galaxy.mail.EmailUtil;
import com.galaxy.repository.AreaRepository;
import com.galaxy.repository.IUserBehaviorRepository;
import com.galaxy.repository.IUserRepository;
import com.galaxy.repository.PersonRepository;
import com.galaxy.service.PersonService;
import com.galaxy.service.UserBehaviorService;
import com.google.common.collect.Lists;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;

@Service
@Slf4j
@CacheConfig(cacheNames = {"userBehavior"})
public class UserBehaviorServiceImpl implements UserBehaviorService {

    @Autowired
    private IUserBehaviorRepository behaviorRepository;

    @Override
    public UserBehavior queryById(Integer id) {
        return null;
    }

    @Override
    public UserBehavior findByUserId(Integer id) {
        return null;
    }

    @Override
    public List<UserBehavior> findAll() {
        Iterator<UserBehavior> userBehaviorIterable = behaviorRepository.findAll().iterator();
        List<UserBehavior> answer = new ArrayList<>();
        while (userBehaviorIterable.hasNext()) {
            answer.add(userBehaviorIterable.next());
        }
        return answer;
    }

    @Override
    public void save(UserBehavior userBehavior) {
        behaviorRepository.save(userBehavior);
    }

    @Override
    public void update(UserBehavior userBehavior) {
        
    }

    @Override
    public void delete(UserBehavior userBehavior) {
        behaviorRepository.delete(userBehavior);
    }
}






























