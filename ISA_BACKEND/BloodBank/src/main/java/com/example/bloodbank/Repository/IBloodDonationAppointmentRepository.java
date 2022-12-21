package com.example.bloodbank.Repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bloodbank.Model.BloodDonationAppointment;

@Repository
public interface IBloodDonationAppointmentRepository extends JpaRepository<BloodDonationAppointment, Long> {
	
	public List<BloodDonationAppointment> findAllByBloodBankId(long id);
	public List<BloodDonationAppointment> findAllByStartDateTimeAndIsFree(LocalDateTime datetime, boolean free);
}
