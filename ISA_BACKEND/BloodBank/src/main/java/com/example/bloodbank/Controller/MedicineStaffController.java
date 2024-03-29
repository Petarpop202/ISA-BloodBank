package com.example.bloodbank.Controller;

import com.example.bloodbank.Model.MedicineStaff;
import com.example.bloodbank.Model.SystemAdministrator;
import com.example.bloodbank.Service.ServiceImplementation.MedicineStaffService;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(value = "/getMedicineStaffFromBloodBank/{id}")
    public List<MedicineStaff> getMedicineStaffFromBloodBank(@PathVariable Long id){
        return _medicineStaffService.getMedicineStaffFromBloodBank(id);
    }
    
    @PutMapping(value = "/update/id={id}+pw={password}")
    MedicineStaff changePassword(@PathVariable Long id, @PathVariable String password) {
    		
    		return _medicineStaffService.changePassword(id, password);
    	
    }
}
