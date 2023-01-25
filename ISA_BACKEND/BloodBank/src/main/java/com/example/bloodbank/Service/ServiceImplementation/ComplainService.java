package com.example.bloodbank.Service.ServiceImplementation;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import javax.mail.MessagingException;

import org.springframework.stereotype.Service;

import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Model.Complains;
import com.example.bloodbank.Model.MailDetails;
import com.example.bloodbank.Model.MedicineStaff;
import com.example.bloodbank.Model.SystemAdministrator;
import com.example.bloodbank.Model.User;
import com.example.bloodbank.Repository.IComplainRepository;
import com.example.bloodbank.Service.IComplainService;
import com.example.bloodbank.Service.IEmailService;
import com.example.bloodbank.Service.ISystemAdministratorService;
import com.example.bloodbank.Service.IUserService;

@Service
public class ComplainService implements IComplainService {
	private IComplainRepository _complainRepository;
	private ISystemAdministratorService _systemAdministratorService;
	private IUserService _userService;
	private IEmailService _emailService;
	
	ComplainService(IComplainRepository complainRepository, ISystemAdministratorService systemAdministratorService, IUserService userService, IEmailService emailService){this._complainRepository = complainRepository; this._systemAdministratorService = systemAdministratorService; this._userService = userService; this._emailService = emailService;}
	
	@Override
	public List<Complains> getAll() {
		return _complainRepository.findAll();
	}
	
	@Override
    public Complains getById(Long id) {
        return _complainRepository.findById(id).orElseGet(null);
    }

    @Override
    public Complains create(Complains entity) {return _complainRepository.save(entity);}

    @Override
    public Complains update(Complains entity) {
    	Complains oldComplains = getById(entity.getId());

    	oldComplains.setBloodDonor(entity.getBloodDonor());
    	oldComplains.setBloodBank(entity.getBloodBank());
    	oldComplains.setDescription(entity.getDescription());
    	oldComplains.setResponse(entity.getResponse());
    	oldComplains.setSystemAdministrator(entity.getSystemAdministrator());
    	
    	return _complainRepository.save(oldComplains);
    }

    @Override
    public void delete(Long entityId) {

    }
    
    public Complains updateResponse(long complainId, String response) {
    	Complains oldComplains = getById(complainId);
    	oldComplains.setResponse(response);
    	return _complainRepository.save(oldComplains);
    }
    
    public Complains updateSystemAdministrator(long complainId, long adminId, long userId) {
    	Complains oldComplains = getById(complainId);
    	SystemAdministrator admin = _systemAdministratorService.getById(adminId);  
    	User user =_userService.getById(userId);
    	oldComplains.setSystemAdministrator(admin);
    	
//    	MailDetails mail = new MailDetails();
//		mail.setRecipient(user.getMail());
//		mail.setSubject("ODGOVOR NA ZALBU");
//		mail.setMsgBody("Administrator " + admin.getName() + " " + admin.getSurname() + " je odgovorio na vasu zalbu.");
//		mail.setMsgBody(oldComplains.getResponse());		
		
		ExecutorService executor = Executors.newFixedThreadPool(2);
        Future<?> future = executor.submit(new Runnable() {
            @Override
            public void run() {
                    MailDetails mail = new MailDetails();
                    mail.setRecipient(user.getMail());
                    mail.setSubject("ODGOVOR NA ZALBU");
            		mail.setMsgBody("Administrator " + admin.getName() + " " + admin.getSurname() + " je odgovorio na vasu zalbu.\n\n"
            					+ oldComplains.getResponse());
            		//mail.setMsgBody(oldComplains.getResponse());
                try {
                    _emailService.sendSimpleMail(mail);
                } catch (MessagingException e) {
                    throw new RuntimeException(e);
                } catch (UnsupportedEncodingException e) {
                    throw new RuntimeException(e);
                }
            }
        });
		
//		try {
//			_emailService.sendSimpleMail(mail);
//		} catch (UnsupportedEncodingException e) {			
//			e.printStackTrace();
//		} catch (MessagingException e) {			
//			e.printStackTrace();
//		}
    	
    	return _complainRepository.save(oldComplains);
    }
}
