package com.example.bloodbank.Model;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private long id;
	private String name;
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private Address address;
	private String description;
	private float averageGrade;
	private String blood;

	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "bloodDonationAppointments_id", referencedColumnName = "id")
	private Set<BloodDonationAppointment> bloodDonationAppointments = new HashSet<BloodDonationAppointment>();

	@OneToMany
	@JoinColumn(name = "medicineStaff_id", referencedColumnName = "id")
	private Set<MedicineStaff> medicineStaffs = new HashSet<MedicineStaff>();
}
