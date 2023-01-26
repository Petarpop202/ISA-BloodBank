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

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
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
        for(CenterVisit cv : _centerVisitRepostiory.findAll()){
            if(cv.getBloodDonor() == entity.getBloodDonor())
                if(!cv.getBloodDonationAppointment().getStartDateTime().isBefore(entity.getBloodDonationAppointment().getStartDateTime().minusMonths(6)))
                    return null;
        }
        for(DonorSurvey ds : _surveyRepository.findAll()){
            if(ds.getBloodDonor().getId() == entity.getBloodDonor().getId())
                return _centerVisitRepostiory.save(entity);
        }
        return null;
    }

    @Override
    public CenterVisit update(CenterVisit entity) {
        BloodDonationAppointment bda = _bloodDonatingAppointment.getById(entity.getBloodDonationAppointment().getId());
        if(LocalDateTime.now().isBefore(bda.getStartDateTime().minusHours(24)) && LocalDateTime.now().isBefore(bda.getStartDateTime())){
        bda.setFree(true);
        _bloodDonatingAppointment.update(bda);
        CenterVisit oldEntity = getById(entity.getId());
        oldEntity.setCanceled(entity.isCanceled());
        return _centerVisitRepostiory.save(oldEntity);
        }
        else return null;
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
    
    public List<CenterVisit> getAllByBloodBankId(Long id) {
        return _centerVisitRepostiory.findAllByBloodDonationAppointmentBloodBankId(id);
    }

    public CenterVisit updateReport(Long id) {
        CenterVisit oldEntity = getById(id);
        oldEntity.setHasReport(true);
        return _centerVisitRepostiory.save(oldEntity);
    }

    public List<CenterVisit> getBloodDonorsToReportByBank(Long id) {
        List<CenterVisit> centerVisits =  new ArrayList<CenterVisit>();
        for (CenterVisit cv:getAllByBloodBankId(id)) {
            if (!cv.isHasReport()
                    && cv.getBloodDonationAppointment().getStartDateTime().isBefore(LocalDateTime.now()) ){
                centerVisits.add(cv);
            }
        }
        return centerVisits;
    }

    public CenterVisit didntShowAppointment(Long centerVisitId) {
        return  updateReport(centerVisitId);
    }
}
