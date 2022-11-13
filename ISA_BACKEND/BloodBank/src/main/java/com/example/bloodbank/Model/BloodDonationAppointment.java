package com.example.bloodbank.Model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "BloodDonationAppointments")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BloodDonationAppointment {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    private Date date;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "medicineStaff_id", referencedColumnName = "id")
    private Set<MedicineStaff> medicineStaffs = new HashSet<MedicineStaff>();

    @ManyToOne()
    @JoinColumn(name = "bloodBank_id", referencedColumnName = "id")
    private BloodBank bloodBank;
}
