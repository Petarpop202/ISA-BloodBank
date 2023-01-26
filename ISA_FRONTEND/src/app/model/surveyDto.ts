export class SurveyDto {
    id: string = '';
    donorId: string = '';
    isAvailable: Boolean = true;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.donorId = obj.donorId;
            this.isAvailable = obj.isAvailable;
        }
    }
}