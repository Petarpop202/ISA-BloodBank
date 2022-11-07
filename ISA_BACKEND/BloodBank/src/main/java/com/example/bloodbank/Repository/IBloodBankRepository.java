package com.example.bloodbank.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bloodbank.Model.BloodBank;

@Repository
public interface IBloodBankRepository extends JpaRepository<BloodBank, Long> {

}
