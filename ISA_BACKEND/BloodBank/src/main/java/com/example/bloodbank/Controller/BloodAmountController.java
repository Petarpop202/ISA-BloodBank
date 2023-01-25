package com.example.bloodbank.Controller;

import com.example.bloodbank.Model.*;
import com.example.bloodbank.Service.ServiceImplementation.BloodAmountService;
import com.example.bloodbank.Service.ServiceImplementation.BloodBankService;
import com.example.bloodbank.Service.ServiceImplementation.MedicineStaffService;
import com.example.bloodbank.Service.ServiceImplementation.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("bloodAmount")
@CrossOrigin(origins = "http://localhost:4200")
public class BloodAmountController {

    private BloodAmountService bloodAmountService;
    private BloodBankService bloodBankService;

    public BloodAmountController(BloodAmountService bloodAmountService,  BloodBankService bloodBankService) {
        this.bloodBankService = bloodBankService;
        this.bloodAmountService = bloodAmountService;
    }

    @GetMapping(value = "/getAllByBloodBank/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_MEDICALWORKER')")
    public List<BloodAmount> getAllByBloodBank(@PathVariable Long id){
        return bloodAmountService.getAllByBloodBank(id);
    }

    @GetMapping(value = "/getAllBloodTypes")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_MEDICALWORKER')")
    public List<BloodType> getAllBloodTypes(){
        return bloodAmountService.getAllBloodTypes();
    }

    @PostMapping("/addBloodDonation")
    BloodAmount addBloodDonation(@RequestBody BloodAmount newBloodAmount) {
        return bloodAmountService.addBloodDonation(newBloodAmount);
    }

}
