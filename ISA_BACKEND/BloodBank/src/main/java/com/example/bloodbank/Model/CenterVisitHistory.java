package com.example.bloodbank.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "CenterVisitHistory")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CenterVisitHistory {
    @Id
    private long Id;
    private Date VisitDate;
    private float Price;
    @ManyToOne
    @JoinColumn(name = "blood_bank_id")
    private BloodBank BloodBank;
}
