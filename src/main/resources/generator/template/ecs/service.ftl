package ${servicePackage}.${prefix};

import ${modelPackage}.${prefix}.${modelName};
import com.github.crm.service.BaseService;

import java.util.List;

/**
 * Created by ${author} on ${date}.
 */
public interface ${modelName}Service extends BaseService<Integer,${modelName}> {

     List<${modelName}> findAll(final int pageNum, final int pageSize);

     List<${modelName}> findByCondition(${modelName} ${modelNameLowerCamel});
}
