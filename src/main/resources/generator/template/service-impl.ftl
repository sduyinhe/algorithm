package ${servicePackage}.${prefix}.impl;

import ${basePackage}.manager.sys.SessionManager;
import ${modelPackage}.${prefix}.${modelName};
import ${mapperPackage}.${prefix}.command.${modelName}CommandMapper;
import ${mapperPackage}.${prefix}.query.${modelName}QueryMapper;
import ${servicePackage}.${prefix}.${modelName}Service;
import com.github.pagehelper.PageHelper;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by ${author} on ${date}.
 */
@Slf4j
@Service
@AllArgsConstructor
@Transactional(readOnly = true)
public class ${modelName}ServiceImpl implements ${modelName}Service {

    private final ${modelName}QueryMapper ${modelNameLowerCamel}QueryMapper;
    private final ${modelName}CommandMapper ${modelNameLowerCamel}CommandMapper;

    @Override
    public ${modelName} findById(@NonNull final Integer id) {
        ${modelName} ${modelNameLowerCamel} = ${modelNameLowerCamel}QueryMapper.findById(id);
        return ${modelNameLowerCamel};
    }

    @Override
    public List<${modelName}> findAll(final int pageNum, final int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<${modelName}> ${modelNameLowerCamel}List = ${modelNameLowerCamel}QueryMapper.findAll();
        return ${modelNameLowerCamel}List;
    }

    @Override
    public List<${modelName}> findByCondition(@NonNull ${modelName} ${modelNameLowerCamel}) {
        List<${modelName}> ${modelNameLowerCamel}List = ${modelNameLowerCamel}QueryMapper.findByCondition(${modelNameLowerCamel});
        return ${modelNameLowerCamel}List;
    }

    @Transactional
    @Override
    public ${modelName} save(@NonNull final ${modelName} ${modelNameLowerCamel}) {
        SessionManager.packingCreateInfo(${modelNameLowerCamel});
        ${modelNameLowerCamel}CommandMapper.save(${modelNameLowerCamel});
        return ${modelNameLowerCamel};
    }

    @Transactional
    @Override
    public ${modelName} update(@NonNull final ${modelName} ${modelNameLowerCamel}) {
        SessionManager.packingUpdateInfo(${modelNameLowerCamel});
        ${modelNameLowerCamel}CommandMapper.update(${modelNameLowerCamel});
        return ${modelNameLowerCamel};
    }

    @Transactional
    @Override
    public void delete(Integer id) {
        ${modelNameLowerCamel}CommandMapper.deleteById(id);
    }
}
