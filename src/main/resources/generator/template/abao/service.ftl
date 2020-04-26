package ${servicePackage}

import ${modelPackage}.${prefix}.${modelName}

/**
 * Created by ${author} on ${date}.
 */
interface I${modelName}Service{

    Object add${modelName}(${modelName} ${modelNameLowerCamel})

    List<${modelName}> findAllYesterday()

}