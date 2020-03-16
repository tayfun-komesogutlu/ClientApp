export class FraudManipulation {
    public id: number;
    public fileNo: string;
    public imageName: string;
    public software: string;
    public copyMoveRate: number;
    public date_time: Date;

    constructor(id: number, fileNo: string, imageName: string, software: string, copyMoveRate: number, date_time: Date) {
        this.id = id;
        this.fileNo = fileNo,
            this.imageName = imageName,
            this.software = software,
            this.copyMoveRate = copyMoveRate,
            this.date_time = date_time;
    }
}