package com.galaxy.cache;

import lombok.Data;

import java.util.List;

@Data
public class CacheKey {
    private String key;
    private List<String> cascadeKeys;
}
