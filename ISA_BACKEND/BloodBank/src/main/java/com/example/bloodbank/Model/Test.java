package com.example.bloodbank.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Tests")
public class Test {
    @Id
    @Getter @Setter
    private String Id;
    @Getter @Setter
    private String Name;

}
