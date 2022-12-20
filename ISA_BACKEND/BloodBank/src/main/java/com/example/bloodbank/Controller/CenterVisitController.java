package com.example.bloodbank.Controller;

import com.example.bloodbank.Model.CenterVisit;
import com.example.bloodbank.Service.ServiceImplementation.CenterVisitService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("centerVisit")
@CrossOrigin(origins = "http://localhost:4200")
public class CenterVisitController {

    private CenterVisitService _centerVisitService;

    public CenterVisitController(CenterVisitService centerVisitService){
        _centerVisitService = centerVisitService;
    }

    @GetMapping("/get")
    public List<CenterVisit> getAll(){
        return (List<CenterVisit>) _centerVisitService.getAll();
    }

    @GetMapping(value = "/get/{id}")
    public CenterVisit getCenterVisitById(@PathVariable Long id){
        return _centerVisitService.getById(id);
    }

    @PostMapping("/new")
    CenterVisit CreateBloodDonationAppointment(@RequestBody CenterVisit newBloodDonationAppointment) {
        return _centerVisitService.create(newBloodDonationAppointment);
    }

}
