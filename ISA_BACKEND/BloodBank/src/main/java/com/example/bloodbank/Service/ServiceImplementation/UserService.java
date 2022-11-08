package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.User;
import com.example.bloodbank.Repository.IUserRepository;
import com.example.bloodbank.Service.IUserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    private IUserRepository _userRepository;

    UserService(IUserRepository userRepository){_userRepository = userRepository;}

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
    public User update(User entity) {
        return null;
    }

    @Override
    public void delete(Long entityId) {

    }
}
