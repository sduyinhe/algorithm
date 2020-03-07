package com.galaxy.generator.provider;



import com.galaxy.generator.GeneratorConfig;
import com.galaxy.generator.GeneratorParam;

import java.util.Map;

/**
 * Created by luowei on 2017/8/4.
 */
public interface DataSourceProvider {
    Map<String,Object> provide(GeneratorConfig config, GeneratorParam param);
}
