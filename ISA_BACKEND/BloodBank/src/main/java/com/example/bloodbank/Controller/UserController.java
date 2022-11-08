package com.example.bloodbank.Controller;

import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Service.ServiceImplementation.BloodDonorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private BloodDonorService _userService;

    UserController(BloodDonorService userService){_userService = userService;}

    @GetMapping("/get")
    public List<BloodDonor> getAll(){
        return _userService.getAll();
    }

    @GetMapping(value = "/get/{id}")
    public BloodDonor getBloodDonorById(@PathVariable Long id){
        return _userService.getById(id);
    }

    @PostMapping("/new")
    BloodDonor CreateDonor(@RequestBody BloodDonor newUser) {
        return _userService.create(newUser);
    }
}
