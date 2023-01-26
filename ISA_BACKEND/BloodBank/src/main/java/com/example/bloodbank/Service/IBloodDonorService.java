package com.example.bloodbank.Service;

import java.util.List;

import com.example.bloodbank.Model.BloodDonor;

public interface IBloodDonorService extends ICRUDService<BloodDonor>{
    public boolean isUnique(BloodDonor newUser);
    public boolean isUniqueOnEdit(BloodDonor newUser);
    public List<BloodDonor> findByNameAndSurname(String name, String surname);
}
