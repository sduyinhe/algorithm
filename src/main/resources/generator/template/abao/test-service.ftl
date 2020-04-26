package ${servicePackage}.impl

import ${servicePackage}.I${modelName}Service
import com.cheche365.cheche.test.common.ALayeredTestDataFT
import com.cheche365.cheche.test.tag.priority.High
import com.cheche365.cheche.test.tag.scope.Core
import com.cheche365.cheche.test.tag.trait.StorageDependent
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Shared
import spock.lang.Title
import spock.lang.Unroll

import static com.cheche365.cheche.test.util.ValidationUtils.verify

/**
 * I${modelName}Service 功能测试<br>
 * add${modelName}()相关
 *
 * Created by ${author} on ${date}.
 */
@High
@Core
@StorageDependent
@ServiceFTConfig
@Title('I${modelName}Service.add${modelName}()测试套件')
@Slf4j
class ${modelName}FT_01 extends ALayeredTestDataFT {

    @Autowired
    I${modelName}Service ${modelNameLowerCamel}Service
    @Shared
    private successfulTestData01

    @Shared
    private successfulTestData02

    /**
     * 用例01
     */
    @Unroll
    'ID：#id 、DESC：#desc 、${tableComments}：#provide 、预期结果：#expected ，测试add${modelName}()接口，且成功'() {
        when: '调用服务API'

        def actual${modelName} = ${modelNameLowerCamel}Service.add${modelName}(
            provide
        )


        then: '检查结果'

        ignoreVerification ?: verify(expected.toString(), actual${modelName}.toString())


        where:

        [id, desc, provide, expected] << successfulTestData01
    }

    /**
     * 用例02
     */
    @Unroll
    'ID：#id 、DESC：#desc 、${tableComments}：无入参 、预期结果：#expected ，测试findAllYesterday()接口，且成功'() {
        when: '调用服务API'

        def ${modelNameLowerCamel}List = ${modelNameLowerCamel}Service.findAllYesterday()


        then: '检查结果'

        ignoreVerification ?: verify(expected.toString(), ${modelNameLowerCamel}List.toString())


        where:

        [id, desc, expected] << successfulTestData02
    }

    @Override
    protected void doSplitTestData(conf, Iterable groupedTestData) {
        (successfulTestData01, successfulTestData02) = groupedTestData
    }

}
