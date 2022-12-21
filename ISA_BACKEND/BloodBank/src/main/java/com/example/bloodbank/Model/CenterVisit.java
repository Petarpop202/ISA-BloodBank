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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long Id;
    @ManyToOne
    @JoinColumn(name = "blood_donor_id")
    private BloodDonor BloodDonor;
    @OneToOne
    @JoinColumn(name = "blood_donation_id")
    private BloodDonationAppointment BloodDonationAppointment;
    private float Price;
    private boolean isCanceled;
}
