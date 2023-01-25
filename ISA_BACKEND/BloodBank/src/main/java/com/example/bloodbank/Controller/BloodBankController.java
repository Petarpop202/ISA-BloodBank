package com.example.bloodbank.Controller;

import java.security.Principal;
import java.util.List;

import com.example.bloodbank.Model.MedicineStaff;
import com.example.bloodbank.Model.SystemAdministrator;

import com.example.bloodbank.Model.User;
import com.example.bloodbank.Service.ServiceImplementation.MedicineStaffService;
import com.example.bloodbank.Service.ServiceImplementation.UserService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.bloodbank.Model.BloodBank;
import com.example.bloodbank.Service.ServiceImplementation.BloodBankService;

@RestController
@RequestMapping("bloodBank")
@CrossOrigin(origins = "http://localhost:4200")
public class BloodBankController {

	private BloodBankService bloodBankService;
    private UserService userService;
    private MedicineStaffService medicineStaffService;
	
	public BloodBankController(BloodBankService bloodBankService, UserService userService, MedicineStaffService medicineStaffService) {
		this.bloodBankService = bloodBankService;
        this.userService = userService;
        this.medicineStaffService = medicineStaffService;
	}
	
    @GetMapping("/get")
    public List<BloodBank> getAll(){
        return bloodBankService.getAll();
    }
    
    @GetMapping(value = "/get/{id}")

    @PreAuthorize("hasAnyRole('ROLE_DONOR', 'ROLE_ADMIN', 'ROLE_MEDICALWORKER')")
    public BloodBank getBloodBankById(@PathVariable Long id){
        return bloodBankService.getById(id);
    }

    @GetMapping(value = "/getBloodBankFromRegisteredMedicineWorker")
    @PreAuthorize("hasAnyRole('ROLE_MEDICALWORKER')")
    public long getBloodBankId(Principal user){
        User registeredUser = userService.findByUsername(user.getName());
        MedicineStaff doctor = medicineStaffService.getById(registeredUser.getId());
        return doctor.getBloodBank().getId();
    }


    @GetMapping(value = "/checkName={name}")
    public boolean isNameUnique(@PathVariable String name) {
    	return bloodBankService.isNameUnique(name);
    }

    @PutMapping("/update")
    BloodBank UpdateBloodBank(@RequestBody BloodBank updatedBloodBank) {
        return bloodBankService.update(updatedBloodBank);
    }
    
    @PostMapping("/new")
    BloodBank CreateBloodBank(@RequestBody BloodBank newBloodBank) {
		return bloodBankService.create(newBloodBank);
	}
}
