package com.example.bloodbank.Service;

import com.example.bloodbank.Model.SystemAdministrator;
import com.example.bloodbank.Model.User;

public interface ISystemAdministratorService extends ICRUDService<SystemAdministrator> {
	SystemAdministrator changePassword(Long id, String password);
	User getUserById(Long id);
}
