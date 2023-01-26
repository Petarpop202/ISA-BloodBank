import { Address } from "./address";

export class SystemAdministrator {
    id: string = '';
    name : string = '';
    surname : string = '';
    mail : string = '';
    username : string = '';
    password : string = '';
    lastPasswordResetDate: string = '';
    phoneNumber : string = '';
    jmbg : string = '';
    gender : string = '';    
    address : Address = new Address();

}