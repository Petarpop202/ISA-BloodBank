insert into addresses (city, country, street, street_num) values ('Novi Sad', 'Srbija', 'Ulica 1', '11');
insert into addresses (city, country, street, street_num) values ('Novi Sad', 'Srbija', 'Ulica 2', '22');
insert into addresses (city, country, street, street_num) values ('Beograd', 'Srbija', 'Ulica 3', '33');
insert into addresses (city, country, street, street_num) values ('Beograd', 'Srbija', 'Ulica 4', '44');
insert into addresses (city, country, street, street_num) values ('Niš', 'Srbija', 'Ulica 5', '55');

insert into users (name, surname, gender, username, password, jmbg, mail, phone_number, adress_id) values ('Danilo', 'Bulatović', 0, 'Danilo123', 'danilo', '123456789123', 'danilo@gmail.com', '065/123-456', 1);

insert into blood_donors (category, loyality_points, penalty_points, id) values (0, 0, 0, 1);

insert into blood_banks (name, description, average_grade, blood, free_termin, adress_id) values ('Banka 1', 'Opis 1', 4.6, 'A+', '2022-11-20 15:00:00', 2);
insert into blood_banks (name, description, average_grade, blood, free_termin, adress_id) values ('Banka 2', 'Opis 2', 3.2, 'B+', '2022-11-15 10:00:00', 3);
insert into blood_banks (name, description, average_grade, blood, free_termin, adress_id) values ('Banka 3', 'Opis 3', 4.1, 'AB+', '2022-11-25 11:00:00', 3);
insert into blood_banks (name, description, average_grade, blood, free_termin, adress_id) values ('Banka 4', 'Opis 4', 2.9, 'O+', '2022-12-01 09:00:00', 4);
insert into blood_banks (name, description, average_grade, blood, free_termin, adress_id) values ('Banka 5', 'Opis 5', 3.8, 'A-', '2022-12-14 14:00:00', 5);