package com.galaxy.test;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

public class Test13 {
    public static void main(String[] args) {
        URLDecoder urlDecoder = new URLDecoder();
        try {
            System.out.println(urlDecoder.decode("msg=%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F&paymentGatewaySn=Allianz123456789012345678904&payTime=2020-08-31+17%3A08%3A25&tradeStatus=SUCCESS&sign=0c617133fd126701c7ad161c19254e9f&totalPremium=0.01&paymentMethod=wxpay&notifyUrl=http%3A%2F%2Fdev1.wx.abaobaoxian.com%2Fadmin%2Fapi%2Fcallback%2Fjd_allianz&agencyCode=AC600001&returnUrl=http%3A%2F%2Fdev1.wx.abaobaoxian.com%2Ftest%2Freturn&policyRef=P4400C02007000200035481", "UTF-8"));
            //{"productId":329,"agentId":1732,"crmCustomerId":null,"productChannelId":327,"productCode":"111"}
            //msg=请求成功
            // &paymentGatewaySn=Allianz123456789012345678904&payTime=2020-08-31 17:08:25
            // &tradeStatus=SUCCESS&sign=0c617133fd126701c7ad161c19254e9f
            // &totalPremium=0.01
            // &paymentMethod=wxpay
            // &notifyUrl=http://dev1.wx.abaobaoxian.com/admin/api/callback/jd_allianz&agencyCode=AC600001
            // &returnUrl=http://dev1.wx.abaobaoxian.com/test/return&policyRef=P4400C02007000200035481
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
}
