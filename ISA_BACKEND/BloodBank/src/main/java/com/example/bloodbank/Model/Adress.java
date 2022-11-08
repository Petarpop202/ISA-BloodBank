package com.example.bloodbank.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Adresses")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Adress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long Id;
    @Column
    private String Country;
    @Column
    private String City;
    @Column
    private String Street;
    @Column
    private String StreetNum;
}
