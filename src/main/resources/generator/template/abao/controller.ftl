package ${controllerPackage}.api

import com.cheche365.abao.service.dto.D${modelName}
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam

import javax.servlet.http.HttpServletRequest
import javax.validation.Valid
import javax.validation.constraints.NotBlank

/**
 * ${tableComments}
 */
@RequestMapping(value = '/api', produces = MediaType.APPLICATION_JSON_VALUE)
interface I${modelName} {

    /**
     * ${tableComments}提交
     * @return 标准响应格式
     */
    @PostMapping('/${tableName}/submit')
    ResponseEntity add${modelName}(@RequestBody @Valid D${modelName} ${modelNameLowerCamel},
                                         HttpServletRequest request)

}
