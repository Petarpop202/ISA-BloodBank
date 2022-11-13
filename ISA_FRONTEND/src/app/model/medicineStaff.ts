import { Address } from "./address";

export class MedicineStaff {
    id: string = '';
    name: string = '';
    surname: string = '';
    mail: string = '';
    phoneNumber: string = '';
    jmbg: string = '';
    username: string = '';
    password: string = '';
    gender: string = '';
    address: Address = new Address;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
            this.surname = obj.surname;
            this.mail = obj.mail;
            this.phoneNumber = obj.phoneNumber;
            this.jmbg = obj.jmbg;
            this.username = obj.username;
            this.password = obj.password;
            this.gender = obj.gender;
            this.address = obj.address;
        }
    }
}