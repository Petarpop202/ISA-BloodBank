package com.example.bloodbank.Service.ServiceImplementation;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.bloodbank.Model.BloodDonationAppointment;
import com.example.bloodbank.Repository.IBloodDonationAppointmentRepository;
import com.example.bloodbank.Service.IBloodDonationAppointmentService;

@Service
public class BloodDonationAppointmentService implements IBloodDonationAppointmentService {

	private IBloodDonationAppointmentRepository bloodDonationAppointmentRepo;

	BloodDonationAppointmentService(IBloodDonationAppointmentRepository bloodBankRepo){
        this.bloodDonationAppointmentRepo = bloodBankRepo;
    }
    
	@Override
	public List<BloodDonationAppointment> getAll() {
		return bloodDonationAppointmentRepo.findAll();
	}

	@Override
	public BloodDonationAppointment getById(Long id) {
		return bloodDonationAppointmentRepo.findById(id).orElseGet(null);
	}

	@Override
	public BloodDonationAppointment create(BloodDonationAppointment entity) {
		if (!isAppointmentValid(entity) || overlapsWithAnotherAppointment(entity)) 
			return null;
		return bloodDonationAppointmentRepo.save(entity);
	}

	@Override
	public BloodDonationAppointment update(BloodDonationAppointment entity) {
		BloodDonationAppointment oldBloodDonationAppointment = getById(entity.getId());

		oldBloodDonationAppointment.setStartDateTime(entity.getStartDateTime());
		oldBloodDonationAppointment.setDuration(entity.getDuration());
		oldBloodDonationAppointment.setMedicineStaffs(entity.getMedicineStaffs());
		return bloodDonationAppointmentRepo.save(oldBloodDonationAppointment);
	}

	@Override
	public void delete(Long entityId) {
		bloodDonationAppointmentRepo.delete(getById(entityId));
	}

	public List<BloodDonationAppointment> getAllByBloodBank(Long id){
		return bloodDonationAppointmentRepo.findAllByBloodBankId(id);
	}
	
	public List<BloodDonationAppointment> getAllByDateTime(LocalDateTime datetime){
		return bloodDonationAppointmentRepo.findAllByStartDateTime(datetime);
	}
	
	@Override
	public boolean isAppointmentValid(BloodDonationAppointment appointment) {
		
		LocalTime appointmentStart = appointment.getStartDateTime().toLocalTime();
		LocalTime appointmentEnd = appointment.getStartDateTime().plusMinutes(appointment.getDuration()).toLocalTime();
		
		LocalTime workStart = appointment.getBloodBank().getWorkTimeStart();
		LocalTime workEnd = appointment.getBloodBank().getWorkTimeEnd();
		
		if (appointmentStart.isAfter(workStart) && appointmentEnd.isBefore(workEnd))
			return true;
		
		return false;
	}
	
	@Override
	public boolean overlapsWithAnotherAppointment(BloodDonationAppointment appointment) {
		List<BloodDonationAppointment> appointments = getAllByBloodBank(appointment.getBloodBank().getId());
		
		LocalTime appointmentStart = appointment.getStartDateTime().toLocalTime();
		LocalTime appointmentEnd = appointment.getStartDateTime().plusMinutes(appointment.getDuration()).toLocalTime();
		
		for (BloodDonationAppointment app : appointments){
			LocalTime appStart = app.getStartDateTime().toLocalTime();
			LocalTime appEnd = app.getStartDateTime().plusMinutes(app.getDuration()).toLocalTime();
		
			if (appointmentStart.isBefore(appEnd) && appointmentEnd.isAfter(appStart) && app.getStartDateTime().toLocalDate().isEqual(appointment.getStartDateTime().toLocalDate()))
				return true;
		}
		return false;
	}
}
