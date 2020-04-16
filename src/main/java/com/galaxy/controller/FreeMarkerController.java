package com.galaxy.controller;

import com.galaxy.entity.Content;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2019/5/11.
 */
@Controller
@RequestMapping("/ftl")
public class FreeMarkerController {

//    @RequestMapping("/index")
//    public String index(ModelMap modelMap) {
//        modelMap.addAttribute("var", "FreeMarkerYhw");
//
//        List list = new ArrayList();
//        list.add("Java");
//        list.add("python");
//        list.add("php");
//        modelMap.addAttribute("list1", list);
//        Map map = new HashMap();
//        map.put("java", "hello,java");
//        map.put("python", "hello,python");
//        map.put("php", "hello,php");
//        modelMap.put("map1", map);
//        return "freemarker/index";
//    }

    @RequestMapping(value = {"/{path:[0-9A-Za-z]+}/{id:[0-9]+}"}, method = RequestMethod.GET)
    public String contentNoSuffix(@PathVariable String path, @PathVariable Integer id, HttpServletRequest request,
                                  HttpServletResponse response, ModelMap model) {
        model.put("txt", "<p>帆帆帆帆啊啊啊哈哈哈</p><p>你好吗我，是是是拉拉阿拉</p><p>我在测试图片<img src=\"/static/r/cms/www/mobile/images/photo/c-tu-03.png\" style=\"max-width:750px\"/></p>");
        model.put("mobileRes", "/static/r/cms/www/mobile");
        model.put("href", "36532");
        model.put("hrefFormer", "36532");
        model.put("pageNo", 1);
        Content content = new Content();
        content.setTitle("阿保保险1");
        content.setViews(5334);
        content.setId(36352);
        content.setUps(33);
        model.put("content", content);
        return "freemarker/newsdetails";
    }

    @RequestMapping(value = {"/ftl2"}, method = RequestMethod.GET)
    public String contentNoSuffix2(HttpServletRequest request,
                                   HttpServletResponse response, ModelMap model) {
        model.put("txt", "<p>帆帆帆帆啊啊啊哈哈哈</p><p>你好吗我，是是是拉拉阿拉</p><p>我在测试图片<img src=\"/static/r/cms/www/mobile/images/photo/c-tu-03.png\" style=\"max-width:750px\"/></p>");
        model.put("webRes", "/static/r/cms/www/mobile");
        model.put("href", "36532");
        model.put("hrefFormer", "36532");
        model.put("pageNo", 1);
        Content content = new Content();
        content.setTitle("阿保保险");
        content.setViews(5334);
        content.setId(36352);
        content.setUps(33);
        content.setReleaseTime(new Date());
        content.setBiaotituUrl("/static/r/cms/www/mobile/images/photo/c-tu-03.png");
        List<Content> contentList = new ArrayList<>();
        contentList.add(content);
        for (int i = 1; i < 12; i++) {
            content = new Content();
            if(i==1) {
                content.setTitle("阿保保险阿保保险阿保保险阿保保险阿保保险阿保保险阿保保险" + i);
            }else{
                content.setTitle("阿保保险" + i);
            }
            content.setViews(5334);
            content.setId(36352);
            content.setUps(33);
            content.setReleaseTime(new Date());
            if (i != 8 && i != 9) {
                content.setBiaotituUrl("/static/r/cms/www/mobile/images/photo/c-tu-0" + i + ".png");
            }
            contentList.add(content);
        }
        model.put("content_list", contentList);
        model.put("current",1);
        model.put("left_page_url","/ftl/ftl2");
        model.put("total",20);
        model.put("right_page_url","/ftl/ftl2");
        return "freemarker/articleList";
    }

}
