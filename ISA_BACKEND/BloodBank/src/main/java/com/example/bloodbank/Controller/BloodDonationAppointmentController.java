package com.example.bloodbank.Controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bloodbank.Model.BloodDonationAppointment;
import com.example.bloodbank.Service.ServiceImplementation.BloodDonationAppointmentService;

@RestController
@RequestMapping("bloodDonationAppointment")
@CrossOrigin(origins = "http://localhost:4200")
public class BloodDonationAppointmentController {

	private BloodDonationAppointmentService bloodDonationAppointmentService;
	
	public BloodDonationAppointmentController(BloodDonationAppointmentService bloodDonationAppointmentService) {
		this.bloodDonationAppointmentService = bloodDonationAppointmentService;
	}
	
    @GetMapping("/get")
    public List<BloodDonationAppointment> getAll(){
        return bloodDonationAppointmentService.getAll();
    }
    
    @GetMapping(value = "/get/{id}")
    public BloodDonationAppointment getBloodDonationAppointmentById(@PathVariable Long id){
        return bloodDonationAppointmentService.getById(id);
    }
    
    @GetMapping(value = "/bloodBank={id}")
    @PreAuthorize("hasAnyRole('ROLE_MEDICALWORKER','ROLE_DONOR')")
    public List<BloodDonationAppointment> getAllByBloodBank(@PathVariable long id) {
    	return bloodDonationAppointmentService.getAllByBloodBank(id);
    }
    
    @PostMapping("/new")
    BloodDonationAppointment CreateBloodDonationAppointment(@RequestBody BloodDonationAppointment newBloodDonationAppointment) {
    	return bloodDonationAppointmentService.create(newBloodDonationAppointment);
    }

    @PutMapping("/update")
    BloodDonationAppointment UpdateBloodDonationAppointment(@RequestBody BloodDonationAppointment updatedBloodDonationAppointment) {
        return bloodDonationAppointmentService.update(updatedBloodDonationAppointment);
    }

}
