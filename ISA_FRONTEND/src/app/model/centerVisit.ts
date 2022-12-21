import { BloodDonationAppointment } from "./bloodDonationAppointment";
import { BloodDonor } from "./bloodDonor";

export class CenterVisit {
    id: string = '';
    bloodDonationAppointment: BloodDonationAppointment = new BloodDonationAppointment;
    bloodDonor : BloodDonor = new BloodDonor;
    price : number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.price = obj.price;
            this.bloodDonationAppointment = obj.bloodDonationAppointment;
            this.bloodDonor = obj.bloodDonor;
        }
    }
}