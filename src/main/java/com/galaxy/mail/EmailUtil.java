package com.galaxy.mail;

import com.galaxy.config.SpringContextHolder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.mail.internet.MimeMessage;
import java.io.File;

/**
 * @function 邮件发送工具类
 */
@Slf4j
public class EmailUtil {
    private static String MAIL_SENDER; //邮件发送者
    private static JavaMailSender javaMailSender = SpringContextHolder.getBean(JavaMailSender.class);

//    /**
//     * 发送一个简单格式的邮件
//     *
//     * @param emailDto
//     */
//    public static void sendSimpleMail(EmailDto emailDto) {
//        try {
//            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
//            //邮件发送人
//            simpleMailMessage.setFrom(MAIL_SENDER);
//            //邮件接收人
//            simpleMailMessage.setTo(emailDto.getRecipient());
//            //邮件主题
//            simpleMailMessage.setSubject(emailDto.getSubject());
//            //邮件内容
//            simpleMailMessage.setText(emailDto.getContent());
//            javaMailSender.send(simpleMailMessage);
//        } catch (Exception e) {
//            log.error("邮件发送失败:{}", e);
//        }
//    }

    /**
     * 发送密码
     *
     * @param emailDto
     */
    public static void sendPassword(EmailDto emailDto, String password, ApplicationEntity applicationEntity) {
        MimeMessage mimeMailMessage = null;
        try {
            mimeMailMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMailMessage, true);
            mimeMessageHelper.setFrom(applicationEntity.getMailSender());
            mimeMessageHelper.setTo(emailDto.getRecipient());
            mimeMessageHelper.setSubject(emailDto.getSubject());


            String td = "</td>";
            String tr = "</tr>";

            StringBuilder htmlStringBuilder = new StringBuilder();
            htmlStringBuilder.append("<table>");
            htmlStringBuilder.append("<tbody>");
            htmlStringBuilder.append("<tr>")
                    .append("<td>")
                    .append("你已开通CRM系统登陆权限，账号为你本人邮箱账号，密码为")
                    .append(password)
                    .append(td)
                    .append(tr);
            htmlStringBuilder.append("<tr>")
                    .append("<td>")
                    .append("<hr>本邮件为系统邮件，请勿直接回复，如需帮助，请与管理员取得联系")
                    .append(td)
                    .append(tr);
            htmlStringBuilder.append("</tbody>");
            htmlStringBuilder.append("</table>");


            mimeMessageHelper.setText(htmlStringBuilder.toString(), true);
            javaMailSender.send(mimeMailMessage);
        } catch (Exception e) {
            log.error("邮件发送失败:{}", e);
        }
    }

    /**
     * 发送重置后的密码
     *
     * @param emailDto
     */
    public static void sendResetPassword(EmailDto emailDto, String password, ApplicationEntity applicationEntity) {
        MimeMessage mimeMailMessage = null;
        try {
            mimeMailMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMailMessage, true);
            mimeMessageHelper.setFrom(applicationEntity.getMailSender());
            mimeMessageHelper.setTo(emailDto.getRecipient());
            mimeMessageHelper.setSubject(emailDto.getSubject());


            String td = "</td>";
            String tr = "</tr>";

            StringBuilder htmlStringBuilder = new StringBuilder();
            htmlStringBuilder.append("<table>");
            htmlStringBuilder.append("<tbody>");
            htmlStringBuilder.append("<tr>")
                    .append("<td>")
                    .append("CRM系统密码重置为")
                    .append(password)
                    .append("，请保存")
                    .append(td)
                    .append(tr);
            htmlStringBuilder.append("<tr>")
                    .append("<td>")
                    .append("<hr>本邮件为系统邮件，请勿直接回复，如需帮助，请与管理员取得联系")
                    .append(td)
                    .append(tr);
            htmlStringBuilder.append("</tbody>");
            htmlStringBuilder.append("</table>");


            mimeMessageHelper.setText(htmlStringBuilder.toString(), true);
            javaMailSender.send(mimeMailMessage);
        } catch (Exception e) {
            log.error("邮件发送失败:{}", e);
        }
    }

    /**
     * 发送带附件格式的邮件
     *
     * @param emailDto
     */
    public static void sendAttachmentMail(EmailDto emailDto, ApplicationEntity applicationEntity) {
        MimeMessage mimeMailMessage = null;
        try {
            mimeMailMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMailMessage, true);
            mimeMessageHelper.setFrom(applicationEntity.getMailSender());
            mimeMessageHelper.setTo(emailDto.getRecipient());
            mimeMessageHelper.setSubject(emailDto.getSubject());
            mimeMessageHelper.setText(emailDto.getContent(),true);
            //文件路径
            FileSystemResource file = new FileSystemResource(new File("F:/algorithm/test112.xlsx"));
            mimeMessageHelper.addAttachment("17092166516_20190929.xlsx", file);

            javaMailSender.send(mimeMailMessage);
        } catch (Exception e) {
            log.error("邮件发送失败:{}", e);
        }
    }
//
//    /**
//     * 发送带静态资源的邮件
//     *
//     * @param emailDto
//     */
//    public static void sendInlineMail(EmailDto emailDto) {
//        MimeMessage mimeMailMessage = null;
//        try {
//            mimeMailMessage = javaMailSender.createMimeMessage();
//            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMailMessage, true);
//            mimeMessageHelper.setFrom(MAIL_SENDER);
//            mimeMessageHelper.setTo(emailDto.getRecipient());
//            mimeMessageHelper.setSubject(emailDto.getSubject());
//            mimeMessageHelper.setText("<html><body>带静态资源的邮件内容，这个一张IDEA配置的照片:<img src='cid:picture' /></body></html>", true);
//            //文件路径
//            FileSystemResource file = new FileSystemResource(new File("src/main/resources/static/image/mail.png"));
//            mimeMessageHelper.addInline("picture", file);
//
//            javaMailSender.send(mimeMailMessage);
//        } catch (Exception e) {
//            log.error("邮件发送失败:{}", e);
//        }
//    }
}
