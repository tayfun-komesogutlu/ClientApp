export class FraudManipulationDetail {
    public elaResult: string;
    public ImageBase64: string;
    public targetImage: string;
    public elaBase64: string;

    constructor(elaResult: string, ImageBase64: string, targetImage: string, elaBase64: string) {
        this.elaResult = elaResult,
            this.ImageBase64 = ImageBase64,
            this.targetImage = targetImage;
        this.elaBase64 = elaBase64;
    }
}