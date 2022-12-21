package com.example.bloodbank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@SpringBootApplication
public class BloodBankApplication {

    public static void main(String[] args) {
        SpringApplication.run(BloodBankApplication.class, args);
    }

    @Bean
    public JavaMailSender getJavaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);

        mailSender.setUsername("isabloodbanknoreply@gmail.com");
        mailSender.setPassword("ophmivqfijmphqsp");

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        //props.put("mail.smtp.starttls.enable", "false");
        props.put("mail.debug", "true");
        props.put("mail.smtp.starttls.enable", "true");

        return mailSender;
    }
}
