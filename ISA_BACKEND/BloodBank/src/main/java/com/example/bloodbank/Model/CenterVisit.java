package com.example.bloodbank.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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
    private long id;
    @ManyToOne
    @JoinColumn(name = "blood_donor_id")
    private BloodDonor bloodDonor;
    @OneToOne
    @JoinColumn(name = "blood_donation_id")
    private BloodDonationAppointment bloodDonationAppointment;
    private float price;
    private boolean isCanceled;
}
