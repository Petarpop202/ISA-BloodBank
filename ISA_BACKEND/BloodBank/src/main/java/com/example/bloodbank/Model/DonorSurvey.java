package com.example.bloodbank.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "DonorSurvey")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DonorSurvey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;
    @OneToOne
    @JoinColumn(name = "blood_donor_id")
    private BloodDonor BloodDonor;
    private Boolean isAvailable;
}
