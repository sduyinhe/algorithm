package com.galaxy.service.impl;

import com.galaxy.service.MultiChildService;
import org.springframework.stereotype.Service;

@Service
public class MultiChildServiceImpl implements MultiChildService {
    @Override
    public void sayHello() {
        System.out.println("i`m child one");
    }
}
