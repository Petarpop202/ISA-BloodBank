package com.example.bloodbank.Repository;

import com.example.bloodbank.Model.BloodDonationAppointment;
import com.example.bloodbank.Model.CenterVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICenterVisitRepository extends JpaRepository<CenterVisit, Long> {
}
