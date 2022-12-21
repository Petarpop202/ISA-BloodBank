package com.example.bloodbank.Service;

import com.example.bloodbank.Model.MailDetails;

public interface IEmailService {
    // Method
    // To send a simple email
    String sendSimpleMail(MailDetails details);

    // Method
    // To send an email with attachment
    String sendMailWithAttachment(MailDetails details);
}
