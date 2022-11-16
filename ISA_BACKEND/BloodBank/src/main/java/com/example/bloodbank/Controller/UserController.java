package com.example.bloodbank.Controller;

import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Model.DonorSurvey;
import com.example.bloodbank.Service.ServiceImplementation.BloodDonorService;
import com.example.bloodbank.Service.ServiceImplementation.DonorSurveyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private BloodDonorService _userService;
    private DonorSurveyService _surveyService;

    UserController(BloodDonorService userService, DonorSurveyService surveyService){_userService = userService; _surveyService = surveyService;}

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
        if(_userService.isUnique(newUser))
            return _userService.create(newUser);
        else
            return null;
    }
    
    @PutMapping("/update")
    BloodDonor UpdateDonor(@RequestBody BloodDonor updatedUser) {
        return _userService.update(updatedUser);
    }

    @PostMapping("/createSurvey")
    DonorSurvey CreateSurvey(@RequestBody DonorSurvey newSurvey){
        return _surveyService.create(newSurvey);
    }
}
