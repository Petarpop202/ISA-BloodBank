package com.example.bloodbank.Model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BloodDelivery {
	
	private String receivingHospital;
	private String bloodType;
	private double amount;
	private LocalDateTime dateTime;
}
