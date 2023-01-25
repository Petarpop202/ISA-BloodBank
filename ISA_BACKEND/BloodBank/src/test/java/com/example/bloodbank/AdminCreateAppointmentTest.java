package com.example.bloodbank;

import com.example.bloodbank.Model.BloodBank;
import com.example.bloodbank.Model.BloodDonationAppointment;
import com.example.bloodbank.Service.ServiceImplementation.BloodBankService;
import com.example.bloodbank.Service.ServiceImplementation.BloodDonationAppointmentService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminCreateAppointmentTest {

    @Autowired
    private BloodDonationAppointmentService bloodDonationAppointmentService;

    @Autowired
    private BloodBankService bloodBankService;

    @Before
    public void setUp() throws Exception {
        BloodBank newBank = new BloodBank();
        newBank.setId(1L);
        newBank.setWorkTimeStart(LocalTime.of(6, 0, 0));
        newBank.setWorkTimeEnd(LocalTime.of(20, 0, 0));
        bloodBankService.create(newBank);

    }

    @Test(expected = ObjectOptimisticLockingFailureException.class)
    public void testOptimisticLockingScenario() throws Throwable {

        ExecutorService executor = Executors.newFixedThreadPool(2);
        Future<?> future1 = executor.submit(new Runnable() {

            @Override
            public void run() {
                System.out.println("Startovan Thread 1");

                BloodDonationAppointment bda = new BloodDonationAppointment();
                bda.setId(2L);
                bda.setStartDateTime(LocalDateTime.of(2023, 4, 11, 11, 10, 0));
                bda.setBloodBank(bloodBankService.getById(1L));
                bda.setDuration(30);
                bda.setFree(true);

                try { Thread.sleep(3000); } catch (InterruptedException e) {}
                bloodDonationAppointmentService.create(bda);

            }
        });
        executor.submit(new Runnable() {

            @Override
            public void run() {
                System.out.println("Startovan Thread 2");

                BloodDonationAppointment bda = new BloodDonationAppointment();
                bda.setId(2L);
                bda.setStartDateTime(LocalDateTime.of(2023, 4, 11, 11, 10, 0));
                bda.setBloodBank(bloodBankService.getById(1L));
                bda.setDuration(30);
                bda.setFree(true);

                bloodDonationAppointmentService.create(bda);
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
