export class Termin {    
    title: string = '';
    date: string = '';
    public constructor(obj?: any) {
        if (obj) {
            this.date = obj.date;
            this.title = obj.name;
        }
    }
}