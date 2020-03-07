package com.galaxy.service;

import com.galaxy.entity.PersonInfo;
import com.galaxy.entity.InternalUser;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;

import java.io.IOException;

public interface PersonService {
    PersonInfo queryById(Integer id);

    InternalUser findByUserId(Integer id);

    void testSave();

    void testSave2();

    void testDelete(Long id);

    void testDeleteUser(Integer id);

    void sendEmail() throws IOException, InvalidFormatException;

    void testArea();

    void cacheEvictUserId(Integer id);

    InternalUser updateUser(Integer id);
}
