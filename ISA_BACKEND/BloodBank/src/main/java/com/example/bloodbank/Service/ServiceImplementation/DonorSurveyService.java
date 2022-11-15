package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.DonorSurvey;
import com.example.bloodbank.Repository.IDonorSurveyRepository;
import com.example.bloodbank.Service.IDonorSurveyService;
import org.springframework.stereotype.Service;

@Service
public class DonorSurveyService implements IDonorSurveyService {

    private IDonorSurveyRepository _donorRepository;

    DonorSurveyService(IDonorSurveyRepository donorRepository){_donorRepository = donorRepository;}

    @Override
    public Iterable<DonorSurvey> getAll() {
        return _donorRepository.findAll();
    }

    @Override
    public DonorSurvey getById(Long id) {
        return null;
    }

    @Override
    public DonorSurvey create(DonorSurvey entity) {
        return _donorRepository.save(entity);
    }

    @Override
    public DonorSurvey update(DonorSurvey entity) {
        return null;
    }

    @Override
    public void delete(Long entityId) {

    }
}
