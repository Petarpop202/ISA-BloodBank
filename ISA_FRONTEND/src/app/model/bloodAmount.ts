export class BloodAmount {
    id: string = '';
    bloodType: string = '';
    amount: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.bloodType = obj.bloodType;
            this.amount = obj.amount;
        }
    }
}