package com.galaxy.test;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Test18 {
    public static void main(String[] args) {
        try {
            BufferedWriter out = new BufferedWriter(new FileWriter("D:/runoob.txt"));
            out.write("5d57903c00002460460260b6042560960c60060c565ce617617605575c258b5da5bd465db623622611475cd5985e65ce565e662d62b61b575d75a45f05da465ce617617604475c258a5da5bd2a66366b6526642b6a060f66e692565d661f61f60d575c95935e25c92261060d60b6142360460861b6191060f60f6066091160d60560360f465e262b628618475d35a25ee5d62c61d5cf5f762d2d634630609637565d261b61c60b575c558f5df5c4465d561d61e60c475c85915e15c7565de626625614575d059c5eb5d22860369f68d639296656846066b12e6035b55e76172f5f75eb6155ef1460960460d60a1560c60f604612465db623622611475cd5985e65cd565ce616617605575c158a5da5bd465dc625623614475ce59a5e85d0565e262a628618575d35a25ee5d61a6726666636741b69961f68068f465ce616617604475c25895da5bd1261060b60b613136026056186172060c60e6046062160b60360160d565d9621621610575ca5965e55cc1c6145c75ef6251d62d6285ff62d465e562d62a61b475d65a45f05da\n" +
                    "5d57903c00002460460260b6042560960c60060c565ce617617605575c258b5da5bd465db623622611475cd5985e65ce565e662d62b61b575d75a45f05da465ce617617604475c258a5da5bd2a66366b6526642b6a060f66e692565d661f61f60d575c95935e25c92261060d60b6142360460861b6191060f60f6066091160d60560360f465e262b628618475d35a25ee5d62c61d5cf5f762d2d634630609637565d261b61c60b575c558f5df5c4465d561d61e60c475c85915e15c7565de626625614575d059c5eb5d22860369f68d639296656846066b12e6035b55e76172f5f75eb6155ef1460960460d60a1560c60f604612465db623622611475cd5985e65cd565ce616617605575c158a5da5bd465dc625623614475ce59a5e85d0565e262a628618575d35a25ee5d61a6726666636741b69961f68068f465ce616617604475c25895da5bd1261060b60b613136026056186172060c60e6046062160b60360160d565d9621621610575ca5965e55cc1c6145c75ef6251d62d6285ff62d465e562d62a61b475d65a45f05da\n");
            out.close();
            System.out.println("文件创建成功！");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}