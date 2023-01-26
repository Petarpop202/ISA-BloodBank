package com.hospital;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.hospital.model.BloodDelivery;
import com.hospital.model.HospitalContract;
import com.hospital.model.Navigation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Component
public class NavigationComponent {

    private static final Logger log = LoggerFactory.getLogger(NavigationComponent.class);
    private Navigation navigation = new Navigation();

    @RabbitListener(queues="${navigationqueue}")
    public void handler(String message){
        if (message.equals("Initial navigation queue")) {
            log.info("Blood Consumer> " + message);
        }else {
            try {
                Navigation nav = new ObjectMapper().registerModule(new JavaTimeModule()).readValue(message, Navigation.class);
                log.info("Longitude > " + nav.getLongitude() + " latitude " + nav.getLatitude());
                navigation.setLatitude(nav.getLatitude());
                navigation.setLongitude(nav.getLongitude());
                sendInitialMessages();
            } catch (JsonParseException e) {
                e.printStackTrace();
            } catch (JsonMappingException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void sendToExchange(String exchange, String routingkey, String message){
        log.info("Sending> ... Message=[ " + message + " ] Exchange=[" + exchange + "] RoutingKey=[" + routingkey + "]");
        this.rabbitTemplate.convertAndSend(exchange, routingkey, message);
    }


    //@EventListener(ApplicationReadyEvent.class)
    public void sendInitialMessages() {
        ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();
        log.info("Sending> ... Message=[ New Longitude and Latitude] Exchange=[myexchange] RoutingKey=[navigation-queue]");
        this.rabbitTemplate.convertAndSend("myexchange", "navigation-queue1", "Initial navigation queue");

        Runnable periodicTask = new Runnable() {
            @Override
            public void run() {
                try {
                    //45.264358901796854, 19.82999000652997  Pozicija banke kojoj saljemo krv
                    if(navigation.getLongitude() <= 19.82999000652997)
                        navigation.setLongitude(navigation.getLongitude() + 0.001);
                    if(navigation.getLatitude() <= 45.264358901796854)
                        navigation.setLatitude(navigation.getLatitude() + 0.001);
                    String json = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(navigation);
                    sendTo( "navigation-queue1", json);
                } catch (JsonProcessingException e) {
                    e.printStackTrace();
                }
            };
        };
        if(navigation.getLongitude() >= 19.82999000652997 && navigation.getLatitude() >= 45.264358901796854)
            executor.shutdown();
        else executor.scheduleAtFixedRate(periodicTask, 0, 10, TimeUnit.SECONDS);
    }

    public void sendTo(String routingkey, String message){
        log.info("Sending> ... Message=[ " + message + " ] RoutingKey=[" + routingkey + "]");
        this.rabbitTemplate.convertAndSend(routingkey, message);
    }
}
