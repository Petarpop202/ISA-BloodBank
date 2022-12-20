package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.CenterVisit;
import com.example.bloodbank.Repository.IBloodDonorRepository;
import com.example.bloodbank.Repository.ICenterVisitRepository;
import com.example.bloodbank.Service.ICenterVisitService;
import org.springframework.stereotype.Service;

@Service
public class CenterVisitService implements ICenterVisitService {

    private ICenterVisitRepository _centerVisitRepostiory;

    public CenterVisitService(ICenterVisitRepository centerVisitRepository){_centerVisitRepostiory = centerVisitRepository;}
    @Override
    public Iterable<CenterVisit> getAll() {
        return _centerVisitRepostiory.findAll();
    }

    @Override
    public CenterVisit getById(Long id) {
        return _centerVisitRepostiory.findById(id).orElseGet(null);
    }

    @Override
    public CenterVisit create(CenterVisit entity) {
        return _centerVisitRepostiory.save(entity);
    }

    @Override
    public CenterVisit update(CenterVisit entity) {
        return null;
    }

    @Override
    public void delete(Long entityId) {
    }
}
