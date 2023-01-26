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
public class HospitalContract {
	
	private String hospital;
	private BloodType bloodType;
	private double amount;
	private LocalDateTime dateTime;
}
