package com.example.bloodbank.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "CenterVisit")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CenterVisit {
    @Id
    private long Id;
    @ManyToOne
    @JoinColumn(name = "blood_donor_id")
    private BloodDonor BloodDonor;
    @ManyToOne
    @JoinColumn(name = "blood_bank_id")
    private BloodBank BloodBank;
    private float Price;
    private Date VisitDate;
    private boolean isDone;
}
