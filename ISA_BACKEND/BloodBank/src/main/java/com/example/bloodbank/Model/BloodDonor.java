package com.example.bloodbank.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "BloodDonors")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BloodDonor extends User{
    @Column
    private int PenaltyPoints;
    @Column
    private int LoyalityPoints;
    @Column
    private CategoryType Category;
}
