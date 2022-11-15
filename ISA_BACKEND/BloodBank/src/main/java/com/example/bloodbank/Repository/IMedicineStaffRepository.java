package com.example.bloodbank.Repository;

import com.example.bloodbank.Model.MedicineStaff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMedicineStaffRepository extends JpaRepository<MedicineStaff, Long> {
}
