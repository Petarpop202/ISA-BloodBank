package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.Adress;
import com.example.bloodbank.Repository.IAdressRepository;
import com.example.bloodbank.Service.IAdressService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdressService implements IAdressService {
    private IAdressRepository _adressRepository;

    AdressService(IAdressRepository adressRepository){this._adressRepository = adressRepository;}

    @Override
    public List<Adress> getAll() {
        return _adressRepository.findAll();
    }

    @Override
    public Adress getById(Long id) {
        return _adressRepository.findById(id).orElseGet(null);
    }

    @Override
    public Adress create(Adress entity) {return _adressRepository.save(entity);}

    @Override
    public Adress update(Adress entity) {
        return null;
    }

    @Override
    public void delete(Long entityId) {

    }
}
