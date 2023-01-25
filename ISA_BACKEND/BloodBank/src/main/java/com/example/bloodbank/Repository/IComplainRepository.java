package com.example.bloodbank.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bloodbank.Model.Complains;

@Repository
public interface IComplainRepository extends JpaRepository<Complains, Long> {

}


