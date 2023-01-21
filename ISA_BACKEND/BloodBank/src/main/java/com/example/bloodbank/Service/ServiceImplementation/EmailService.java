package com.example.bloodbank.Service.ServiceImplementation;

import java.io.UnsupportedEncodingException;
import java.util.Base64;

import javax.activation.DataHandler;
import javax.mail.BodyPart;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.bloodbank.Model.MailDetails;
import com.example.bloodbank.Service.IEmailService;

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
    
    public String sendMailWithImage(MailDetails details, String base64Image) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();

            MimeBodyPart htmlPart = new MimeBodyPart();
            htmlPart.setContent(details.getMsgBody(), "text/html; charset=UTF-8");

            Multipart multiPart = new MimeMultipart("alternative");

            byte[] rawImage = Base64.getDecoder().decode(base64Image);
            BodyPart imagePart = new MimeBodyPart();
            ByteArrayDataSource imageDataSource = new ByteArrayDataSource(rawImage,"image/png");

            imagePart.setDataHandler(new DataHandler(imageDataSource));
            imagePart.setHeader("Content-ID", "<qrImage>");
            imagePart.setFileName("QRCode.png");

            multiPart.addBodyPart(htmlPart);
            multiPart.addBodyPart(imagePart);

            message.setContent(multiPart);
            MimeMessageHelper helper = new MimeMessageHelper(message, "UTF-8");
            helper.setFrom(sender);
            helper.setTo(details.getRecipient());
            helper.setSubject(details.getSubject());
            javaMailSender.send(message);
        } catch (MessagingException exception) { }
        
        return "Uspesno kreiran mejl";
    }

    @Override
    public String sendMailWithAttachment(MailDetails details) {
        return null;
    }
}
