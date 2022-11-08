package com.example.bloodbank.Model;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "BloodBanks")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class BloodBank {
	
	@Id
	private long Id;
	private String Name;
	private String Description;
	private float AverageGrade;
	private Date FreeTermin;
	private String Blood;
	/*
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public float getAverageGrade() {
		return AverageGrade;
	}
	public void setAverageGrade(float averageGrade) {
		AverageGrade = averageGrade;
	}
	public Date getFreeTermin() {
		return FreeTermin;
	}
	public void setFreeTermin(Date freeTermin) {
		FreeTermin = freeTermin;
	}
	public String getBlood() {
		return Blood;
	}
	public void setBlood(String blood) {
		Blood = blood;
	}
	
	*/
	
}
