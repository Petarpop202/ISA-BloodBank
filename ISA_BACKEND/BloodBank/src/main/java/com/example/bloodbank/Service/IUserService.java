package com.example.bloodbank.Service;

import com.example.bloodbank.Dto.UserRequest;
import com.example.bloodbank.Model.User;

public interface IUserService extends ICRUDService<User>{
    User findByUsername(String username);
    User save(UserRequest userRequest);
    User getByVerificationCode(String code);
    User activate(User u);
}
