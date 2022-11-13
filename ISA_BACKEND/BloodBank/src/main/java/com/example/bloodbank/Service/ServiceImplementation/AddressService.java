package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.Address;
import com.example.bloodbank.Repository.IAddressRepository;
import com.example.bloodbank.Service.IAddressService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService implements IAddressService {
    private IAddressRepository _addressRepository;

    AddressService(IAddressRepository adressRepository){this._addressRepository = adressRepository;}

    @Override
    public List<Address> getAll() {
        return _addressRepository.findAll();
    }

    @Override
    public Address getById(Long id) {
        return _addressRepository.findById(id).orElseGet(null);
    }

    @Override
    public Address create(Address entity) {return _addressRepository.save(entity);}

    @Override
    public Address update(Address entity) {
        return null;
    }

    @Override
    public void delete(Long entityId) {

    }
}
