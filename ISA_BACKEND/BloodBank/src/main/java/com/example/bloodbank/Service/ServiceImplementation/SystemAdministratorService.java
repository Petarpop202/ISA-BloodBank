package com.example.bloodbank.Service.ServiceImplementation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.bloodbank.Model.SystemAdministrator;
import com.example.bloodbank.Model.User;
import com.example.bloodbank.Repository.ISystemAdministratorRepository;
import com.example.bloodbank.Repository.IUserRepository;
import com.example.bloodbank.Service.ISystemAdministratorService;

@Service
public class SystemAdministratorService implements ISystemAdministratorService {
	private ISystemAdministratorRepository _systemAdministratorRepository;

    SystemAdministratorService(ISystemAdministratorRepository systemAdministratorRepository){_systemAdministratorRepository = systemAdministratorRepository;}

    @Override
    public List<SystemAdministrator> getAll() {
        return _systemAdministratorRepository.findAll();
    }

    @Override
    public SystemAdministrator getById(Long id) {
        return _systemAdministratorRepository.findById(id).orElseGet(null);
    }
    @Override
    public SystemAdministrator create(SystemAdministrator entity) {
        return _systemAdministratorRepository.save(entity);
    }

    @Override
    public SystemAdministrator update(SystemAdministrator entity) {
        return null;
    }

    @Override
    public void delete(Long entityId) {
    	_systemAdministratorRepository.delete(getById(entityId));
    }
}
