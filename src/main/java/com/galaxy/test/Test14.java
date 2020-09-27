package com.galaxy.test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ClientConnectionManager;
import org.apache.http.conn.scheme.Scheme;
import org.apache.http.conn.scheme.SchemeRegistry;
import org.apache.http.conn.ssl.SSLSocketFactory;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

public class Test14 {
    public static void main(String[] args) throws Exception {
        DefaultHttpClient httpclient = new DefaultHttpClient();
        try {
            //Secure Protocol implementation.
            SSLContext ctx = SSLContext.getInstance("TLS");
            //Implementation of a trust manager for X509 certificates
            X509TrustManager tm = new X509TrustManager() {
                public void checkClientTrusted(X509Certificate[] xcs,
                                               String string) throws CertificateException {
                }

                public void checkServerTrusted(X509Certificate[] xcs,
                                               String string) throws CertificateException {
                }

                public X509Certificate[] getAcceptedIssuers() {
                    return null;
                }
            };
            ctx.init(null, new TrustManager[]{tm}, null);
            SSLSocketFactory ssf = new SSLSocketFactory(ctx, SSLSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER);
            ClientConnectionManager ccm = httpclient.getConnectionManager();
            //register https protocol in httpclient's scheme registry
            SchemeRegistry sr = ccm.getSchemeRegistry();
            sr.register(new Scheme("https", 443, ssf));
            httpclient = new DefaultHttpClient(ccm, httpclient.getParams());
        } catch (Exception e) {
            e.printStackTrace();
        }
        HttpPost httpost = new HttpPost("https://test.allianz.cn/IG_ePolicy/EncryptPassword");

        List<NameValuePair> formparams = new ArrayList<NameValuePair>();
        formparams.add(new BasicNameValuePair("Password", "Zx8!Wkbn"));

        UrlEncodedFormEntity urlEntity = new UrlEncodedFormEntity(formparams, "UTF-8");
        httpost.setEntity(urlEntity);

        HttpResponse response = httpclient.execute(httpost);
        HttpEntity entity = response.getEntity();

        System.out.println(EntityUtils.toString(entity));
        // 关闭请求
        httpclient.close();
    }
}
