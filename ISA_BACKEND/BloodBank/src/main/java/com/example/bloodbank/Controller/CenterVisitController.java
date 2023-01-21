package com.example.bloodbank.Controller;

import com.example.bloodbank.Dto.VisitCenterDto;
import com.example.bloodbank.Model.BloodDonationAppointment;
import com.example.bloodbank.Model.CenterVisit;
import com.example.bloodbank.Model.MailDetails;
import com.example.bloodbank.Service.ServiceImplementation.*;
import com.example.bloodbank.Util.QRCodeGenerator;
import com.google.zxing.WriterException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.util.ByteArrayDataSource;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.time.format.DateTimeFormatter;
import java.util.Base64;
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
    
    @GetMapping(value = "/getByBank/{id}")
    public List<CenterVisit> getCenterVisitsByBankId(@PathVariable Long id){
        return _centerVisitService.getAllByBloodBankId(id);
    }

    @PutMapping(value = "/delete")
    public CenterVisit cancelVisit(@RequestBody VisitCenterDto newBloodDonationAppointment){
        CenterVisit cv = new CenterVisit();
        cv.setBloodDonor(_userService.getById(newBloodDonationAppointment.getDonorId()));
        cv.setBloodDonationAppointment(_bloodDonationAppointmentService.getById(newBloodDonationAppointment.getAppointmentId()));
        cv.setCanceled(true);
        cv.setId(newBloodDonationAppointment.getId());
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
        	String qrCode = generateQRCode(center);
        	
            MailDetails newMail = new MailDetails();
            newMail.setRecipient(cv.getBloodDonor().getMail());
            newMail.setMsgBody("Pozdrav " + cv.getBloodDonor().getName() +
            				"!<br>Vaš termin davanja krvi dana <b>" +
            				cv.getBloodDonationAppointment().getStartDateTime().toLocalDate().format(DateTimeFormatter.ofPattern("dd.MM.yyyy.")) +
            				"</b> u <b>"+ cv.getBloodDonationAppointment().getStartDateTime().toLocalTime().format(DateTimeFormatter.ofPattern("HH:mm")) +
            				"h</b> u banci krvi <b>" + cv.getBloodDonationAppointment().getBloodBank().getName() +
            				"</b> je uspešno zakazan.<br>");
            newMail.setSubject("Uspešno zakazivanje termina!");
            _emailService.sendMailWithImage(newMail, qrCode);
            _bloodDonationAppointmentService.update(bda);
            return center;
        }
        return null;
    }
    
    private String generateQRCode(CenterVisit center) {
    	String bloodDonor = center.getBloodDonor().getName() + ' ' + center.getBloodDonor().getSurname();
    	String bloodBank = center.getBloodDonationAppointment().getBloodBank().getName();
    	String date = center.getBloodDonationAppointment().getStartDateTime().toLocalDate().format(DateTimeFormatter.ofPattern("dd.MM.yyyy."));
    	String time = center.getBloodDonationAppointment().getStartDateTime().toLocalTime().format(DateTimeFormatter.ofPattern("HH:mm"));
    	String duration = String.valueOf(center.getBloodDonationAppointment().getDuration());
    	
    	String qrCodeText = "Termin davanja krvi: \n-Davalac: " + bloodDonor + 
    						"\n-Banka krvi: " + bloodBank +
    						"\n-Datum: " + date + 
    						"\n-Vreme: " + time + 
    						"\n-Trajanje: " + duration + " minuta";
    	
    	byte[] image = new byte[0];
        try {

            image = QRCodeGenerator.getQRCodeImage(qrCodeText,250,250);

        } catch (WriterException | IOException e) {
            e.printStackTrace();
        }
        return Base64.getEncoder().encodeToString(image);
    }

}
