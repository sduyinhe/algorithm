/**
 * 用例01数据
 */
package ${servicePackage}.impl

import static ${servicePackage}.util.BusinessUtils40.new${modelName}
import static ${servicePackage}.util.BusinessUtils40.${modelNameLowerCamel}List

testData = [

        [
            1000,
            '新增',
            new${modelName},
            new${modelName}
        ],
        [
            2000,
            '查询',
            ${modelNameLowerCamel}List
        ]


]
