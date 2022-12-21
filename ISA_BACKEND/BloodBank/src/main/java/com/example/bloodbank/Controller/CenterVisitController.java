package com.example.bloodbank.Controller;

import com.example.bloodbank.Dto.VisitCenterDto;
import com.example.bloodbank.Model.BloodDonationAppointment;
import com.example.bloodbank.Model.CenterVisit;
import com.example.bloodbank.Model.MailDetails;
import com.example.bloodbank.Service.ServiceImplementation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.List;

@RestController
@RequestMapping("centerVisit")
@CrossOrigin(origins = "http://localhost:4200")
public class CenterVisitController {

    private CenterVisitService _centerVisitService;
    private BloodDonorService _userService;
    private BloodDonationAppointmentService _bloodDonationAppointmentService;
    @Autowired
    private EmailService _emailService;

    public CenterVisitController(CenterVisitService centerVisitService,BloodDonorService userService, BloodDonationAppointmentService bloodDonationAppointmentService){
        _centerVisitService = centerVisitService;
        _userService = userService;
        _bloodDonationAppointmentService = bloodDonationAppointmentService;
    }

    @GetMapping("/get")
    public List<CenterVisit> getAll(){
        return (List<CenterVisit>) _centerVisitService.getAll();
    }

    @GetMapping(value = "/get/{id}")
    public CenterVisit getCenterVisitById(@PathVariable Long id){
        return _centerVisitService.getById(id);
    }

    @GetMapping(value = "/getByDonor/{id}")
    public List<CenterVisit> getCenterVisitByDonorId(@PathVariable Long id){
        return _centerVisitService.getAllByBloodDonorId(id);
    }

    @PutMapping(value = "/delete")
    public CenterVisit cancelVisit(@RequestBody VisitCenterDto newBloodDonationAppointment){
        CenterVisit cv = new CenterVisit();
        cv.setBloodDonor(_userService.getById(newBloodDonationAppointment.getDonorId()));
        cv.setBloodDonationAppointment(_bloodDonationAppointmentService.getById(newBloodDonationAppointment.getAppointmentId()));
        cv.setCanceled(true);
        return _centerVisitService.update(cv);
    }

    @PostMapping("/new")
    @PreAuthorize("hasRole('ROLE_DONOR')")
    CenterVisit CreateBloodDonationAppointment(@RequestBody VisitCenterDto newBloodDonationAppointment) throws MessagingException, UnsupportedEncodingException {
        CenterVisit cv = new CenterVisit();
        cv.setBloodDonor(_userService.getById(newBloodDonationAppointment.getDonorId()));
        cv.setBloodDonationAppointment(_bloodDonationAppointmentService.getById(newBloodDonationAppointment.getAppointmentId()));
        cv.setPrice(newBloodDonationAppointment.getPrice());
        BloodDonationAppointment bda = _bloodDonationAppointmentService.getById(newBloodDonationAppointment.getAppointmentId());
        bda.setFree(false);
        CenterVisit center = _centerVisitService.create(cv);
        if(center != null) {
            MailDetails newMail = new MailDetails();
            newMail.setRecipient(cv.getBloodDonor().getMail());
            newMail.setMsgBody("Uspesno zakazan termin !");
            newMail.setSubject("Zakazivanje termina !");
            _emailService.sendSimpleMail(newMail);
            _bloodDonationAppointmentService.update(bda);
            return center;
        }
        return null;
    }

}
