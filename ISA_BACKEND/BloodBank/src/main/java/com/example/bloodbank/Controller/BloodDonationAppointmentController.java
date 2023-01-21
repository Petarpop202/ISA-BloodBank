package com.example.bloodbank.Controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
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
    
    @GetMapping(value = "/bloodBankFree={id}")
    @PreAuthorize("hasAnyRole('ROLE_MEDICALWORKER','ROLE_DONOR')")
    public List<BloodDonationAppointment> getAllFreeByBloodBank(@PathVariable long id) {
    	return bloodDonationAppointmentService.getAllFreeByBloodBank(id);
    }
    
    @GetMapping(value = "/datetime={datetime}")
    @PreAuthorize("hasAnyRole('ROLE_MEDICALWORKER', 'ROLE_DONOR')")
    public List<BloodDonationAppointment> getAllByDateTime(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime datetime) {
    	return bloodDonationAppointmentService.getAllByDateTime(datetime);
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
