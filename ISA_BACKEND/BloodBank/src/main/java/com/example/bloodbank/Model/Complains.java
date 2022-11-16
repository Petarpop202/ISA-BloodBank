package com.example.bloodbank.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Complains")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Complains {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long Id;
    @OneToOne
    @JoinColumn(name = "blood_donor_id")
    private BloodDonor BloodDonor;
    @OneToOne
    @JoinColumn(name = "blood_bank_id")
    private BloodBank BloodBank;
    @Column
    private String Description;
}
