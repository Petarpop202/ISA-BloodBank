import { Address } from "./address";

export class SystemAdministrator {
    id: string = '';
    name : string = '';
    surname : string = '';
    mail : string = '';
    username : string = '';
    password : string = '';
    phoneNumber : string = '';
    jmbg : string = '';
    gender : string = '';
    adress : Address = new Address();

}