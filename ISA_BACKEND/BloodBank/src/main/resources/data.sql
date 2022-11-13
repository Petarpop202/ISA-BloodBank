insert into addresses (city, country, street, street_num) values ('Novi Sad', 'Srbija', 'Ulica 1', '11');
insert into addresses (city, country, street, street_num) values ('Novi Sad', 'Srbija', 'Ulica 2', '22');
insert into addresses (city, country, street, street_num) values ('Beograd', 'Srbija', 'Ulica 3', '33');
insert into addresses (city, country, street, street_num) values ('Beograd', 'Srbija', 'Ulica 4', '44');
insert into addresses (city, country, street, street_num) values ('Niš', 'Srbija', 'Ulica 5', '55');

insert into users (name, surname, gender, username, password, jmbg, mail, phone_number, address_id) values ('Danilo', 'Bulatović', 0, 'Danilo123', 'danilo', '123456789123', 'danilo@gmail.com', '065/123-456', 1);
insert into users (name, surname, gender, username, password, jmbg, mail, phone_number, address_id) values ('Đorđe', 'Lipovčić', 0, 'plaoludastruja', 'pls', '123456789123', 'pls@gmail.com', '065/123-456', 2);

insert into blood_banks (name, address_id, description, average_grade, blood) values ('Kul Banka Krvi', 3, 'Kul opis', 5, 'AB');
insert into blood_banks (name, address_id, description, average_grade, blood) values ('Losa Banka Krvi', 4, 'Los opis', 1, 'A');

insert into blood_donors (category, loyality_points, penalty_points, id) values (0, 0, 0, 1);
insert into medicine_staffs (blood_bank_id, id) values (1, 2);

insert into blood_donation_appointments (date,blood_bank_id) values ('12.12.2022.', 1);
insert into blood_donation_appointments_medicine_staffs (blood_donation_appointment_id, medicine_staffs_id) values (1, 2);