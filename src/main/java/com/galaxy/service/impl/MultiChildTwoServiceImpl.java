package com.galaxy.service.impl;

import com.galaxy.service.MultiChildService;
import org.springframework.stereotype.Service;
@Service
public class MultiChildTwoServiceImpl implements MultiChildService  {
    public void sayHello() {
        System.out.println("i`m child two");
    }
}
