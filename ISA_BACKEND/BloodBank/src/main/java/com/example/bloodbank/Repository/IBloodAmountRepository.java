package com.example.bloodbank.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bloodbank.Model.BloodAmount;
import com.example.bloodbank.Model.BloodType;

@Repository
public interface IBloodAmountRepository extends JpaRepository<BloodAmount, Long> {
	public List<BloodAmount> findAllByBloodType(BloodType bloodType);
}
