package com.example.bloodbank;

import java.util.Properties;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;


@SpringBootApplication
public class BloodBankApplication {
	
    public static void main(String[] args) {
        SpringApplication.run(BloodBankApplication.class, args);
    }
    
    @Value("${bloodqueue}")
	String queue;

	@Value("${contractqueue}")
	String queue2;

	@Value("${navigationqueue}")
	String queue3;

	@Value("${myexchange}")
	String exchange;
	
	@Value("${routingkey}")
	String routingkey;
	@Value("${routingkey1}")
	String routingkey1;


	@Bean
	Queue queue() {
		return new Queue(queue, true);
	}

	@Bean
	Queue queue2() {
		return new Queue(queue2, true);
	}

	@Bean
	Queue queue3() {
		return new Queue(queue3, true);
	}
	@Bean
	DirectExchange exchange() {
		return new DirectExchange(exchange);
	}
/*	@Bean
	Binding binding1(Queue queue3, DirectExchange exchange) {
		return BindingBuilder.bind(queue3).to(exchange).with(routingkey1);
	}*/
	@Bean
	Binding binding(Queue queue2, DirectExchange exchange) {
		return BindingBuilder.bind(queue2).to(exchange).with(routingkey);
	}


	@Bean
	public ConnectionFactory connectionFactory() {
		CachingConnectionFactory connectionFactory = new CachingConnectionFactory("localhost");
		return connectionFactory;
	}

    @Bean
    public JavaMailSender getJavaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);

        mailSender.setUsername("noreplybloodbank847@gmail.com");
        mailSender.setPassword("ujfwrwsevdqbtxjo");

        Properties props = mailSender.getJavaMailProperties();
		props.put("mail.smtp.ssl.protocols", "TLSv1.2");
        props.put("mail.smtp.auth", "true");
        //props.put("mail.smtp.starttls.enable", "false");
        props.put("mail.debug", "true");
        props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.ssl.trust", "smtp.gmail.com");

        return mailSender;
    }
}
