import { Address } from "./address";

export class BloodBank {
    id: string = '';
    name: string = '';
    description: string = '';
    averageGrade: number = 0;
    address: Address = new Address;
    workTimeStart: string = '';
    workTimeEnd: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
            this.description = obj.description;
            this.averageGrade = obj.averageGrade;
            this.address = obj.address;
            this.workTimeStart = obj.workTimeStart;
            this.workTimeEnd = obj.workTimeEnd;
        }
    }
}