package com.galaxy.test;

import java.util.Arrays;

public class TestStr {
    public static void main(String[] args) {
        String str = "[5ee9921b848e8531a332fb2ee861ff37][a332fb2ee861ff37][02e3027ce80bda57][true][2020-06-17 11:46:48.108+0800][taskExecutor-2][INFO][c.cheche365.abao.service.impl.HomeCustomizationServiceFacade][社群预约家庭定制调用CRM客户信息同步接口，用户手机号:13623648442，请求入参:{\"objectApiName\":\"customer\",\"fieldDataList\":[{\"fieldApiName\":\"customerName\",\"fieldValue\":\"\\u674e\\u96e8\\u6850\"},{\"fieldApiName\":\"wechatNickName\",\"fieldValue\":\"\\u7ae5\\u5e74\\u7684\\u56de\\u5fc6\"},{\"fieldApiName\":\"telephone\",\"fieldValue\":\"13623648442\"},{\"fieldApiName\":\"customerBirthday\",\"fieldValue\":\"2013-12-23\"},{\"fieldApiName\":\"customerType\",\"fieldValue\":\"\\u975e\\u8f66\\u9669\"},{\"fieldApiName\":\"life_trafficSource\",\"fieldValue\":\"33\"},{\"fieldApiName\":\"life_activityName\",\"fieldValue\":\"\\u793e\\u7fa4\\u9884\\u7ea6\\u5bb6\\u5ead\\u5b9a\\u5236\"},{\"fieldApiName\":\"life_userBehavior\",\"fieldValue\":\"\\u7528\\u6237\\u63d0\\u4ea4\\u8868\\u5355\"},{\"fieldApiName\":\"life_behaviorTime\",\"fieldValue\":\"2020-06-17 11:46:35\"}],\"lifePolicyList\":[],\"needCoverOriginalValue\":0,\"userBehaviorString\":\"[{\\\"registerTime\\\":\\\"2020-06-17 11:45:09\\\",\\\"trafficSourceType\\\":\\\"\\\\u793e\\\\u7fa4\\\\u9884\\\\u7ea6\\\\u5bb6\\\\u5ead\\\\u5b9a\\\\u5236\\\",\\\"trafficSource\\\":\\\"33\\\",\\\"nickName\\\":\\\"\\\\u7ae5\\\\u5e74\\\\u7684\\\\u56de\\\\u5fc6\\\",\\\"headImgUrl\\\":\\\"http://thirdwx.qlogo.cn/mmopen/vi_32/swQn1bXicbf7O35bbmeKGgU8G17l7frXO5iaCUSIg8NJu83bKx8JK8n88QFzSNSDzHribsgQsxqdQGoP1UndKpM4Q/132\\\",\\\"sex\\\":\\\"\\\\u5973\\\",\\\"area\\\":\\\"\\\\u4e2d\\\\u56fd\\\\u5c71\\\\u897f\\\\u592a\\\\u539f\\\",\\\"mobile\\\":\\\"13623648442\\\",\\\"payStatus\\\":\\\"\\\\u652f\\\\u4ed8\\\\u6210\\\\u529f\\\",\\\"payTime\\\":\\\"2020-06-17 11:45:16\\\",\\\"formDate\\\":\\\"2020-06-17 11:46:35\\\",\\\"formMobile\\\":\\\"13623648442\\\",\\\"name\\\":\\\"\\\\u674e\\\\u96e8\\\\u6850\\\",\\\"communicationDate\\\":\\\"2020-06-18\\\",\\\"communicationTimeRange\\\":\\\"11:00 - 12:00\\\",\\\"areaName\\\":\\\"\\\\u5317\\\\u4eac\\\\u5e02\\\\u5317\\\\u4eac\\\\u5e02\\\",\\\"familyComposition\\\":\\\"\\\\u5df2\\\\u5a5a\\\\u6709\\\\u5a03\\\",\\\"gender\\\":\\\"\\\\u5973\\\",\\\"birthday\\\":\\\"2013-12-23\\\",\\\"socialInsurance\\\":\\\"\\\\u6709\\\",\\\"income\\\":\\\"10\\\\u4e07\\\\u5143\\\\u4ee5\\\\u4e0b\\\",\\\"spouseBirthday\\\":\\\"1991-01-17\\\",\\\"childCount\\\":\\\"1\\\\u4e2a\\\",\\\"firstGender\\\":\\\"\\\\u5973\\\",\\\"firstBirthday\\\":\\\"2019-06-17\\\",\\\"secondGender\\\":\\\"\\\",\\\"secondBirthday\\\":null,\\\"thirdGender\\\":\\\"\\\",\\\"thirdBirthday\\\":null,\\\"fatherBirthday\\\":\\\"1970-06-17\\\",\\\"motherBirthday\\\":\\\"1970-06-17\\\"}]\",\"batchNumber\":\"\\u793e\\u7fa4\\u9884\\u7ea6\\u5bb6\\u5ead\\u5b9a\\u5236_20200617\"}, url:http://crm.cheche365.com]";

        String[] strArray = str.split("]");
        String timeStr = strArray[4].substring(0, strArray[4].indexOf("."));
        String tmpStr = strArray[8];
        String telephone = tmpStr.substring(tmpStr.indexOf("用户手机号:") + 6, tmpStr.indexOf("用户手机号:") + 6 + 12);
        String customerFindStr = "\"customerName\",\"fieldValue\":\"";
        String customerName = tmpStr.substring(tmpStr.indexOf(customerFindStr) + customerFindStr.length(), tmpStr.indexOf("\"", tmpStr.indexOf(customerFindStr) + customerFindStr.length()));
        String wechatNickNameFindStr = "wechatNickName\",\"fieldValue\":\"";
        String wechatNickName = tmpStr.substring(tmpStr.indexOf(wechatNickNameFindStr) + wechatNickNameFindStr.length(), tmpStr.indexOf("\"", tmpStr.indexOf(wechatNickNameFindStr) + wechatNickNameFindStr.length()));
        //Arrays.asList(strArray).forEach(ele-> System.out.println(ele));
        Arrays.asList(new String[]{timeStr, telephone, customerName, wechatNickName}).forEach(ele -> System.out.println(ele));
    }
}
