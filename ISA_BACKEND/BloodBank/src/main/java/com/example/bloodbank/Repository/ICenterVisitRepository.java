package com.example.bloodbank.Repository;

import com.example.bloodbank.Model.CenterVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICenterVisitRepository extends JpaRepository<CenterVisit, Long> {
}
