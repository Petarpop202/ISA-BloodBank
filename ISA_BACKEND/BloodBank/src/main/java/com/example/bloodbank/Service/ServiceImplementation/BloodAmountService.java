package com.example.bloodbank.Service.ServiceImplementation;

import com.example.bloodbank.Model.BloodAmount;
import com.example.bloodbank.Model.BloodBank;
import com.example.bloodbank.Model.BloodType;
import com.example.bloodbank.Repository.IBloodAmountRepository;
import com.example.bloodbank.Repository.IBloodBankRepository;
import com.example.bloodbank.Service.IBloodAmountService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class BloodAmountService implements IBloodAmountService {

    private IBloodBankRepository bloodBankRepo;
    private IBloodAmountRepository bloodAmountRepository;

    BloodAmountService(IBloodAmountRepository bloodAmountRepository){
        this.bloodAmountRepository = bloodAmountRepository;
    }


    @Override
    public List<BloodAmount> getAll() {
        List<BloodType> result = Arrays.asList(BloodType.values());
        return bloodAmountRepository.findAll();
    }

    @Override
    public BloodAmount getById(Long id) {
        return null;
    }

    @Override
    public BloodAmount create(BloodAmount entity) {
        return null;
    }

    @Override
    public BloodAmount update(BloodAmount entity) {
        return null;
    }

    @Override
    public void delete(Long entityId) {

    }

    public List<BloodAmount> getAllByBloodBank(Long bloodBankId) {
        List<BloodAmount> bloodAmounts = new ArrayList<BloodAmount>();
        for (BloodAmount ba:getAll()) {
            if (ba.getBloodBank().getId() == bloodBankId){
                bloodAmounts.add(ba);
            }
        }
        return bloodAmounts;
    }

    public List<BloodType> getAllBloodTypes() {
        List<BloodType> result = Arrays.asList(BloodType.values());
        return result;
    }

    public BloodAmount addBloodDonation(BloodAmount newBloodAmount) {
        List<BloodAmount> bloodAmounts = getAllByBloodBank(newBloodAmount.getBloodBank().getId());
        for (BloodAmount ba:bloodAmounts) {
            if (ba.getBloodType().equals(newBloodAmount.getBloodType())){
                ba.setAmount(ba.getAmount() + newBloodAmount.getAmount());
                return bloodAmountRepository.save(ba);
            }
        }
        return bloodAmountRepository.save(newBloodAmount);
    }
}
