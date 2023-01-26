import { BloodBank } from "./bloodBank";

export class BloodAmount {
    id: string = '';
    bloodType: string = '';
    amount: number = 0;
    bloodBank: BloodBank = new BloodBank

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.bloodType = obj.bloodType;
            this.amount = obj.amount;
            this.bloodBank = obj.bloodBank
        }
    }
}