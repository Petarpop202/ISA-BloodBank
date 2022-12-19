package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Dto.UserRequest;
import com.example.bloodbank.Model.Role;
import com.example.bloodbank.Model.User;
import com.example.bloodbank.Repository.IUserRepository;
import com.example.bloodbank.Service.IRoleService;
import com.example.bloodbank.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
        return null;
    }

    @Override
    public void delete(Long entityId) {
    }
    @Override
    public User save(UserRequest userRequest) {
        User u = new User();
        u.setUsername(userRequest.getUsername());

        // pre nego sto postavimo lozinku u atribut hesiramo je kako bi se u bazi nalazila hesirana lozinka
        // treba voditi racuna da se koristi isi password encoder bean koji je postavljen u AUthenticationManager-u kako bi koristili isti algoritam
        u.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        u.setName(userRequest.getFirstname());
        u.setSurname(userRequest.getLastname());
        u.setEnabled(true);
        //u.setEmail(userRequest.getEmail());

        // u primeru se registruju samo obicni korisnici i u skladu sa tim im se i dodeljuje samo rola USER
        Role roles = _roleService.findByName("ROLE_USER");
        u.setRole(roles);

        return this._userRepository.save(u);
    }
}
