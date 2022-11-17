package com.example.bloodbank.Controller;

import java.util.List;

import com.example.bloodbank.Model.MedicineStaff;
import com.example.bloodbank.Model.SystemAdministrator;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import com.example.bloodbank.Model.BloodBank;
import com.example.bloodbank.Model.Test;
import com.example.bloodbank.Service.ServiceImplementation.BloodBankService;

@RestController
@RequestMapping("bloodBank")
@CrossOrigin(origins = "http://localhost:4200")
public class BloodBankController {

	private BloodBankService bloodBankService;
	
	public BloodBankController(BloodBankService bloodBankService) {
		this.bloodBankService = bloodBankService;
	}
	
    @GetMapping("/get")
    public List<BloodBank> getAll(){
        return bloodBankService.getAll();
    }
    
    @GetMapping(value = "/get/{id}")
    public BloodBank getBloodBankById(@PathVariable Long id){
        return bloodBankService.getById(id);
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
