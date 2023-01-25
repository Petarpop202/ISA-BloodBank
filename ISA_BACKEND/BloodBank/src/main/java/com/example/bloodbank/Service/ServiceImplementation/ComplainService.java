package com.example.bloodbank.Service.ServiceImplementation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.bloodbank.Model.Complains;
import com.example.bloodbank.Model.MedicineStaff;
import com.example.bloodbank.Repository.IComplainRepository;
import com.example.bloodbank.Service.IComplainService;

@Service
public class ComplainService implements IComplainService {
	private IComplainRepository _complainRepository;
	
	ComplainService(IComplainRepository complainRepository){this._complainRepository = complainRepository;}
	
	@Override
	public List<Complains> getAll() {
		return _complainRepository.findAll();
	}
	
	@Override
    public Complains getById(Long id) {
        return _complainRepository.findById(id).orElseGet(null);
    }

    @Override
    public Complains create(Complains entity) {return _complainRepository.save(entity);}

    @Override
    public Complains update(Complains entity) {
    	Complains oldComplains = getById(entity.getId());

    	oldComplains.setBloodDonor(entity.getBloodDonor());
    	oldComplains.setBloodBank(entity.getBloodBank());
    	oldComplains.setDescription(entity.getDescription());
    	oldComplains.setResponse(entity.getResponse());
    	oldComplains.setSystemAdministrator(entity.getSystemAdministrator());
    	
    	return _complainRepository.save(oldComplains);
    }

    @Override
    public void delete(Long entityId) {

    }
}
