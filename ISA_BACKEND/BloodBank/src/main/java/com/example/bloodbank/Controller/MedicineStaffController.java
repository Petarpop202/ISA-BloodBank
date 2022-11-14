package com.example.bloodbank.Controller;

import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Model.MedicineStaff;
import com.example.bloodbank.Service.ServiceImplementation.BloodDonorService;
import com.example.bloodbank.Service.ServiceImplementation.MedicineStaffService;
import org.springframework.web.bind.annotation.*;

import java.lang.module.ModuleDescriptor;
import java.util.List;

@RestController
@RequestMapping("MedicineStaff")
@CrossOrigin(origins = "http://localhost:4200")
public class MedicineStaffController {

    private MedicineStaffService _medicineStaffService;

    MedicineStaffController(MedicineStaffService medicineStaffService){_medicineStaffService = medicineStaffService;}

    @GetMapping("/get")
    public List<MedicineStaff> getAll(){
        return _medicineStaffService.getAll();
    }

    @GetMapping(value = "/get/{id}")
    public MedicineStaff getMedicineStaffById(@PathVariable Long id){
        return _medicineStaffService.getById(id);
    }

    @PostMapping("/new")
    MedicineStaff CreateMedicineStaff(@RequestBody MedicineStaff newMedicineStaff) {
        return _medicineStaffService.create(newMedicineStaff);
    }

    @PutMapping("/update")
    MedicineStaff UpdateMedicineStaff(@RequestBody MedicineStaff updatedMedicineStaff) {
        return _medicineStaffService.update(updatedMedicineStaff);
    }

}
