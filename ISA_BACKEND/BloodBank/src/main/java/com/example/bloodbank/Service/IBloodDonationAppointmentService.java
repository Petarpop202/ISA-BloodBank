package com.example.bloodbank.Service;

import com.example.bloodbank.Model.BloodDonationAppointment;

public interface IBloodDonationAppointmentService extends ICRUDService<BloodDonationAppointment> {
	 public boolean isAppointmentValid(BloodDonationAppointment appointment);
	 public boolean overlapsWithAnotherAppointment(BloodDonationAppointment appointment);
}
