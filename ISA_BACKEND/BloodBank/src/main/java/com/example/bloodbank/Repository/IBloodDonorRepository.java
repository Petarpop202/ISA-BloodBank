package com.example.bloodbank.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bloodbank.Model.BloodDonor;

@Repository
public interface IBloodDonorRepository extends JpaRepository<BloodDonor, Long> {
	
	public List<BloodDonor> findAllByUsername(String username);
}
