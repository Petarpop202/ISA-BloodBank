package com.example.bloodbank.Service;

import com.example.bloodbank.Model.MedicineStaff;

import java.util.List;

public interface IMedicineStaffService extends ICRUDService<MedicineStaff>{

    List<MedicineStaff> getMedicineStaffFromBloodBank(Long Id);
}
