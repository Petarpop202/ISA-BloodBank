package com.example.bloodbank;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.bloodbank.Model.BloodBank;
import com.example.bloodbank.Model.BloodDonationAppointment;
import com.example.bloodbank.Service.ServiceImplementation.BloodBankService;
import com.example.bloodbank.Service.ServiceImplementation.BloodDonationAppointmentService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ScheduleAppointmentsTest {
	
	
	@Autowired
	private BloodDonationAppointmentService bloodDonationAppointmentService;
    
	@Autowired
	private BloodBankService bloodBankService;
	
	@Before
	public void setUp() throws Exception {
		BloodBank bloodBank = new BloodBank();
		bloodBank.setWorkTimeStart(LocalTime.of(8, 0, 0));
		bloodBank.setWorkTimeEnd(LocalTime.of(16, 0, 0));
		bloodBankService.create(bloodBank);
		
		BloodDonationAppointment bda = new BloodDonationAppointment();
		bda.setId(1L);
		bda.setStartDateTime(LocalDateTime.of(2023, 2, 20, 12, 15, 0));
		bda.setBloodBank(bloodBank);
		bda.setDuration(30);
		bda.setFree(true);
		
		bloodDonationAppointmentService.create(bda);
	}

	@Test(expected = ObjectOptimisticLockingFailureException.class)
	public void testOptimisticLockingScenario() throws Throwable {	

		ExecutorService executor = Executors.newFixedThreadPool(2);
		Future<?> future1 = executor.submit(new Runnable() {
			
			@Override
			public void run() {
		        System.out.println("Startovan Thread 1");
				BloodDonationAppointment bda1 = bloodDonationAppointmentService.getById(1L);
				bda1.setDuration(20);
				try { Thread.sleep(3000); } catch (InterruptedException e) {}
				bloodDonationAppointmentService.update(bda1);
				
			}
		});
		executor.submit(new Runnable() {
			
			@Override
			public void run() {
		        System.out.println("Startovan Thread 2");
		        BloodDonationAppointment bda1 = bloodDonationAppointmentService.getById(1L);
		        bda1.setDuration(40);
		        bloodDonationAppointmentService.update(bda1);
			}
		});
		try {
		    future1.get();
		} catch (ExecutionException e) {
		    System.out.println("Exception from thread " + e.getCause().getClass());
		    throw e.getCause();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		executor.shutdown();
	}
}
