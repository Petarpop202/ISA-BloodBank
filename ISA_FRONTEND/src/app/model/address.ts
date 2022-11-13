export class Address {
    id: string = '';
    country: string = '';
    city: string = '';
    street: string = '';
    streetNum: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.country = obj.country;
            this.city = obj.city;
            this.street = obj.street;
            this.streetNum = obj.streetNum;
        }
    }
}