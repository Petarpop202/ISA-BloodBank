package com.example.bloodbank.Dto;

// DTO koji enkapsulira generisani JWT i njegovo trajanje koji se vracaju klijentu
public class Jwt {
	
    private String jwt;

    public Jwt() {
        this.jwt = null;
    }

    public Jwt(String jwt, long expiresIn) {
        this.jwt = jwt;
    }
    public String getJwt() {
        return jwt;
    }
    public void setJwt(String accessToken) {
        this.jwt = accessToken;
    }

    
}