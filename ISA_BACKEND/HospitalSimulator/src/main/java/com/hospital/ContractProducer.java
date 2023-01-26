package com.hospital;

import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.hospital.model.BloodType;
import com.hospital.model.HospitalContract;

@Component
public class ContractProducer {
	
	private static final Logger log = LoggerFactory.getLogger(ContractProducer.class);

	@Autowired
	private RabbitTemplate rabbitTemplate;
	
	@EventListener(ApplicationReadyEvent.class)
	public void sendInitialMessages() {
	    log.info("Sending> ... Message=[ Initial contract queue message ] Exchange=[myexchange] RoutingKey=[contract-queue]");
		this.rabbitTemplate.convertAndSend("myexchange", "contract-queue", "Initial contract queue message");
		
		HospitalContract contract = new HospitalContract();
		contract.setHospital("Hospital 1");
		contract.setBloodType(BloodType.A_PLUS);
		contract.setAmount(20);
		contract.setDateTime(LocalDateTime.now());
		try {
			String json = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(contract);
			sendToExchange("myexchange", "contract-queue", json);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}

	public void sendToExchange(String exchange, String routingkey, String message){
		log.info("Sending> ... Message=[ " + message + " ] Exchange=[" + exchange + "] RoutingKey=[" + routingkey + "]");
		this.rabbitTemplate.convertAndSend(exchange, routingkey, message);
	}
}