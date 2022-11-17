package com.example.bloodbank.Service.ServiceImplementation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Repository.IBloodDonorRepository;
import com.example.bloodbank.Service.IBloodDonorService;

@Service
public class BloodDonorService implements IBloodDonorService {
    private IBloodDonorRepository _bloodDonorRepository;

    BloodDonorService(IBloodDonorRepository bloodDonorRepository){_bloodDonorRepository = bloodDonorRepository;}

    @Override
    public List<BloodDonor> getAll() {
        return _bloodDonorRepository.findAll();
    }

    @Override
    public BloodDonor getById(Long id) {
        return _bloodDonorRepository.findById(id).orElseGet(null);
    }

    @Override
    public BloodDonor create(BloodDonor entity) {
        return _bloodDonorRepository.save(entity);
    }

    @Override
    public BloodDonor update(BloodDonor entity) {
    	BloodDonor oldDonor = _bloodDonorRepository.findById(entity.getId()).orElseGet(null);
    	
    	oldDonor.setName(entity.getName());
    	oldDonor.setSurname(entity.getSurname());
    	oldDonor.setGender(entity.getGender());
    	oldDonor.setUsername(entity.getUsername());
    	oldDonor.setPassword(entity.getPassword());
    	oldDonor.setJmbg(entity.getJmbg());
    	oldDonor.setPhoneNumber(entity.getPhoneNumber());
    	oldDonor.setAddress(entity.getAddress());
    	
    	return _bloodDonorRepository.save(oldDonor);
    }

    @Override
    public void delete(Long entityId) {

    }

    @Override
    public boolean isUnique(BloodDonor newUser) {
        List<BloodDonor> listAll  = this.getAll();
        for(BloodDonor donor : listAll){
            if(donor.getUsername().equals(newUser.getUsername()))
            	return false;
        }
        return true;
    }
    
    @Override
    public List<BloodDonor> findByNameAndSurname(String name, String surname){
    	List<BloodDonor> listAll = this.getAll();
    	List<BloodDonor> result = new ArrayList<BloodDonor>();
    	for(BloodDonor donor : listAll) {
    		if(donor.getName().toLowerCase().contains(name.toLowerCase()) && donor.getSurname().toLowerCase().contains(surname.toLowerCase())) {
    			result.add(donor);
    		}
    	}
    	return result;
    }
}
