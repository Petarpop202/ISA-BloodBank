package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.BloodDonationAppointment;
import com.example.bloodbank.Model.CenterVisit;
import com.example.bloodbank.Model.DonorSurvey;
import com.example.bloodbank.Repository.IBloodDonationAppointmentRepository;
import com.example.bloodbank.Repository.IBloodDonorRepository;
import com.example.bloodbank.Repository.ICenterVisitRepository;
import com.example.bloodbank.Repository.IDonorSurveyRepository;
import com.example.bloodbank.Service.IBloodDonationAppointmentService;
import com.example.bloodbank.Service.ICenterVisitService;
import com.example.bloodbank.Service.IDonorSurveyService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CenterVisitService implements ICenterVisitService {

    private ICenterVisitRepository _centerVisitRepostiory;
    private IDonorSurveyRepository _surveyRepository;
    private IBloodDonationAppointmentService _bloodDonatingAppointment;

    public CenterVisitService(ICenterVisitRepository centerVisitRepository, IDonorSurveyRepository donorSurveyRepository,IBloodDonationAppointmentService _bloodDonatingAppointment ){
        _centerVisitRepostiory = centerVisitRepository;
        _surveyRepository = donorSurveyRepository;
        this._bloodDonatingAppointment = _bloodDonatingAppointment;
    }
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
        for(DonorSurvey ds : _surveyRepository.findAll()){
            if(ds.getBloodDonor().getId() == entity.getBloodDonor().getId())
                return _centerVisitRepostiory.save(entity);
        }
        return null;
    }

    @Override
    public CenterVisit update(CenterVisit entity) {
        BloodDonationAppointment bda = _bloodDonatingAppointment.getById(entity.getBloodDonationAppointment().getId());
        bda.setFree(true);
        _bloodDonatingAppointment.update(bda);
        CenterVisit oldEntity = getById(entity.getId());
        oldEntity.setCanceled(entity.isCanceled());
        return _centerVisitRepostiory.save(oldEntity);
    }

    @Override
    public void delete(Long entityId) {

    }

    public List<CenterVisit> getAllByBloodDonorId(Long id) {
        List<CenterVisit> newList = new ArrayList<CenterVisit>();
        for(CenterVisit cv : _centerVisitRepostiory.findAll()){
            if(cv.getBloodDonor().getId() == id && !cv.isCanceled())
                newList.add(cv);
        }
        return newList;
    }
}
