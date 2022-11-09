package com.example.bloodbank.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "SystemAdministrators")
@AllArgsConstructor
@Getter
@Setter
public class SystemAdministrator extends User{
}
