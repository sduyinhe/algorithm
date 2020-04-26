package com.galaxy.abaoGenerator.provider;



import com.galaxy.abaoGenerator.GeneratorConfig;
import com.galaxy.abaoGenerator.GeneratorParam;

import java.util.Map;

/**
 * Created by luowei on 2017/8/4.
 */
public interface DataSourceProvider {
    Map<String,Object> provide(GeneratorConfig config, GeneratorParam param);
}
