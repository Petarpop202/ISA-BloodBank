package com.example.bloodbank.Service;

import com.example.bloodbank.Model.BloodDonor;

public interface IBloodDonorService extends ICRUDService<BloodDonor>{
    public boolean isUnique(BloodDonor newUser);
}
