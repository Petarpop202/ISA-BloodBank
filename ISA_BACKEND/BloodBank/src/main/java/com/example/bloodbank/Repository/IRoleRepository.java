package com.example.bloodbank.Repository;

import com.example.bloodbank.Model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IRoleRepository extends JpaRepository<Role, Long> {
	Role findByName(String name);
}
