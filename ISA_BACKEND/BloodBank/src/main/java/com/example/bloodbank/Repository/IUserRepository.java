package com.example.bloodbank.Repository;

import com.example.bloodbank.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {
    User findByUsername(String Username);
}
