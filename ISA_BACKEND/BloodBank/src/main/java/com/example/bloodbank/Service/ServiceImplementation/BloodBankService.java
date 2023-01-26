package com.example.bloodbank.Service.ServiceImplementation;

import java.time.LocalTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.bloodbank.Model.BloodBank;
import com.example.bloodbank.Repository.IBloodBankRepository;
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
		
		entity.setWorkTimeEnd(LocalTime.of(17, 00, 00));
		entity.setWorkTimeStart(LocalTime.of(07, 00, 00));
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
	
	@Override
    public boolean isNameUnique(String name) {
        List<BloodBank> listAll  = this.getAll();
        for(BloodBank bloodBank : listAll){
            if(bloodBank.getName().equals(name))
            	return false;
        }
        return true;
    }
}
