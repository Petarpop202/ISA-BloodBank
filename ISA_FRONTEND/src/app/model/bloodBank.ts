export class BloodBank {
    id: string = '';
    name: string = '';
    description: string = '';
    averageGrade: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
            this.description = obj.description;
            this.averageGrade = obj.averageGrade;
        }
    }
}