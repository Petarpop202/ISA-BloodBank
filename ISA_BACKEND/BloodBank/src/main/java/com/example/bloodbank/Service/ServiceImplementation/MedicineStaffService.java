package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Model.MedicineStaff;
import com.example.bloodbank.Model.Role;
import com.example.bloodbank.Model.User;
import com.example.bloodbank.Repository.IMedicineStaffRepository;
import com.example.bloodbank.Repository.IUserRepository;
import com.example.bloodbank.Service.IMedicineStaffService;
import com.example.bloodbank.Service.IRoleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MedicineStaffService implements IMedicineStaffService {

    private IMedicineStaffRepository _medicineStaffRepository;
    private IRoleService _roleService;

    MedicineStaffService(IMedicineStaffRepository medicineStaffRepository, IRoleService roleService){_medicineStaffRepository = medicineStaffRepository; _roleService = roleService;}
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Override
    public List<MedicineStaff> getAll() {
        return _medicineStaffRepository.findAll();
    }

    @Override
    public MedicineStaff getById(Long id) {
        return _medicineStaffRepository.findById(id).orElseGet(null);
    }
    @Override
    public MedicineStaff create(MedicineStaff entity) {
    	entity.setPassword(passwordEncoder.encode(entity.getPassword()));    	
    	entity.setEnabled(true);
    	Role roles1 = _roleService.findByName("ROLE_MEDICALWORKER");
        List<Role> r = new ArrayList<>();
        r.add(roles1);
        entity.setRoles(r);
        return _medicineStaffRepository.save(entity);
    }

    @Override
    public MedicineStaff update(MedicineStaff entity) {
        MedicineStaff oldMedicineStaff = getById(entity.getId());

        oldMedicineStaff.setName(entity.getName());
        oldMedicineStaff.setSurname(entity.getSurname());
        oldMedicineStaff.setGender(entity.getGender());
        oldMedicineStaff.setUsername(entity.getUsername());
        oldMedicineStaff.setPassword(entity.getPassword());
        oldMedicineStaff.setJmbg(entity.getJmbg());
        oldMedicineStaff.setMail(entity.getMail());
        oldMedicineStaff.setPhoneNumber(entity.getPhoneNumber());
        oldMedicineStaff.setAddress(entity.getAddress());
        return _medicineStaffRepository.save(oldMedicineStaff);
    }

    @Override
    public void delete(Long entityId) {
        _medicineStaffRepository.delete(getById(entityId));
    }

    @Override
    public List<MedicineStaff> getMedicineStaffFromBloodBank(Long Id) {
        List<MedicineStaff> medicineStaffs = new ArrayList<MedicineStaff>();

        for(MedicineStaff person: getAll()){
            if(person.getBloodBank().getId() == Id){
                medicineStaffs.add(person);
            }
        }

        return  medicineStaffs;
    }
}
