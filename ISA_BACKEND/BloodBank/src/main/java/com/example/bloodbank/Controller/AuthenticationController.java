package com.example.bloodbank.Controller;

import com.example.bloodbank.Dto.JwtAuthenticationRequest;
import com.example.bloodbank.Dto.UserRequest;
import com.example.bloodbank.Dto.Jwt;
import com.example.bloodbank.Model.BloodDonor;
import com.example.bloodbank.Model.MailDetails;
import com.example.bloodbank.Model.User;
import com.example.bloodbank.Service.IUserService;
import com.example.bloodbank.Service.ServiceImplementation.EmailService;
import com.example.bloodbank.Util.TokenUtils;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.security.Principal;


//Kontroler zaduzen za autentifikaciju korisnika
@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {

	@Autowired
	private TokenUtils tokenUtils;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private IUserService userService;
	@Autowired
	EmailService _emailService;
	
	// Prvi endpoint koji pogadja korisnik kada se loguje.
	// Tada zna samo svoje korisnicko ime i lozinku i to prosledjuje na backend.
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/login")
	public ResponseEntity<Jwt> createAuthenticationToken(
			@RequestBody JwtAuthenticationRequest authenticationRequest, HttpServletResponse response) {
		// Ukoliko kredencijali nisu ispravni, logovanje nece biti uspesno, desice se
		// AuthenticationException
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
				authenticationRequest.getUsername(), authenticationRequest.getPassword()));

		// Ukoliko je autentifikacija uspesna, ubaci korisnika u trenutni security
		// kontekst
		SecurityContextHolder.getContext().setAuthentication(authentication);

		// Kreiraj token za tog korisnika
		User user = (User) authentication.getPrincipal();
		String jwt = tokenUtils.generateToken(user);
		int expiresIn = tokenUtils.getExpiredIn();

		// Vrati token kao odgovor na uspesnu autentifikaciju
		return ResponseEntity.ok(new Jwt(jwt, expiresIn));
	}

	// Endpoint za registraciju novog korisnika
	@PostMapping("/signup")
	public ResponseEntity<User> addUser(@RequestBody UserRequest userRequest, UriComponentsBuilder ucBuilder) throws MessagingException, UnsupportedEncodingException {
		User existUser = this.userService.findByUsername(userRequest.getUsername());

		if (existUser != null) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		String verification = RandomString.make();
		userRequest.setVerification(verification);
		User user = this.userService.save(userRequest);
		MailDetails mail = new MailDetails();
		mail.setRecipient(user.getMail());
		mail.setSubject("Verifikacija naloga !");
		mail.setMsgBody("http://localhost:8081/auth/activate?code=" + verification);
		_emailService.sendSimpleMail(mail);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

	@GetMapping("/activate")
	public ResponseEntity<User> activateUser(@Param("code") String id){
		User existUser = this.userService.getByVerificationCode(id);
		User u = userService.activate(existUser);
		return new ResponseEntity<>(u, HttpStatus.CREATED);
	}


	@GetMapping("/whoami")
	@PreAuthorize("hasAnyRole('ROLE_DONOR', 'ROLE_ADMIN')")
	public User user(Principal user) {
		return this.userService.findByUsername(user.getName());
	}
}