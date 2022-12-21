package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.MailDetails;
import com.example.bloodbank.Service.IEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

@Service
public class EmailService implements IEmailService {

    @Autowired
    private JavaMailSender javaMailSender ;

    public EmailService(){
    }
    @Value("${spring.mail.username}") private String sender;

    public String sendSimpleMail(MailDetails details) throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, "UTF-8");
        helper.setFrom(sender);
        helper.setTo(details.getRecipient());
        helper.setText(details.getMsgBody(),true);
        helper.setSubject(details.getSubject());

        javaMailSender.send(message);
        return "Uspesno kreiran mejl";
    }

    @Override
    public String sendMailWithAttachment(MailDetails details) {
        return null;
    }
}
