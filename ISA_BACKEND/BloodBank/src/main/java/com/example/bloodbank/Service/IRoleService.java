package com.example.bloodbank.Service;

import com.example.bloodbank.Model.Role;

import java.util.List;

public interface IRoleService {
	Role findById(Long id);
	List<Role> findByName(String name);
}
