package com.example.bloodbank.Controller;

import java.io.Console;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Model.SystemAdministrator;
import com.example.bloodbank.Model.User;
import com.example.bloodbank.Service.ServiceImplementation.SystemAdministratorService;

@RestController
@RequestMapping("systemAdministrator")
@CrossOrigin(origins = "http://localhost:4200")
public class SystemAdministratorController {

	private SystemAdministratorService _systemAdministratorService;
	
	public SystemAdministratorController(SystemAdministratorService systemAdministratorService) {
		_systemAdministratorService = systemAdministratorService;
	}
	
	@GetMapping("/get")
	public List<SystemAdministrator> getAll(){
		return _systemAdministratorService.getAll();
	}
	
	@GetMapping(value = "/get/{id}")
	public SystemAdministrator getById(@PathVariable Long id){
		return _systemAdministratorService.getById(id);
	}
	
	@PostMapping("/new")
	SystemAdministrator CreateSystemAdministrator(@RequestBody SystemAdministrator newSystemAdministrator) {		
		return _systemAdministratorService.create(newSystemAdministrator);
	}
	
	@PutMapping(value = "/update/id={id}+pw={password}")
	SystemAdministrator changePassword(@PathVariable Long id, @PathVariable String password) {
    		
    		return _systemAdministratorService.changePassword(id, password);
    	
    }
}
