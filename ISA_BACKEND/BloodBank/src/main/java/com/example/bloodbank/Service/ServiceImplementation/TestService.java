package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.Test;
import com.example.bloodbank.Repository.ITestRepository;
import com.example.bloodbank.Service.ITestService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Qualifier("firstService")
public class TestService implements ITestService {
    private ITestRepository _repo;

    TestService(ITestRepository repo){
        _repo = repo;
    }
    public List<Test> getAll(){
        List<Test> all = _repo.findAll();
        return all;
    }
}
