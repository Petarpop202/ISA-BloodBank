import { BloodBank } from "./bloodBank";
import { BloodDonor } from "./bloodDonor";
import { SystemAdministrator } from "./systemAdministrator";

export class Complains {
    id: string = '';
    bloodDonor: BloodDonor = new BloodDonor;
    bloodBank: BloodBank = new BloodBank;
    description: string = '';
    response: string = '';
    systemAdministrator: SystemAdministrator = new SystemAdministrator;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.bloodDonor = obj.bloodDonor;
            this.bloodBank = obj.bloodBank;
            this.description = obj.description;
            this.response = obj.response;
            this.systemAdministrator = obj.systemAdministrator;
        }
    }
}