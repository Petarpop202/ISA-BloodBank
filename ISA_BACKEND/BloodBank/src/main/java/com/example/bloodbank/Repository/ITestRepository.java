package com.example.bloodbank.Repository;

import com.example.bloodbank.Model.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITestRepository extends JpaRepository<Test,Long> {
}
