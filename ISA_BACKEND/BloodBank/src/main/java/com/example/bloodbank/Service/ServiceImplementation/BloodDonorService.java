package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Repository.IBloodDonorRepository;
import com.example.bloodbank.Service.IBloodDonorService;
import org.springframework.stereotype.Service;

import java.util.List;

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
    	oldDonor.setMail(entity.getMail());
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
}
