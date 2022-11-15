package com.example.bloodbank.Repository;

import com.example.bloodbank.Model.DonorSurvey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDonorSurveyRepository extends JpaRepository<DonorSurvey, Long> {
}
