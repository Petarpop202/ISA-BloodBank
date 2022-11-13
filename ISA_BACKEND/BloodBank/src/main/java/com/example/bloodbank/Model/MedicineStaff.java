package com.example.bloodbank.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "MedicineStaffs")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MedicineStaff extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;
    @ManyToOne
    @JoinColumn(name = "blood_bank_id")
    private BloodBank bloodBank;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "bloodDonationAppointments_id", referencedColumnName = "id")
    private Set<BloodDonationAppointment> bloodDonationAppointments = new HashSet<BloodDonationAppointment>();
}
