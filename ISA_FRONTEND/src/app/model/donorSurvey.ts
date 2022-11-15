import { BloodDonor } from "./bloodDonor";

export class DonorSurvey {
    id: string = '';
    bloodDonor: BloodDonor = new BloodDonor;
    isAvailable: Boolean = true;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.bloodDonor = obj.bloodDonor;
            this.isAvailable = obj.isAvailable;
        }
    }
}