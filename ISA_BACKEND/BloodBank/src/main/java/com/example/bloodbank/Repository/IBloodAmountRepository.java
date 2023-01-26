package com.example.bloodbank.Repository;

import com.example.bloodbank.Model.BloodAmount;
import com.example.bloodbank.Model.BloodBank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBloodAmountRepository extends JpaRepository<BloodAmount, Long> {
}
