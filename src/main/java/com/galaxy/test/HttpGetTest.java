package com.galaxy.test;

import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpEntity;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.stream.Collectors;

@Slf4j
public class HttpGetTest implements Runnable {
    private CountDownLatch countDownLatch;
    private String refererUrl = "";
    private int count = 1;
    private long sleepTime = 1000L;
    private String cookie = "";

    public HttpGetTest(CountDownLatch countDownLatch) {
        this.countDownLatch = countDownLatch;
    }

    public static void main(String[] args) throws InterruptedException {
        //Thread.sleep(5000L);
        long startTime = System.currentTimeMillis();
        int count = 1;
        final CountDownLatch latch = new CountDownLatch(count);
        ExecutorService cachedThreadPool = Executors.newCachedThreadPool();
        HttpGetTest httpGetTest = new HttpGetTest(latch);
        for (int i = 0; i < count; i++) {
            cachedThreadPool.execute(httpGetTest);
        }
        try {
            latch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        long endTime = System.currentTimeMillis();
        log.info("请求{}次耗时{}毫秒", count, endTime - startTime);
        cachedThreadPool.shutdown();
    }

    public static ThreadPoolTaskExecutor getThreadPool() {
        ThreadPoolTaskExecutor threadPoolTaskExecutor = new ThreadPoolTaskExecutor();
        threadPoolTaskExecutor.setCorePoolSize(2);
        threadPoolTaskExecutor.setMaxPoolSize(10);
        threadPoolTaskExecutor.setWaitForTasksToCompleteOnShutdown(false);
        threadPoolTaskExecutor.setDaemon(true);
        threadPoolTaskExecutor.setQueueCapacity(50);
        threadPoolTaskExecutor.setKeepAliveSeconds(3000);
        threadPoolTaskExecutor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        return threadPoolTaskExecutor;
    }


    public void doGet(String url) {
        // 获得Http客户端(可以理解为:你得先有一个浏览器;注意:实际上HttpClient与浏览器是不一样的)
        CloseableHttpClient httpClient = HttpClientBuilder.create().build();

        // 参数
        StringBuffer params = new StringBuffer();
        try {
            // 字符数据最好encoding以下;这样一来，某些特殊字符才能传过去(如:某人的名字就是“&”,不encoding的话,传不过去)
            params.append("name=" + URLEncoder.encode("&", "utf-8"));
            params.append("&");
            params.append("age=24");
        } catch (UnsupportedEncodingException e1) {
            e1.printStackTrace();
        }

        // 创建Get请求
        //HttpGet httpGet = new HttpGet("http://localhost:12345/doGetControllerTwo" + "?" + params);
        HttpGet httpGet = new HttpGet(url);
        // 响应模型
        CloseableHttpResponse response = null;
        try {
            // 配置信息
//            RequestConfig requestConfig = RequestConfig.custom()
//                    // 设置连接超时时间(单位毫秒)
//                    .setConnectTimeout(120000)
//                    // 设置请求超时时间(单位毫秒)
//                    .setConnectionRequestTimeout(120000)
//                    // socket读写超时时间(单位毫秒)
//                    .setSocketTimeout(120000)
//                    // 设置是否允许重定向(默认为true)
//                    .setRedirectsEnabled(true).build();

            // 将上面的配置信息 运用到这个Get请求里
            //httpGet.setConfig(requestConfig);
            //只加User-Agent不管用，百度会返回“网络不给力”，但是如果从chrome中，把其他的参数给加上，就可以了，但是不知道具体的原理。
            httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36");
            //httpGet.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
            httpGet.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
            httpGet.setHeader("Accept-Encoding", "gzip, deflate, br");
            httpGet.setHeader("Accept-Language", "zh-CN,zh;q=0.9");
            httpGet.setHeader("Cache-Control", "max-age=0");
            httpGet.setHeader("Connection", "keep-alive");
            httpGet.setHeader("Host", "www.baidu.com");
            httpGet.setHeader("Sec-Fetch-Dest", "empty");
            httpGet.setHeader("Sec-Fetch-Mode", "cors");
            httpGet.setHeader("Sec-Fetch-Site", "same-origin");
            httpGet.setHeader("is_xhr", "1");
            httpGet.setHeader("X-Requested-With", "XMLHttpRequest");
            httpGet.setHeader("is_referer", refererUrl);
            httpGet.setHeader("Cookie", cookie);

//            httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36");
//            httpGet.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
//            //httpGet.setHeader("Accept","text/plain");
//            //httpGet.setHeader("Accept-Encoding", "gzip, deflate, br");
//            httpGet.setHeader("Accept-Language", "zh-CN,zh;q=0.9");
//            httpGet.setHeader("Connection", "keep-alive");
//            httpGet.setHeader("Host", "www.baidu.com");
//            //httpGet.setHeader("'Referer'", "https://www.baidu.com/");
//            httpGet.setHeader("Sec-Fetch-Dest", "document");
//            httpGet.setHeader("Sec-Fetch-Mode", "navigate");
//            httpGet.setHeader("Sec-Fetch-Site", "same-origin");
//            httpGet.setHeader("Upgrade-Insecure-Requests", "1");
//            httpGet.setHeader("is_referer", refererUrl);


            // 由客户端执行(发送)Get请求
            long startTime = System.currentTimeMillis();
            response = httpClient.execute(httpGet);
            //log.info("响应时长为{}", (System.currentTimeMillis() - startTime));

            // 从响应模型中获取响应实体
            HttpEntity responseEntity = response.getEntity();
            cookie = Arrays.asList(response.getHeaders("Set-Cookie")).stream().map(ele -> ele.getValue()).collect(Collectors.joining(";"));
            //System.out.println(Arrays.asList(response.getHeaders("Set-Cookie")).stream().map(ele -> ele.getValue()).collect(Collectors.joining(";")));
//            System.out.println("响应状态为:" + response.getStatusLine());
//            if (responseEntity != null) {
//                System.out.println("响应内容长度为:" + responseEntity.getContentLength());
            InputStream inputStream = responseEntity.getContent();
            String testHtml = GZIPUtils.uncompressToString(inputStream, "UTF-8");
            if (testHtml.contains("abao.chetimes")) {
                log.info("testHtml:" + testHtml);
            }

            if (testHtml.contains("页面不存在")) {
                log.info("第{}次出现了页面不存在", count);
                sleepTime = 5000L;
            } else if (!testHtml.contains("data-ecimtimesign")) {
                log.info("第{}次出现了百度搜索", count);
                sleepTime = 1000L;
            } else {
                log.info("网页正常，当前是第{}次", count);
                sleepTime = 1000L;
            }
//            log.info("请求url为：" + url);
//            log.info("响应内容为:" + EntityUtils.toString(responseEntity, "UTF-8"));
            refererUrl = url;
            count++;
            //随机睡一会儿
            Thread.sleep((long) (sleepTime * Math.random()));
//            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            try {
                // 释放资源
                if (httpClient != null) {
                    httpClient.close();
                }
                if (response != null) {
                    response.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    public void run() {
        while (true) {
            //健康检查，请求响应只要超过10秒就会重启服务器。
            String[] keywords = {"重疾险", "重大疾病险", "大病保险", "重疾保险", "重大疾病保险", "长期重疾险", "重疾保终身", "多次赔付重疾险", "多倍保障重疾险", "终身重疾保险", "大病重疾保险", "商业重疾险", "女性重疾险", "个人重疾保险", "储蓄型保险", "消费型重疾险", "重疾险性价比排名", "保险大病保险", "大病疾病保险", "重大疾病保险比较", "目前最好的重疾险", "消费型重大疾病险", "家庭保险", "健康险", "保险健康险", "健康保险", "返还健康险", "高端健康险", "互联网健康险", "商业健康保险", "重疾险有必要买吗", "重疾险性价比", "重疾险对比", "重疾险哪个好", "重疾险保额买多少合适", "重疾险性价比排行", "重大疾病保险排名", "重疾险排名", "重大疾病保险排行", "重疾险排行", "重疾险排名", "重疾险性价比排名", "买什么保险最好", "怎么买重大疾病保险", "保险哪家好", "哪家的保险好", "比较划算的重疾险", "最划算的重疾保险", "保险哪家好", "购买保险", "保险应该怎么买", "买什么保险好", "网上买保险", "互联网保险", "返还型保险", "保险怎样买", "哪家保险比较好", "保险那个好", "保险怎样买", "儿童定期重疾险", "少儿重大疾病险", "小宝宝保险", "儿童重疾险", "儿童保险", "儿童保险规划", "儿童重大疾病险", "孩子适合的保险", "儿童重疾险性价比排行", "少儿 重疾险", "定期少儿重疾险", "少儿保险", "少儿险", "孩子买保险", "小孩子保险", "孩子买什么保险", "孩子大病保险", "比较好的少儿保险", "小孩保险排行", "儿童保险排行", "保险儿童险", "宝宝少儿保险", "小孩子一般适合买什么保险", "儿童重疾险终身", "少儿保险", "儿童成长型保险", "比较好的儿童保险", "小孩保险买哪种适合", "婴儿保险排名", "儿童保险产品排名", "如何给小孩子买保险", "小孩买哪种保险划算", "婴儿买哪个保险合适"};
            for (int i = 0; i < keywords.length; i++) {
                //doGet("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=%E5%AD%A9%E5%AD%90%E4%B9%B0%E4%BB%80%E4%B9%88%E4%BF%9D%E9%99%A9");
                //doGet("https://www.baidu.com/s?ie=utf-8&wd=%E9%87%8D%E7%96%BE%E9%99%A9");
                try {
                    //doGet("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=" + URLEncoder.encode(keywords[i], "UTF-8"));
                    doGet("https://www.baidu.com/s?ie=utf-8&wd=" + URLEncoder.encode(keywords[i], "UTF-8"));
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
                countDownLatch.countDown();
            }
        }
    }
}
