package com.example.bloodbank.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "BloodCenterAdministrators")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BloodCenterAdministrator extends User{
    @OneToOne
    @JoinColumn(name = "blood_bank_id")
    private BloodBank BloodBank;
}
