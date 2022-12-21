insert into addresses (city, country, street, street_num) values ('Novi Sad', 'Srbija', 'Ulica 1', '11');
insert into addresses (city, country, street, street_num) values ('Novi Sad', 'Srbija', 'Ulica 2', '22');
insert into addresses (city, country, street, street_num) values ('Beograd', 'Srbija', 'Ulica 3', '33');
insert into addresses (city, country, street, street_num) values ('Beograd', 'Srbija', 'Ulica 4', '44');
insert into addresses (city, country, street, street_num) values ('Niš', 'Srbija', 'Ulica 5', '55');
insert into addresses (city, country, street, street_num) values ('Kraljevo', 'Srbija', 'Dositejeva', '14');

--Sifre su 123 !

insert into users (name, surname, gender, username, password, jmbg, enabled, mail, phone_number, address_id) values ('Danilo', 'Bulatović', 0, 'Danilo123', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '123456789123', true, 'petarpop2001@gmail.com', '065/123-456', 1);
insert into users (name, surname, gender, username, password, jmbg, enabled, mail, phone_number, address_id) values ('Đorđe', 'Lipovčić', 0, 'plaoludastruja', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '123456789123', true, 'pls@gmail.com', '065/123-456', 2);
insert into users (name, surname, gender, username, password, jmbg, enabled, mail, phone_number, address_id) values ('Đorđe1', 'Lipovčić1', 0, 'plaoludastruja1', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '123456789123', true, 'pls@gmail.com', '065/123-456', 3);
insert into users (name, surname, gender, username, password, jmbg, enabled, mail, phone_number, address_id) values ('Đorđe2', 'Lipovčić2', 0, 'plaoludastruja2', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '123456789123', true, 'pls@gmail.com', '065/123-456', 4);
insert into users (name, surname, gender, username, password, jmbg, enabled, mail, phone_number, address_id) values ('Stefan', 'Lepsanovic', 0, 'stefan', 'stefan', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', true, 'stefan@gmail.com', '065/123-456', 5);

insert into system_administrators (id) values (5);

insert into blood_banks (name, address_id, description, average_grade, blood, work_time_start, work_time_end) values ('Kul Banka Krvi', 3, 'Kul opis', 5, 'AB', '08:00:00', '16:00:00');
insert into blood_banks (name, address_id, description, average_grade, blood, work_time_start, work_time_end) values ('Losa Banka Krvi', 4, 'Los opis', 1, 'A', '10:00:00', '14:00:00');

insert into blood_donors (category, loyality_points, penalty_points, id) values (0, 0, 0, 1);
insert into blood_donors (category, loyality_points, penalty_points, id) values (0, 0, 0, 2);
insert into blood_donors (category, loyality_points, penalty_points, id) values (0, 0, 0, 3);
insert into blood_donors (category, loyality_points, penalty_points, id) values (0, 0, 0, 4);
insert into medicine_staffs (blood_bank_id, id) values (1, 2);
insert into medicine_staffs (blood_bank_id, id) values (1, 3);
insert into medicine_staffs (blood_bank_id, id) values (2, 4);

insert into blood_donation_appointments (start_date_time, duration, blood_bank_id, is_free) values ('12.12.2022. 12:00:00', 30, 1, true);
insert into blood_donation_appointments (start_date_time, duration, blood_bank_id, is_free) values ('12.11.2022. 10:40:00', 20, 1, true);
insert into blood_donation_appointments (start_date_time, duration, blood_bank_id, is_free) values ('11.11.2022. 13:15:00', 45, 2, true);
insert into blood_donation_appointments (start_date_time, duration, blood_bank_id, is_free) values ('12.12.2022. 12:00:00', 30, 2, true);

insert into blood_donation_appointments_medicine_staffs (blood_donation_appointment_id, medicine_staffs_id) values (1, 2);
insert into blood_donation_appointments_medicine_staffs (blood_donation_appointment_id, medicine_staffs_id) values (2, 3);
insert into blood_donation_appointments_medicine_staffs (blood_donation_appointment_id, medicine_staffs_id) values (3, 4);

INSERT INTO role (name) VALUES ('ROLE_DONOR');
INSERT INTO role (name) VALUES ('ROLE_MEDICALWORKER');
INSERT INTO role (name) VALUES ('ROLE_ADMIN');

INSERT INTO USER_ROLE (user_id, role_id) VALUES (1, 1); -- user-u dodeljujemo rolu DONOR
INSERT INTO USER_ROLE (user_id, role_id) VALUES (2, 2); -- user-u dodeljujemo rolu MW
INSERT INTO USER_ROLE (user_id, role_id) VALUES (3, 3); -- user-u dodeljujemo rolu ADMIN