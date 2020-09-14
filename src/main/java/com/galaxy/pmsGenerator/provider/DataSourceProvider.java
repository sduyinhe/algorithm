package com.galaxy.pmsGenerator.provider;



import com.galaxy.pmsGenerator.GeneratorConfig;
import com.galaxy.pmsGenerator.GeneratorParam;

import java.util.Map;

/**
 * Created by luowei on 2017/8/4.
 */
public interface DataSourceProvider {
    Map<String,Object> provide(GeneratorConfig config, GeneratorParam param);
}
