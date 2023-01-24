package com.example.bloodbank.Controller;

import com.example.bloodbank.Dto.DonorSurveyDto;
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
    
    @GetMapping(value = "/findByNameAndSurname/name={name}+surname={surname}")
    public List<BloodDonor> findByNameAndSurname(@PathVariable String name, @PathVariable String surname){
    	return _userService.findByNameAndSurname(name, surname);
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
    	if (_userService.isUnique(updatedUser))
    		return _userService.update(updatedUser);
    	else
    		return null;
    }
    
    @GetMapping(value = "/survey/{id}")
    DonorSurvey GetSurveyByDonor(@PathVariable Long id){
        return _surveyService.getByDonor(id);
    }

    @PostMapping("/createSurvey")
    DonorSurvey CreateSurvey(@RequestBody DonorSurveyDto newSurvey){
        DonorSurvey ds = new DonorSurvey();
        ds.setBloodDonor(_userService.getById(newSurvey.getDonorId()));
        ds.setIsAvailable(newSurvey.isAvailable());
        return _surveyService.create(ds);
    }
}
