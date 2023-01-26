package com.example.bloodbank.Service.ServiceImplementation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Model.Role;
import com.example.bloodbank.Model.SystemAdministrator;
import com.example.bloodbank.Model.User;
import com.example.bloodbank.Repository.ISystemAdministratorRepository;
import com.example.bloodbank.Repository.IUserRepository;
import com.example.bloodbank.Service.IRoleService;
import com.example.bloodbank.Service.ISystemAdministratorService;

@Service
public class SystemAdministratorService implements ISystemAdministratorService {
	private ISystemAdministratorRepository _systemAdministratorRepository;
	private IUserRepository _userRepository;
	private IRoleService _roleService;

    SystemAdministratorService(ISystemAdministratorRepository systemAdministratorRepository, IUserRepository userRepository, IRoleService roleService){_systemAdministratorRepository = systemAdministratorRepository; _userRepository = userRepository; _roleService = roleService;}
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Override
    public List<SystemAdministrator> getAll() {
        return _systemAdministratorRepository.findAll();
    }

    @Override
    public SystemAdministrator getById(Long id) {
        return _systemAdministratorRepository.findById(id).orElseGet(null);
    }
    
    @Override
    public User getUserById(Long id) {
        return _userRepository.findById(id).orElseGet(null);
    }
    
    @Override
    public SystemAdministrator create(SystemAdministrator entity) { 
    	
    	entity.setPassword(passwordEncoder.encode(entity.getPassword()));
    	entity.setLastPasswordResetDate(null);
    	entity.setEnabled(true);
    	Role roles1 = _roleService.findByName("ROLE_ADMIN");
        List<Role> r = new ArrayList<>();
        r.add(roles1);
        entity.setRoles(r);
        return _systemAdministratorRepository.save(entity);
    }

    @Override
    public SystemAdministrator update(SystemAdministrator entity) {
        return null;
    }
    
    @Override
    public SystemAdministrator changePassword(Long id, String password) {
    	SystemAdministrator systemAdmministrator = getById(id);
    
    	
    	systemAdmministrator.setPassword(passwordEncoder.encode(password));
    	
    	
    	
    	return _systemAdministratorRepository.save(systemAdmministrator);
    }

    @Override
    public void delete(Long entityId) {
    	_systemAdministratorRepository.delete(getById(entityId));
    }
}
