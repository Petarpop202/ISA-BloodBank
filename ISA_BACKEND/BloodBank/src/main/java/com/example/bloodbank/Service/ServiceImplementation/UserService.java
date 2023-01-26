package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Dto.UserRequest;
import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Model.MedicineStaff;
import com.example.bloodbank.Model.Role;
import com.example.bloodbank.Model.User;
import com.example.bloodbank.Repository.IUserRepository;
import com.example.bloodbank.Service.IRoleService;
import com.example.bloodbank.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements IUserService {
    private IUserRepository _userRepository;
    private IRoleService _roleService;

    UserService(IUserRepository userRepository,IRoleService roleService){_userRepository = userRepository;_roleService = roleService;}
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<User> getAll() {
        return _userRepository.findAll();
    }

    @Override
    public User getById(Long id) {
        return _userRepository.findById(id).orElseGet(null);
    }
    @Override
    public User create(User entity) {
        return _userRepository.save(entity);
    }
    @Override
    public User findByUsername(String username){return _userRepository.findByUsername(username);}

    @Override
    public User update(User entity) {
        User oldMedicineStaff = getById(entity.getId());
        oldMedicineStaff.setPassword(entity.getPassword());
        return _userRepository.save(oldMedicineStaff);
    }

    @Override
    public void delete(Long entityId) {
    }
    @Override
    public User save(UserRequest userRequest) {

        //User u = new User();
        BloodDonor u = new BloodDonor();
        u.setUsername(userRequest.getUsername());
        // pre nego sto postavimo lozinku u atribut hesiramo je kako bi se u bazi nalazila hesirana lozinka
        // treba voditi racuna da se koristi isi password encoder bean koji je postavljen u AUthenticationManager-u kako bi koristili isti algoritam
        u.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        u.setName(userRequest.getName());
        u.setSurname(userRequest.getSurname());
        u.setEnabled(false);
        u.setVerificationCode(userRequest.getVerification());
        u.setAddress(userRequest.getAddress());
        u.setJmbg(userRequest.getJmbg());
        u.setGender(userRequest.getGender());
        u.setMail(userRequest.getMail());
        u.setPhoneNumber(userRequest.getPhoneNumber());
        // u primeru se registruju samo obicni korisnici i u skladu sa tim im se i dodeljuje samo rola USER
        Role roles1 = _roleService.findByName("ROLE_DONOR");
        List<Role> r = new ArrayList<>();
        r.add(roles1);
        u.setRoles(r);

        return this._userRepository.save(u);
    }
    @Override
    public User getByVerificationCode(String code){
        for(User u : _userRepository.findAll()){
            if(u.getVerificationCode() != null)
            if(u.getVerificationCode().compareTo(code) == 0)
                return u;
        }
        return null;
    }
    @Override
    public User activate(User u){
        User old = getById(u.getId());
        old.setEnabled(true);
        //update(u);
        return _userRepository.save(old);
    }
}
