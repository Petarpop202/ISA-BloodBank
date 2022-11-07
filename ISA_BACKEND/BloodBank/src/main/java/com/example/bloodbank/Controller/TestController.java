package com.example.bloodbank.Controller;

import com.example.bloodbank.Model.Test;
import com.example.bloodbank.Service.TestService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("test")
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {

    private TestService assetService;

    public TestController(@Qualifier("firstService") TestService assetService) {
        this.assetService = assetService;
    }
    @GetMapping("/get")
    public List<Test> getAll(){
        return assetService.getAll();
    }
}
