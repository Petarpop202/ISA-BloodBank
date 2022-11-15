package com.example.bloodbank.Service.ServiceImplementation;

import java.util.List;

import com.example.bloodbank.Model.MedicineStaff;
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
		return bloodBankRepo.findById(id).orElseGet(null);
	}

	@Override
	public BloodBank create(BloodBank entity) {
		return bloodBankRepo.save(entity);
	}

	@Override
	public BloodBank update(BloodBank entity) {
		BloodBank oldBloodBank = getById(entity.getId());

		oldBloodBank.setName(entity.getName());
		oldBloodBank.setDescription(entity.getDescription());
		oldBloodBank.setAddress(entity.getAddress());
		return bloodBankRepo.save(oldBloodBank);
	}

	@Override
	public void delete(Long entityId) {
		bloodBankRepo.delete(getById(entityId));
	}

}
