package com.galaxy.controller;

import com.galaxy.annotation.Description;
import com.galaxy.entity.PersonInfo;
import com.galaxy.entity.InternalUser;
import com.galaxy.service.ClearCacheService;
import com.galaxy.service.MultiChildService;
import com.galaxy.service.PersonService;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/algorithmPerson")
public class PersonController {
    @Autowired
    PersonService personService;
    @Autowired
    ClearCacheService clearCacheService;
    @Autowired
    List<MultiChildService> multiChildService;

    @Autowired
    Map<String, MultiChildService> multiChildServiceMap;

    @GetMapping(value = "/findById/{id}")
    public PersonInfo testQuery(@PathVariable Integer id) {
        PersonInfo personInfo = personService.queryById(id);
        return personInfo;
    }

    @GetMapping(value = "/user/findById/{id}")
    public InternalUser findByUserId(@PathVariable Integer id) {
        InternalUser internalUser = personService.findByUserId(id);
        return internalUser;
    }

    @GetMapping(value = "/user/cacheEvict/{id}")
    public void cacheEvictUserId(@PathVariable Integer id) {
        personService.cacheEvictUserId(id);
    }

    @PutMapping(value = "/user/testUpdate/{id}")
    public void updateUser(@PathVariable Integer id) {
        personService.updateUser(id);
    }

    @PostMapping(value = "/clearAllCache")
    public void clearAllCache(@RequestBody List<String> keyList) {
        clearCacheService.clearCache(keyList);
    }

    @GetMapping(value = "/user/testSave")
    public void testSave() {
        personService.testSave();
    }

    @GetMapping(value = "/user/testSave2")
    public void testSave2() {
        personService.testSave2();
    }

    @GetMapping(value = "/testDelete/{id}")
    public void testDelete(@PathVariable Long id) {
        personService.testDelete(id);
    }

    @GetMapping(value = "/testDeleteUser/{id}")
    public void testDeleteUser(@PathVariable Integer id) {
        personService.testDeleteUser(id);
    }

    @GetMapping(value = "/sendEmail")
    public void sendEmail() {
        try {
            personService.sendEmail();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InvalidFormatException e) {
            e.printStackTrace();
        }
    }

    @GetMapping(value = "/testArea")
    public void testArea() {
        personService.testArea();
    }

    @GetMapping(value = "/testMultiService")
    public void testMultiService() {
        //multiChildService.forEach(ele -> ele.sayHello());
        for (Map.Entry entry : multiChildServiceMap.entrySet()) {
            System.out.println("key=" + entry.getKey() + ",value=" + entry.getValue());
        }
    }

    @GetMapping(value = "/testAnnotation")
    @Description(desc = "你好", author = "yhw", age = 19)
    public void testAnnotation(String hello) {
        System.out.println("test annotation!");
    }

    @GetMapping(value = "/testAnnotationNoAspect")
    public void testAnnotationNoAspect() {
        System.out.println("没使用切面处理的方法!");
    }
}
