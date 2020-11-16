package com.galaxy.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.List;

@Data
public class TestArrayRequest {
    List<TestArrayContentRequest> myList1;
    List<TestArrayContentRequest> myList2;
}
