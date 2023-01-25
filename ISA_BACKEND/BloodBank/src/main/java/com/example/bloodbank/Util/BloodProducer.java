package com.example.bloodbank.Util;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.example.bloodbank.Model.BloodDelivery;
import com.example.bloodbank.Model.HospitalContract;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

@Component
public class BloodProducer {
	
	private static final Logger log = LoggerFactory.getLogger(BloodProducer.class);

	@Autowired
	private RabbitTemplate rabbitTemplate;
	
	private HospitalContract contract;
	
	@EventListener(ApplicationReadyEvent.class)
	public void sendInitialMessages() {
	    log.info("Sending> ... Message=[ Initial blood queue message ] RoutingKey=[blood-queue]");
		this.rabbitTemplate.convertAndSend("blood-queue", "Initial blood queue message");
		
		sendBlood();
	}
	
	public void sendBlood() {
		ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();

		Runnable periodicTask = new Runnable() {
		    public void run() {
		    	if (contract == null) return;
		    	BloodDelivery bd = new BloodDelivery();
				bd.setReceivingHospital(contract.getHospital());
				bd.setBloodType(contract.getBloodType());
				bd.setAmount(contract.getAmount());
				bd.setDateTime(LocalDateTime.now());
				try {
					String json = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(bd);
					sendTo("blood-queue", json);
				} catch (JsonProcessingException e) {
					e.printStackTrace();
				}
		    }
		};
		executor.scheduleAtFixedRate(periodicTask, 0, 10, TimeUnit.SECONDS);
	}

	public void sendTo(String routingkey, String message){
		log.info("Sending> ... Message=[ " + message + " ] RoutingKey=[" + routingkey + "]");
		this.rabbitTemplate.convertAndSend(routingkey, message);
	}
	
	@RabbitListener(queues="${contractqueue}")
	public void handler(String message) {
		if (message.equals("Initial contract queue message")) {
			log.info("Contract Consumer> " + message);
		}else {
			try {
				contract = new ObjectMapper().registerModule(new JavaTimeModule()).readValue(message, HospitalContract.class);
				log.info("Contract Consumer> " + contract.getHospital() + " created a contract for " + contract.getAmount() + " ml of blood type " + contract.getBloodType() + " on " + contract.getDateTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
			} catch (JsonParseException e) {
				e.printStackTrace();
			} catch (JsonMappingException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}