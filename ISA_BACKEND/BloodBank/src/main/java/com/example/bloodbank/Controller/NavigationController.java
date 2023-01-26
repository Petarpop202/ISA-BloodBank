package com.example.bloodbank.Controller;

import com.example.bloodbank.Model.BloodBank;
import com.example.bloodbank.Model.Navigation;
import com.example.bloodbank.Model.SystemAdministrator;
import com.example.bloodbank.Service.ServiceImplementation.BloodBankService;
import com.example.bloodbank.Util.BloodProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "apiNavi")
@CrossOrigin(origins = "http://localhost:4200")
public class NavigationController {

    @Autowired
    private BloodProducer producer;
    @Autowired
    private BloodBankService bloodBankService;

    @GetMapping (value="/get")
    public Navigation getMessage() {
        return producer.getNavigation();
    }

    @GetMapping (value="/get/{id}")
    public Navigation sendMessage(@PathVariable Long id) {
        BloodBank bb = bloodBankService.getById(id);
        producer.sendLatitude(bb.getAddress().getLatitude(),bb.getAddress().getLongitude());
        return producer.getNavigation();
    }
}
