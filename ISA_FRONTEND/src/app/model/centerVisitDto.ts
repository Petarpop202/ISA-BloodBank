import { BloodDonationAppointment } from "./bloodDonationAppointment";
import { BloodDonor } from "./bloodDonor";

export class CenterVisitDto {
    id: string = '';
    appointmentId: string = "";
    donorId: string = "";
    price : number = 0;
    isCanceled : boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.appointmentId = obj.appointmentId;
            this.donorId = obj.donorId;
            this.price = obj.price;
            this.isCanceled = obj.isCanceled;
        }
    }
}