package com.hospital.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.ContractProducer;

@RestController
@RequestMapping(value = "api")
public class ProducerController {
	
	@Autowired
	private ContractProducer producer;
	
	@PostMapping(value="/{exchange}/{queue}", consumes = "text/plain")
	public ResponseEntity<String> sendMessageToExchange(@PathVariable("exchange") String exchange, @PathVariable("queue") String queue, @RequestBody String message) {
		producer.sendToExchange(exchange, queue, message);
		return ResponseEntity.ok().build();
	}
}
