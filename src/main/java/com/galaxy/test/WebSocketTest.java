package com.galaxy.test;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.galaxy.entity.UserBehavior;
import com.galaxy.service.UserBehaviorService;
import lombok.Data;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArraySet;

/**
 * websocket服务
 *
 * @author like
 */
@ServerEndpoint("/websocket")
@Component
public class WebSocketTest {

    private static int onlineCount = 0;//记录当前在线人数


    //确保线程安全
    private static CopyOnWriteArraySet<WebSocketTest> webSocketSet = new CopyOnWriteArraySet<WebSocketTest>();
    private static ConcurrentHashMap<String, UserBehaviorDTO> behaviorMap = new ConcurrentHashMap<>();
    private static ApplicationContext applicationContext;
    private Session session;

    @OnOpen
    public void onOpen(Session session) {
        this.session = session;
        webSocketSet.add(this);
        addOnlineCount();
        System.out.println("有新连接加入！当前在线人数为" + getOnlineCount());
    }

    @OnClose
    public void OnClose() {
        webSocketSet.remove(this); //从set中删除
        subOnlineCount(); //在线数减1
        System.out.println("有一连接关闭！当前在线人数为" + getOnlineCount() + ",sessionId=" + session.getId());
        UserBehaviorDTO userBehaviorDTO = behaviorMap.get(session.getId());
        userBehaviorDTO.setEndTime(LocalDateTime.now());
        userBehaviorDTO.setStayTime(String.valueOf(Duration.between(userBehaviorDTO.getStartTime(), userBehaviorDTO.getEndTime()).getSeconds()));
        UserBehavior userBehavior = userBehaviorDTO.convert(userBehaviorDTO);

        UserBehaviorService userBehaviorService = applicationContext.getBean(UserBehaviorService.class);
        userBehaviorService.save(userBehavior);
    }

    @OnMessage
    public void OnMessage(String message, Session session) throws IOException {
        System.out.println("来自客户端的消息:" + message + ",sessionId=" + session.getId());

        ObjectMapper objectMapper = new ObjectMapper();
        UserBehaviorDTO userBehaviorDTO = objectMapper.readValue(message, UserBehaviorDTO.class);
        userBehaviorDTO.setUserId(Long.parseLong(session.getId().hashCode() + ""));
        userBehaviorDTO.setStartTime(LocalDateTime.now());
        behaviorMap.put(session.getId(), userBehaviorDTO);
//        UserBehavior userBehavior1 =new UserBehavior();
//        userBehavior.setUserId(userBehavior.getUserId());
//        userBehavior.setBehaviorType(2);
//        userBehavior.setStartTime(LocalDateTime.now());

//群发消息
        for (WebSocketTest item : webSocketSet) {
            try {
                item.sendMessage(message);
            } catch (IOException e) {
                e.printStackTrace();
                continue;
            }
        }

    }

    @OnError
    public void OnError(Session session, Throwable error) {
        System.out.println("发生错误");
        error.printStackTrace();
    }

    public void sendMessage(String message) throws IOException {
        this.session.getBasicRemote().sendText(message);
//this.session.getAsyncRemote().sendText(message);
    }

    public static synchronized int getOnlineCount() {
        return onlineCount;
    }

    public static synchronized void addOnlineCount() {
        WebSocketTest.onlineCount++;
    }

    public static synchronized void subOnlineCount() {
        WebSocketTest.onlineCount--;
    }

    public static void setApplicationContext(ApplicationContext applicationContext) {
        WebSocketTest.applicationContext = applicationContext;
    }
}