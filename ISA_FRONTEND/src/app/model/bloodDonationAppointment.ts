import { BloodBank } from "./bloodBank";
import { MedicineStaff } from "./medicineStaff";

export class BloodDonationAppointment {
    id: string = '';
    startDateTime: string = '';
    duration: number = 0;
    medicineStaffs: MedicineStaff[] = new Array();
    bloodBank: BloodBank = new BloodBank;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.startDateTime = obj.startDateTime;
            this.duration = obj.duration;
            this.medicineStaffs = obj.medicineStaffs;
            this.bloodBank = obj.bloodBank;
        }
    }
}