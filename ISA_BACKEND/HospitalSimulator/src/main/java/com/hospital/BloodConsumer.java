package com.hospital;

import java.io.IOException;
import java.time.format.DateTimeFormatter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.hospital.model.BloodDelivery;

@Component
public class BloodConsumer {

	private static final Logger log = LoggerFactory.getLogger(BloodConsumer.class);

	@RabbitListener(queues="${bloodqueue}")
	public void handler(String message){
		if (message.equals("Initial blood queue message") || message.equals("No blood available")) {
			log.info("Blood Consumer> " + message);
		}else {
			try {
				BloodDelivery bd = new ObjectMapper().registerModule(new JavaTimeModule()).readValue(message, BloodDelivery.class);
				log.info("Blood Consumer> " + bd.getReceivingHospital() + " received " + bd.getAmount() + " ml of blood type " + bd.getBloodType() + " on " + bd.getDateTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
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
