package ${basePackage}.service.impl

import cn.afterturn.easypoi.excel.entity.ExportParams
import cn.afterturn.easypoi.excel.entity.enmus.ExcelType
import cn.afterturn.easypoi.excel.export.styler.ExcelExportStylerBorderImpl
import ${basePackage}.constants.EFileType
import ${basePackage}.resource.CrmProperties
import ${basePackage}.resource.EmailProperties
import ${basePackage}.resource.ResourceProperties
import ${basePackage}.service.I${modelName}Service
import ${basePackage}.service.api.I${modelName}ServiceFacade
import ${basePackage}.service.constants.EAbaoUserSource
import ${basePackage}.service.constants.EActivityType
import ${basePackage}.service.constants.EBehaviorType
import ${basePackage}.service.dto.DResponse
import ${basePackage}.service.model.${prefix}.${modelName}
import ${basePackage}.service.model.${prefix}.${modelName}Excel
import ${basePackage}.service.model.usercenter.AbaoUserInfo
import ${basePackage}.service.repository.I${modelName}Repository
import com.cheche365.cheche.email.model.EmailInfo
import com.cheche365.cheche.email.service.IEmailService
import groovy.json.JsonBuilder
import groovy.transform.TupleConstructor
import groovy.util.logging.Slf4j
import groovyx.net.http.RESTClient
import org.apache.commons.codec.digest.DigestUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor
import org.springframework.stereotype.Service

import javax.transaction.Transactional
import java.nio.file.Path
import java.nio.file.Paths
import java.text.SimpleDateFormat

import static cn.afterturn.easypoi.excel.ExcelExportUtil.exportExcel
import static ${basePackage}.exception.ConstraintViolationException.assertConstraint
import static ${basePackage}.service.constants.ELocalDateFormatter._DATE_FORMAT_1
import static ${basePackage}.service.constants.ELocalDateTimeFormatter._DATETIME_FORMAT_1
import static groovyx.net.http.ContentType.JSON
import static java.lang.System.currentTimeMillis
import static java.util.UUID.randomUUID

/**
 * 门面服务
 */
@Slf4j
@TupleConstructor(includeFields = true)
@Service
class ${modelName}ServiceFacade implements I${modelName}ServiceFacade {

    @Autowired
    private I${modelName}Service ${modelNameLowerCamel}Service
    @Autowired
    private I${modelName}Repository ${modelNameLowerCamel}Repository
    @Autowired
    private ResourceProperties resourceProperties
    @Autowired
    private IEmailService emailService
    @Autowired
    private EmailProperties emailProperties
    @Autowired
    private ThreadPoolTaskExecutor taskExecutor
    @Autowired
    private CrmProperties crmProperties

    @Override
    @Transactional
    void add${modelName}(${modelName} ${modelNameLowerCamel}, AbaoUserInfo userInfo) {
        ${modelName} tmpArticle =
            ${modelNameLowerCamel}Repository.findFirstByMobileAndFormStatus(${modelNameLowerCamel}.mobile, 1)
        assertConstraint tmpArticle == null, '该手机号已经参加过该活动，不可重复领取'
        ${modelNameLowerCamel}.formTime = new Date()
        ${modelNameLowerCamel}Service.add${modelName}(${modelNameLowerCamel})

        taskExecutor.execute(new MailSendThread(
            fileRootPath: Paths.get(resourceProperties.fileRootPath),
            ${modelNameLowerCamel}: ${modelNameLowerCamel},
            abaoUserInfo: userInfo,
            crmProperties: crmProperties
        ))
    }

    @Override
    DResponse judge${modelName}(String mobile) {
        ${modelName} ${modelNameLowerCamel} =
            ${modelNameLowerCamel}Repository.findFirstByMobileAndFormStatus(mobile, 1)
        assertConstraint ${modelNameLowerCamel} == null, '该手机号已经参加过该活动，不可重复领取'
        DResponse.success([:])
    }

    @TupleConstructor(includeFields = true)
    private class MailSendThread implements Runnable {

        Path fileRootPath
        ${modelName} ${modelNameLowerCamel}
        AbaoUserInfo abaoUserInfo
        CrmProperties crmProperties
        private static final _API_CRM_USER_SYNC_URL = 'api/v1/data'

        @Override
        void run() {
            generate${modelName}Excel(fileRootPath, ${modelNameLowerCamel})
            //同步用户行为记录到CRM
            send${modelName}ToCrm()
        }

        @SuppressWarnings(['JavaIoPackageAccess', 'AbcMetric'])
        private generate${modelName}Excel(Path fileRootPath, ${modelName} ${modelNameLowerCamel}) {
            long startTime = System.currentTimeMillis()
            Date date = new Date()
            SimpleDateFormat sdf = new SimpleDateFormat('yyyyMMdd', Locale.getDefault(Locale.Category.FORMAT))
            List homeList = [
                new ${modelName}Excel(
                    registerTime: abaoUserInfo.createTime ?: date,
                    trafficSourceType: EAbaoUserSource._ARTICLE_ACQUISITION.name,
                    channel: ${modelNameLowerCamel}.channel,
                    name: ${modelNameLowerCamel}.name,
                    mobile: ${modelNameLowerCamel}.mobile,
                    areaName: ${modelNameLowerCamel}.areaName,
                    birthday: ${modelNameLowerCamel}.birthday,
                    insuranceTarget: ${modelNameLowerCamel}.insuranceTarget.name
                )]

            ExportParams exportParams = new ExportParams()
            exportParams.style = ExcelExportStylerBorderImpl
            // HSSF是指2007年以前的，对应后缀XLS；XSSF是指2007年版本以上的，对应后缀XLSX
            exportParams.type = ExcelType.XSSF
            def workbook = exportExcel exportParams, ${modelName}Excel, homeList

            //设置不冻结首行
            workbook.getSheetAt(0).createFreezePane(0, 0)
            //路径
            String path = EFileType._PRODUCT_POSTER_IMAGE_DOWNLOAD.subPath
            //获取文件名称
            def fileName = ${modelNameLowerCamel}.mobile + '_' + sdf.format(date)
            String tmpFileName = fileName + randomUUID().toString().replaceAll('-', '') + EFileType.ESuffix._XLSX.value
            fileName += EFileType.ESuffix._XLSX.value

            def fileUrlPath = fileRootPath.resolve(path + tmpFileName)

            File parentDirectory = fileUrlPath.parent.toFile()
            if (!parentDirectory.exists()) {
                parentDirectory.mkdirs()
            }
            def fileUrl = fileUrlPath.toString()

            new FileOutputStream(fileUrl).with {
                workbook.write it
                close()
            }

            def tmpMap = [(fileName): fileUrl]
            def email = new EmailInfo(
                from: emailProperties.from,
                to: emailProperties.to,
                subject: '【${tableComments}】' + ${modelNameLowerCamel}.mobile + '用户提交信息',
                content: '${tableComments}' + ${modelNameLowerCamel}.mobile + '用户信息，详见附件。',
                attachments: tmpMap
            )

            emailService.sender(email)

            //删除临时文件
            new File(fileUrl).delete()
            log.info('generate${modelName}Excel方法耗时:' + (System.currentTimeMillis() - startTime) + '毫秒')
        }

        @SuppressWarnings('AbcMetric')
        private send${modelName}ToCrm() {
            RESTClient restClient = new RESTClient(crmProperties.domain)
            def userBehavior = new JsonBuilder([[
                                                    registerTime     : abaoUserInfo.createTime ?
                                                        _DATETIME_FORMAT_1.format(abaoUserInfo.createTime) :
                                                        _DATETIME_FORMAT_1.format(new Date()),
                                                    trafficSourceType: EAbaoUserSource._ARTICLE_ACQUISITION.name,
                                                    trafficSource    : ${modelNameLowerCamel}.channel,
                                                    name             : ${modelNameLowerCamel}.name,
                                                    mobile           : ${modelNameLowerCamel}.mobile,
                                                    areaName         : ${modelNameLowerCamel}.areaName,
                                                    birthday         : ${modelNameLowerCamel}.birthday ?
                                                        _DATE_FORMAT_1.format(${modelNameLowerCamel}.birthday) : null,
                                                    insuranceTarget  : ${modelNameLowerCamel}.insuranceTarget?.name
                                                ]])

            def params = new JsonBuilder([
                objectApiName         : 'customer',
                fieldDataList         : [[fieldApiName: 'customerName', fieldValue: ${modelNameLowerCamel}.name],
                                         [fieldApiName: 'telephone', fieldValue: ${modelNameLowerCamel}.mobile],
                                         [fieldApiName: 'customerBirthday',
                                          fieldValue  : ${modelNameLowerCamel}.birthday ?
                                              _DATE_FORMAT_1.format(${modelNameLowerCamel}.birthday) : null],
                                         [fieldApiName: 'customerType', fieldValue: '非车险'],
                                         [fieldApiName: 'life_trafficSource', fieldValue: ${modelNameLowerCamel}.channel],
                                         [fieldApiName: 'life_activityName', fieldValue: EActivityType._ARTICLE_ACQUISITION.name],
                                         [fieldApiName: 'life_userBehavior', fieldValue: EBehaviorType._ARTICLE_MOBILE_REGISTER.name],
                                         [fieldApiName: 'life_behaviorTime', fieldValue: _DATETIME_FORMAT_1.format(${modelNameLowerCamel}.formTime)]],
                lifePolicyList        : [],
                needCoverOriginalValue: 0,
                userBehaviorString    : userBehavior.toString()
            ])


            def currentTimestamp = currentTimeMillis()
            def email = crmProperties.email
            def secretKey = crmProperties.secretKey
            def sign = DigestUtils.sha1Hex(email + '&' + secretKey + '&' + currentTimestamp)

            log.info '${tableComments}调用CRM客户信息同步接口，用户手机号:{}，请求入参:{}, url:{}',
                ${modelNameLowerCamel}.mobile, params.toString(), crmProperties.domain
            def args = [
                requestContentType: JSON,
                contentType       : JSON,
                path              : _API_CRM_USER_SYNC_URL,
                query             : [
                    objectApiName: 'customer',
                    timestamp    : String.valueOf(currentTimestamp),
                    email        : email,
                    sign         : sign
                ],
                body              : params.toString()
            ]

            def response = restClient.post args, { resp, json ->
                json
            }

            log.info '${tableComments}调用CRM客户信息同步接口，用户手机号:{}，响应:{}',
                ${modelNameLowerCamel}.mobile, response
        }

    }

}
