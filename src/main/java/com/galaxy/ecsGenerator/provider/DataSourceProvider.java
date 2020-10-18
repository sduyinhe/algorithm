package com.galaxy.ecsGenerator.provider;



import com.galaxy.ecsGenerator.GeneratorConfig;
import com.galaxy.ecsGenerator.GeneratorParam;

import java.util.Map;

/**
 * Created by luowei on 2017/8/4.
 */
public interface DataSourceProvider {
    Map<String,Object> provide(GeneratorConfig config, GeneratorParam param);
}
