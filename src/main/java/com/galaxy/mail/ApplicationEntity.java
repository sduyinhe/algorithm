package com.galaxy.mail;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Data
public class ApplicationEntity {
//    @Value("${system.privateKey}")
//    private String privateKey;
    @Value("${spring.mail.username}")
    private String mailSender; //邮件发送者
//    @Value("${system.moorPrivateKey}")
//    private String moorPrivateKey;
}
