package com.galaxy.abaoGenerator;

import java.util.Map;

/**
 * Created by luowei on 2017/8/4.
 */
public interface TemplateGenerator {
    boolean generate(Map<String, Object> data, String targetFileName, String templateName);
}
