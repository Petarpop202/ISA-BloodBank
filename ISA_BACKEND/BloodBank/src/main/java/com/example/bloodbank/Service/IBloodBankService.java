package com.example.bloodbank.Service;

import com.example.bloodbank.Model.BloodBank;
import com.example.bloodbank.Model.BloodDonor;

public interface IBloodBankService extends ICRUDService<BloodBank> {
	 public boolean isNameUnique(String name);
}
