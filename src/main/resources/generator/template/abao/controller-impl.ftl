package ${controllerPackage}.impl

import ${controllerPackage}.api.I${modelName}
import ${servicePackage}.api.IAbaoUserCenterServiceFacade
import ${servicePackage}.api.I${modelName}ServiceFacade
import ${servicePackage}.api.ISmsServiceFacade
import ${servicePackage}.constants.EAbaoUserSource
import ${servicePackage}.constants.EActivityType
import ${servicePackage}.constants.EBehaviorType
import ${servicePackage}.dto.DAbaoUser
import ${servicePackage}.dto.DAbaoUserChannel
import ${servicePackage}.dto.D${modelName}
import ${servicePackage}.dto.DBind
import ${servicePackage}.dto.DResponse
import groovy.transform.CompileStatic
import groovy.transform.TupleConstructor
import groovy.util.logging.Slf4j
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

import javax.servlet.http.HttpServletRequest
import javax.transaction.Transactional
import javax.validation.Valid
import javax.validation.constraints.NotBlank

import static ${servicePackage}.constants.ERegisterType._MOBILE
import static ${servicePackage}.dto.DValueAndName.convertToDValueAndName
import static org.springframework.http.HttpStatus.OK

/**
* Created by ${author}
*/
@CompileStatic
@Slf4j
@TupleConstructor(defaults = false, includeFields = true)
@RestController
@Validated
class ${modelName} implements I${modelName} {

    private I${modelName}ServiceFacade ${modelNameLowerCamel}ServiceFacade
    private IAbaoUserCenterServiceFacade abaoUserCenterServiceFacade
    private ISmsServiceFacade smsServiceFacade

    @Override
    @Transactional
    ResponseEntity add${modelName}(@RequestBody @Valid D${modelName} ${modelNameLowerCamel},
                                         HttpServletRequest request) {
        DAbaoUser abaoUser = abaoUserCenterServiceFacade.register(
            ${modelNameLowerCamel}.mobile, _MOBILE, ${modelNameLowerCamel}.channel?.toLowerCase(),
            ${modelNameLowerCamel}.token, EAbaoUserSource._ARTICLE_ACQUISITION)

        abaoUser?.with {
            ${modelNameLowerCamel}.abaoUser = it.user.id
            ${modelNameLowerCamel}.formStatus = 1
            abaoUserCenterServiceFacade.addAbaoUserChannel new DAbaoUserChannel(
                userId: it.user.id,
                channel: ${modelNameLowerCamel}.channel?.toLowerCase(),
                activityType: convertToDValueAndName(EActivityType._ARTICLE_ACQUISITION),
                behaviorType: convertToDValueAndName(EBehaviorType._ARTICLE_MOBILE_REGISTER)
            )
        }
        ${modelNameLowerCamel}ServiceFacade.add${modelName}(${modelNameLowerCamel}.convertToModel(), abaoUser.userInfo)

        new ResponseEntity(new DResponse(code: 0), OK)
    }

}