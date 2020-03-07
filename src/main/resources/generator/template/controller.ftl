package ${controllerPackage}.${prefix}.rest;

import ${modelPackage}.${prefix}.${modelName};
import ${servicePackage}.${prefix}.${modelName}Service;
import ${controllerPackage}.${prefix}.request.${modelName}CreateRequest;
import ${controllerPackage}.${prefix}.request.${modelName}UpdateRequest;
import ${controllerPackage}.${prefix}.response.${modelName}FoundResponse;
import com.cheche.crm.web.response.BaseResponse;
import com.github.crm.web.controller.BaseController;
import lombok.AllArgsConstructor;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

/**
* Created by ${author} on ${date}.
*/
@RestController
@AllArgsConstructor
@RequestMapping("/${modelNameLowerCamel}s")
public class ${modelName}Controller extends BaseController{

    private final ${modelName}Service ${modelNameLowerCamel}Service;

    /**
    * 获取详情
    *
    * @param id ID
    * @return {@link ${modelName}FoundResponse}
    */
    @RequiresAuthentication
    @GetMapping(value = "/{id:^[1-9]\\d*$}", produces = APPLICATION_JSON)
    public ResponseEntity<BaseResponse<${modelName}FoundResponse>> findById(@PathVariable(value = "id") final int id) {
        ${modelName} result = ${modelNameLowerCamel}Service.findById(id);
        ${modelName}FoundResponse response = new ${modelName}FoundResponse().convert(result);
        return new ResponseEntity<>(new BaseResponse<>(response), foundHttpStatus(result));
    }

    /**
    * 获取列表
    *
    * @param pageNum 页数
    * @param pageSize 页数大小
    * @return {@link ${modelName}FoundResponse}
    */
    @RequiresAuthentication
    @GetMapping(produces = APPLICATION_JSON)
    public ResponseEntity<BaseResponse<List<${modelName}FoundResponse>>> findAll(
        @RequestParam(value = "pageNum", required = false, defaultValue = "1") @Min(1) final int pageNum,
        @RequestParam(value = "pageSize", required = false, defaultValue = "20") @Min(1) @Max(50) final int pageSize) {
        List<${modelName}> result = ${modelNameLowerCamel}Service.findAll(pageNum, pageSize);
        List<${modelName}FoundResponse> response = new ${modelName}FoundResponse().convertToList(result);
        return new ResponseEntity<>(new BaseResponse<>(response), foundHttpStatus(result));
    }


    /**
    * 保存
    *
    * @param ${modelNameLowerCamel}CreateRequest {@link ${modelName}CreateRequest}
    * @return {@link ${modelName}FoundResponse}
    */
    @RequiresAuthentication
    @PostMapping(consumes = APPLICATION_JSON, produces = APPLICATION_JSON)
    public ResponseEntity<BaseResponse<${modelName}FoundResponse>> save(@Valid @RequestBody final ${modelName}CreateRequest ${modelNameLowerCamel}CreateRequest) {
        ${modelName} result = ${modelNameLowerCamel}Service.save(${modelNameLowerCamel}CreateRequest.convert(${modelNameLowerCamel}CreateRequest));
        ${modelName}FoundResponse response = new ${modelName}FoundResponse().convert(result);
        AtomicReference<HttpHeaders> httpHeaders = new AtomicReference<>(new HttpHeaders());
        httpHeaders.get().setLocation(ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").build().toUri());
        return new ResponseEntity<>(new BaseResponse<>(response), HttpStatus.CREATED);
    }

    /**
    * 更新
    *
    * @param id ID
    * @param ${modelNameLowerCamel}UpdateRequest {@link ${modelName}UpdateRequest}
    * @return Void
    */
    @RequiresAuthentication
    @PutMapping(value = "/{id:^[1-9]\\d*$}", consumes = APPLICATION_JSON, produces = APPLICATION_JSON)
    public ResponseEntity<BaseResponse<Void>> update(@PathVariable(value = "id") final int id,
        @Valid @RequestBody ${modelName}UpdateRequest ${modelNameLowerCamel}UpdateRequest) {
        if (!${modelNameLowerCamel}Service.isExist(id)) {
            return new ResponseEntity<>(new BaseResponse<>(), HttpStatus.NOT_FOUND);
        }
        ${modelName} ${modelNameLowerCamel} = ${modelNameLowerCamel}UpdateRequest.convert(${modelNameLowerCamel}UpdateRequest);
        ${modelNameLowerCamel}.setId(id);
        ${modelNameLowerCamel}Service.update(${modelNameLowerCamel});
        return new ResponseEntity<>(new BaseResponse<>(), HttpStatus.NO_CONTENT);
    }

    /**
    * 删除
    *
    * @param id ID
    * @return Void
    */
    @RequiresAuthentication
    @DeleteMapping(value = "/{id:^[1-9]\\d*$}", produces = APPLICATION_JSON)
    public ResponseEntity<BaseResponse<Void>> deleteById(@PathVariable(value = "id") final int id) {
        if (!${modelNameLowerCamel}Service.isExist(id)) {
        return new ResponseEntity<>(new BaseResponse<>(), HttpStatus.NOT_FOUND);
        }
        ${modelNameLowerCamel}Service.delete(id);
        return new ResponseEntity<>(new BaseResponse<>(), HttpStatus.NO_CONTENT);
    }
}
