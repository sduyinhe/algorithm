package com.galaxy.test;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class URLConnectionTest {

    public static void main(String[] args) {
        try {
            Integer dataId = 1;
            //URL url = new URL("https://w.url.cn/s/ApapkGr");
            //http://www.baidu.com/baidu.php?url=0s0000aPch_Smgbn9mb0tfpH3QBWRefhfdeMzuCsoo7Et68GFLXNZXbra-fWRHvKcNQp24hDd00CbZ3nJfrmIXBxT2zGYaQf_56hM4AKlmUxP62T_w2the5LmmBdiJZL7fGocndrdoZC2hQmviU90ENvn7hBBiteUw3ttlIf581-KyudYckmn5FDiwBv5i5Zw0QnR4FJiwiwljLu8VlSlufh_ohH.7Y_insYZOfS6qnx-N6xsGEuIY5uBw01jfxqjljYksuQ2qbUP7nTAWKCsF6W3rZWNube32AM-WI6h9ikX1BsxjSU3x-d9uY3vglC8y7dzy2e5ktO3MotE1xWOcOvESKOs5UlOtaEo6CpXy6hUiksTZK4fEdwnslUYfTPyKh26SjFug_3TEwWYtS8a9G4I2UM3PQaUDlqXilZu8LInrS1IdsRP5Qa1Gk_EdwnXE4EYnhxj4en5Vose59sSxu9qIhZxeT5M8sSL1seOU9tSMj_q8Zx81OQO_2N9h9m3tUPdp6.U1Yk0ZDqdVBt__ON0ZKGm1Yk0ZfqdVBYtezz_JZ5dfKGUHYznWR0u1dEugK1n0KdpHdBmy-bIfKspyfqnfKWpyfqn16z0AdY5HDsnH-xnH0kPdt1nWc3g1nknWKxn1msnfKopHYs0ZFY5iYk0AFG5HDdr7tznjwxnWDL0AdW5HDsnj7xnH6dPWcvnH0kPdtknjFxnH0zg100TgKGujYs0Z7Wpyfqn0KzuLw9u1Ys0A7B5HKxn0K-ThTqn0KsTjYs0A4vTjYsQW0snj0snj0s0AdYTjYs0AwbUL0qn0KzpWYs0Aw-IWdsmsKhIjYs0ZKC5H00ULnqn0KBI1Ykn0K8IjYs0ZPl5fK9TdqGuAnqTZnVuLG8TsKGuAnqiD4a0Zw9ThI-IjYvndtsg1nsn0KYIgnqnHRdrjRLP16dP16Ln1Rsrjbzn1c0ThNkIjYkPHbdPjDzPjbzPHb10ZPGujY4nAnLuWRzn10snjmsn16v0AP1UHYdfYmvrRnzrj-DPHTzPDwj0A7W5HD0IZNY5HD0TA3qn0KkUgfqn0KkUgnqn0KbugwxmLK95H00XMfqn0KVmdqhThqV5HKxn7tsg1Kxn0Kbmy4dmhNxTAk9Uh-bT1Ysg1KxPjcYrjRvPdtYnWf3PHmLg100TA7Ygvu_myTqn0Kbmv-b5H00ugwGujYVnfK9TLKWm1Ys0ZNspy4Wm1Ys0Z7VuWYs0AuWIgfqn0KGTvP_5H00XMK_Ignqn0K9uAu_myTqr0K_uhnqn0KbmvPb5fKYTh7buHYvrH01njD0mhwGujY0UvnqnfKBIjYs0Aq9IZTqn0KEIjYk0AqzTZfqnBnkc1nWnBnkPj0sPWTLnBnkrj0snankrj0sna3snj0snj0Wninzc10WPHDWna3snj0snj0Wni3snj0snj00TNqv5H08rH9xna3sn7tsQW0sg108nHPxna3kr7tsQWn40AF1gLKzUvwGujYs0APzm1Y1nWTzr0
            URL url = new URL("http://3427.xg4ken.com/media/redir.php?prof=407&camp=1344&affcode=kw1417&k_inner_url_encoded=1&cid=7617199841&url[]=http%3A%2F%2Fpacificprime.cn%2FALP%2FSH%2Flife-insurance%2FR%2Fpg1%3Futm_source%3Dbaidu%26utm_medium%3Dcpc%26utm_term%3Dlife%2520insurance%26utm_campaign%3DGNLF1%26kwds%3DÖØ´ó¼²²¡ ±£ÏÕ%26dgid%3Dbd-7617199841%26kwid%3Dbd-51319096332%26netw%3D1%26adps%3D1cl3");
            //URL url = new URL("http://www.baidu.com/baidu.php?url=0s0000aPch_Smgbn9N6zuzgzLhV2PzX9V1qrI-UAcwqunnRUDVJGukIAxS5fOLb4ZGdJxmHVOqRfx0ayJIP6zHKDaPfkdri0WjwJSXDqzKrB5eu5ryB8QHZLfI1PDvpF42OYZ0gUlM9mEOy_SejoyzRlvK2E8KhO7_vxrRNH4gz1oKMgrwDpha5eTVrpazNFzfh_rbDj5m-99A3zWka07Ni8q3bM.Db_NR2Ar5Od66u9C5S9qKlmO2o0O9iBKhA6OlZYZGW6zyuQcvp2m3PAjw6HKTM63dyNqt7jHzk8sHfGmEukm59OPt5od9uY3vglC8y7dzy2e5ktO3MotE1xWOcOvESKtE5qEtpS8a9G4pauVQZKsTZ-aOND1jGEwdsRP5QGHTOKGmerMc1b_8LePS4QreGlX8a9G4myIrP-SJFWdOPb13x5u9qVXZutrZ1en5o_seOU9tqvZvSXZxeT5MY3IMVseqvx4xqWcGyAp7W__zUS-f0.U1Yk0ZDqdVBt__ON0ZKGm1Yk0ZfqdVBYtezz_JZ5dfKGUHYznWR0u1dsTLwz0ZNG5yF9pywd0ZKGujYk0APGujY1rjc0UgfqnH0krNtknjDLg1nsnjFxn1Dzn7t1PW0k0AVG5H00TMfqnWmY0AFG5HDdr7tznjwxnWDL0AdW5HDsnj7xnH6YrH0sPHc1PNtknjFxnH0zg100TgKGujYs0Z7Wpyfqn0KzuLw9u1Ys0A7B5HKxn0K-ThTqn0KsTjYs0A4vTjYsQW0snj0snj0s0AdYTjYs0AwbUL0qn0KzpWYs0Aw-IWdsmsKhIjYs0ZKC5H00ULnqn0KBI1Ykn0K8IjYs0ZPl5fK9TdqGuAnqTZnVmLf0pywW5R9affKYmgFMugfqPWPxn7t1nj00IZN15Hm1PWcYrH6vrjnkn1TzP1b40ZF-TgfqnHR4PHfkPjDLrHb3PsK1pyfqm1I-PjF9P1nsnj7WrHmYr0KWTvYqnW6dnbuKnWuDPHf1wDf1wfK9m1Yk0ZwdIjYk0ZK85H00TydY5H00Tyd15H00uANYgvPsmHYs0ZGY5H00UyPxuMFEUHYsg1Kxn7tsg100uA78IyF-gLK_my4GuZnqn7tsg1fdnjfzPH7xPjRsPjcdnNts0ZK9I7qhUA7M5H00uAPGujYs0ANYpyfqQHD0mgPsmvnqn0KdTA-8mvnqn0KkUymqn0KhmLNY5H00pgPWUjYs0ZGsUZN15H00mywhUA7M5H60UAuW5H00uAPWujY0IZF9uARqPWbsn10k0AFbpyfqfWwKwW6zrDmzwH61nRuAnW7jPbcvPWfsnRwKwRDLwDD0UvnqnfKBIjYs0Aq9IZTqn0KEIjYk0AqzTZfqnBnkc1nWnBn1PHckP1cznznznj0snanznH0sna3snj0snj0Wninzc10WPHDWna3snj0snj0Wni3snj0snj00TNqv5H08rHIxna3sn7tsQW0sg108njuxna3kPNtsQWnL0AF1gLKzUvwGujYs0APzm1Y4njRY&amp;ck=912.1.0.0.0.285.219.0&amp;shh=www.baidu.com&amp;sht=baidu");
            //URL url = new URL("http://www.baidu.com/baidu.php?sc.0s0000aPch_Smgbn9N1q_1k-yEQXH-sU6DrTF942SFcbBIicKGmtRzVCNyVr8y2Rmj3ajNg-z2GUJKIuMFwVcnU6Rw0mb-QddG2OV1Reoyqb7SizCmyLKNJT7NhuMfSydrJdha4qmDPk2ajfijlDXihGr425TxtqqWBG9Z2cLbE7RWE0nobZkz5GZpo-TP0JNgX9Z4Ap5NLi29zKqbj-n8mTlcKv.DY_ig_8lZ_kXyPSuhFDALtMxqEqjzYst8FWqaz15l1nkgunqxHM_3qhXzz1Wg3qxvOY52rpAGBVi_nYQAHWvI-p6.U1Yk0ZDqYlivSTQzkni3qoAW1qyl1to20ZKGm1Yk0Zfqkovs_Vpk1pBkCtON0A-V5HczPfKM5yq-TZns0ZNG5yF9pywd0ZKGujYk0APGujY1rjR0UgfqnH0krNtknjDLg1DsPjuxn1msnfKopHYs0ZFY5H61n6KBpHYkPHNxnHR3g1csP7tznHT0UynqnH0snNtkrjRYn10zP16Yg1Dsn-ts0Z7spyfqn0Kkmv-b5H00ThIYmyTqn0K9mWYsg100ugFM5H00TZ0qn0K8IM0qna3snj0snj0sn0KVIZ0qn0KbuAqs5H00ThCqn0KbugmqTAn0uMfqn0KspjYs0Aq15H00mMTqnH00UMfqn0K1XWY0mgPxpywW5gK1QyPV0A-bm1dcfbD0IA7zuvNY5Hnkg1nkP7tkPWb0IZN15HDsPjDYP1D3rj0vn1DYrHDLn1fY0ZF-TgfqnHR4PHfkPHTsnWRvnsK1pyfqmymvrHbsrHcsnjcsm1mknfKWTvYqfbDsf1T4rRfdnHD4nYn3P0K9m1Yk0ZK85H00TydY5H00Tyd15H00XMfqn0KVmdqhThqV5HKxn7tsg100uA78IyF-gLK_my4GuZnqn7tsg1fkPW0zrHIxn0Ksmgwxuhk9u1Ys0AwWpyfqn0K-IA-b5iYk0A71TAPW5H00IgKGUhPW5H00Tydh5H00uhPdIjYs0A-1mvsqn0KlTAkdT1Ys0A7buhk9u1Yk0Akhm1Ys0AwWmvfq0Zwzmyw-5Hm4njnsPsKBuA-b5RRYwDDLwW9jwHwaPRFKP1R1wjTsP1nsPWPKrRnznRuD0AFY5HD0Uv7YI1Ys0AqY5H00ULFsIjYsc10Wc10Wnansc108nj0snj0sc10Wc10WQinsQW0snj0snankQW0snj0sn0KkgLmqna3LndtsQW0sg108njKxna3snNtsQW04g108nWT0mMPxTZFEuA-b5H00mLFW5Hf3nHc4&word=");
            URLConnection connection = url.openConnection();
            String location = connection.getHeaderField("Location");
            System.out.println(connection.getURL());
//            if (location == null) {
//                // do nothing
//            } else {
//                if (location.indexOf("?") != -1) {
//                    location += "&crmCustomerId=" + dataId;
//                } else {
//                    location += "?crmCustomerId=" + dataId;
//                }
//            }
            System.out.println("方案书处理之后的跳转地址为：" + location);

            StringBuffer stringBuffer = new StringBuffer();
            String result = "";
            try (InputStream in = connection.getInputStream()) {    //带资源的try-catch语句。自动关闭
                InputStream buffer = new BufferedInputStream(in);
                //将InputStream串链到一个Reader
                Reader reader = new InputStreamReader(buffer);
                int c;
                while ((c = reader.read()) != -1) {
                    stringBuffer.append((char) c);
                }
            } catch (MalformedURLException e) {

            }
            int locationIndex = stringBuffer.indexOf("window.location.replace");
            if (locationIndex != -1) {
                result = stringBuffer.substring(stringBuffer.indexOf("http:", locationIndex), stringBuffer.indexOf("\")", locationIndex));
            } else {
                result = connection.getURL().toString();
            }
            System.out.println(result);

//            System.out.println(connection.getHeaderField("Location"));
//
//            System.out.println(connection.getHeaderFields());

//                System.out.println("Content-Type: " + connection.getContentType());
//                System.out.println("Content-Length: " + connection.getContentLength());
//                System.out.println("Content-LengthLong: " + connection.getContentLengthLong());
//                System.out.println("Content-encoding: " + connection.getContentEncoding());
//                System.out.println("Date: " + connection.getDate());
//                System.out.println("Expires: " + connection.getExpiration());
//                System.out.println("Last-modified: " + connection.getLastModified());
        } catch (IOException e) {
            System.out.println(e);
        }
    }

}
