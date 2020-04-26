package ${servicePackage}.api

import ${servicePackage}.dto.DResponse
import ${servicePackage}.model.${prefix}.${modelName}
import ${servicePackage}.model.usercenter.AbaoUserInfo

/**
 * ${tableComments}
 * Created by ${author}
 */
interface I${modelName}ServiceFacade {

    void add${modelName}(${modelName} ${tableName}, AbaoUserInfo userInfo)

}
