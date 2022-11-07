package com.example.bloodbank.Model;

import javax.persistence.*;

@Entity
@Table(name = "Tests")
public class Test {
    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private String Id;
    private String Name;

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }
}
