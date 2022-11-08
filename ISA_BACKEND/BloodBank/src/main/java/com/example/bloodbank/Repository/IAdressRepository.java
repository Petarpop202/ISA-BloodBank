package com.example.bloodbank.Repository;

import com.example.bloodbank.Model.Adress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAdressRepository extends JpaRepository<Adress, Long> {
}
