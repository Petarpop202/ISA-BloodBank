package com.example.bloodbank.Service;

import com.example.bloodbank.Model.Test;
import com.example.bloodbank.Repository.ITestRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ITestService {
    public List<Test> getAll();
}
