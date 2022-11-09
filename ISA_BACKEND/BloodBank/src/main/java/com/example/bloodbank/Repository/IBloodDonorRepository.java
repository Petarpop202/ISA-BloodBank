package com.example.bloodbank.Repository;

import com.example.bloodbank.Model.BloodDonor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBloodDonorRepository extends JpaRepository<BloodDonor, Long> {
}
