package com.galaxy.test;

import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.conn.params.ConnRouteParams;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.params.HttpConnectionParams;

import java.io.IOException;
import java.io.InputStream;

public class HttpGetUrl {
    public static void main(String[] args) {
//        DefaultHttpClient httpClient = new DefaultHttpClient();
//
//HttpHost proxy = new HttpHost("10.0.0.172", 80);
//httpClient.getParams().setParameter(ConnRouteParams.DEFAULT_PROXY,proxy);
//HttpConnectionParams.setConnectionTimeout(httpClient.getParams(),20 * 1000);
//HttpConnectionParams.setSoTimeout(httpClient.getParams(), 20 * 1000);
        CloseableHttpClient httpClient = HttpClientBuilder.create().build();
        HttpGet httpget = new HttpGet("http://www.baidu.com/baidu.php?url=0s0000aPch_Smgbn9mb0tfpH3QBWRefhfdeMzuCsoo7Et68GFLXNZXbra-fWRHvKcNQp24hDd00CbZ3nJfrmIXBxT2zGYaQf_56hM4AKlmUxP62T_w2the5LmmBdiJZL7fGocndrdoZC2hQmviU90ENvn7hBBiteUw3ttlIf581-KyudYckmn5FDiwBv5i5Zw0QnR4FJiwiwljLu8VlSlufh_ohH.7Y_insYZOfS6qnx-N6xsGEuIY5uBw01jfxqjljYksuQ2qbUP7nTAWKCsF6W3rZWNube32AM-WI6h9ikX1BsxjSU3x-d9uY3vglC8y7dzy2e5ktO3MotE1xWOcOvESKOs5UlOtaEo6CpXy6hUiksTZK4fEdwnslUYfTPyKh26SjFug_3TEwWYtS8a9G4I2UM3PQaUDlqXilZu8LInrS1IdsRP5Qa1Gk_EdwnXE4EYnhxj4en5Vose59sSxu9qIhZxeT5M8sSL1seOU9tSMj_q8Zx81OQO_2N9h9m3tUPdp6.U1Yk0ZDqdVBt__ON0ZKGm1Yk0ZfqdVBYtezz_JZ5dfKGUHYznWR0u1dEugK1n0KdpHdBmy-bIfKspyfqnfKWpyfqn16z0AdY5HDsnH-xnH0kPdt1nWc3g1nknWKxn1msnfKopHYs0ZFY5iYk0AFG5HDdr7tznjwxnWDL0AdW5HDsnj7xnH6dPWcvnH0kPdtknjFxnH0zg100TgKGujYs0Z7Wpyfqn0KzuLw9u1Ys0A7B5HKxn0K-ThTqn0KsTjYs0A4vTjYsQW0snj0snj0s0AdYTjYs0AwbUL0qn0KzpWYs0Aw-IWdsmsKhIjYs0ZKC5H00ULnqn0KBI1Ykn0K8IjYs0ZPl5fK9TdqGuAnqTZnVuLG8TsKGuAnqiD4a0Zw9ThI-IjYvndtsg1nsn0KYIgnqnHRdrjRLP16dP16Ln1Rsrjbzn1c0ThNkIjYkPHbdPjDzPjbzPHb10ZPGujY4nAnLuWRzn10snjmsn16v0AP1UHYdfYmvrRnzrj-DPHTzPDwj0A7W5HD0IZNY5HD0TA3qn0KkUgfqn0KkUgnqn0KbugwxmLK95H00XMfqn0KVmdqhThqV5HKxn7tsg1Kxn0Kbmy4dmhNxTAk9Uh-bT1Ysg1KxPjcYrjRvPdtYnWf3PHmLg100TA7Ygvu_myTqn0Kbmv-b5H00ugwGujYVnfK9TLKWm1Ys0ZNspy4Wm1Ys0Z7VuWYs0AuWIgfqn0KGTvP_5H00XMK_Ignqn0K9uAu_myTqr0K_uhnqn0KbmvPb5fKYTh7buHYvrH01njD0mhwGujY0UvnqnfKBIjYs0Aq9IZTqn0KEIjYk0AqzTZfqnBnkc1nWnBnkPj0sPWTLnBnkrj0snankrj0sna3snj0snj0Wninzc10WPHDWna3snj0snj0Wni3snj0snj00TNqv5H08rH9xna3sn7tsQW0sg108nHPxna3kr7tsQWn40AF1gLKzUvwGujYs0APzm1Y1nWTzr0");
        try {
            httpget.setHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
            httpget.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36");
            HttpResponse response = httpClient.execute(httpget);
//            System.out.println(response.getFirstHeader("Location"));
//            System.out.println(response.getEntity());
            InputStream inputStream = response.getEntity().getContent();
            String testHtml = GZIPUtils.uncompressToString(inputStream, "UTF-8");
            System.out.println(testHtml);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
