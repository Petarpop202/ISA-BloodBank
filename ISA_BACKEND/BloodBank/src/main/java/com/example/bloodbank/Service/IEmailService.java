package com.example.bloodbank.Service;

import com.example.bloodbank.Model.MailDetails;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;

public interface IEmailService {
    // Method
    // To send a simple email
    String sendSimpleMail(MailDetails details) throws MessagingException, UnsupportedEncodingException;

    // Method
    // To send an email with attachment
    String sendMailWithAttachment(MailDetails details);
}
