package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.Role;
import com.example.bloodbank.Repository.IRoleRepository;
import com.example.bloodbank.Service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService implements IRoleService {

  @Autowired
  private IRoleRepository roleRepository;

  @Override
  public Role findById(Long id) {
    Role auth = this.roleRepository.getOne(id);
    return auth;
  }

  @Override
  public Role findByName(String name) {
	Role roles = this.roleRepository.findByName(name);
    return roles;
  }


}
