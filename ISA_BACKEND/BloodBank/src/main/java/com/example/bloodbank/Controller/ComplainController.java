package com.example.bloodbank.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bloodbank.Model.Complains;
import com.example.bloodbank.Model.SystemAdministrator;
import com.example.bloodbank.Service.ServiceImplementation.ComplainService;

@RestController
@RequestMapping("Complains")
@CrossOrigin(origins = "http://localhost:4200")
public class ComplainController {
	private ComplainService _complainService;
	
	ComplainController(ComplainService complainService){_complainService = complainService;}
	
	@GetMapping("/get")
	public List<Complains> getAll(){
		return _complainService.getAll();
	}
	
	@GetMapping(value = "/get/{id}")
	public Complains getComplainById(@PathVariable Long id) {
		return _complainService.getById(id);
	}
	
	@GetMapping("/getComplainsWithNoResponse")
	public List<Complains> getComplainsWithNoResponse(){
		return _complainService.getComplainsWithNoResponse();
	}
	
	@GetMapping(value = "/getComplainsWithResponse/{id}")
	public List<Complains> getComplainsWithResponse(@PathVariable Long id){
		return _complainService.getComplainsWithResponse(id);
	}
	
	@PutMapping("/update")
	Complains UpdateComplain(@RequestBody Complains updatedComplain) {
		return _complainService.update(updatedComplain);
	}
	
	@PutMapping(value = "/updateResponse/id={id}+response={response}")
	Complains UpdateComplain(@PathVariable Long id, @PathVariable String response) {
		return _complainService.updateResponse(id, response);
	}
	
	@PutMapping(value = "/updateResponse/id={id}+admin={admin}+user={user}")
	Complains UpdateComplain(@PathVariable Long id, @PathVariable Long admin, @PathVariable Long user) {
		
		return _complainService.updateSystemAdministrator(id, admin, user);
	}
	
	
}
