package com.example.bloodbank.Service.ServiceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.example.bloodbank.Model.BloodBank;
import com.example.bloodbank.Repository.IBloodBankRepository;
import com.example.bloodbank.Repository.ITestRepository;
import com.example.bloodbank.Service.IBloodBankService;

@Service
public class BloodBankService implements IBloodBankService {

	private IBloodBankRepository bloodBankRepo;

	BloodBankService(IBloodBankRepository bloodBankRepo){
        this.bloodBankRepo = bloodBankRepo;
    }
    
	@Override
	public List<BloodBank> getAll() {
		return bloodBankRepo.findAll();
	}

	@Override
	public BloodBank getById(Long id) {
		// TODO Auto-generated method stub
		return bloodBankRepo.findById(id).orElseGet(null);
	}

	@Override
	public BloodBank create(BloodBank entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BloodBank update(BloodBank entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(Long entityId) {
		// TODO Auto-generated method stub
		
	}

}
