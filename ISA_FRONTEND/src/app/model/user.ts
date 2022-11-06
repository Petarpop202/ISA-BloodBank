export class User {
    id: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
        }
    }
}