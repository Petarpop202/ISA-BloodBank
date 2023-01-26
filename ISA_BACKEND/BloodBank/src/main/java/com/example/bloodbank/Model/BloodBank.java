package com.example.bloodbank.Model;

import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

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
	private LocalTime workTimeStart;
	private LocalTime workTimeEnd;

	/*@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "bloodDonationAppointments_id", referencedColumnName = "id")

	/*@OneToMany
	@JoinColumn(name = "medicineStaff_id", referencedColumnName = "id")
	private Set<MedicineStaff> medicineStaffs = new HashSet<MedicineStaff>();*/
}
