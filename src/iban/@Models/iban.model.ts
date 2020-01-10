export class Iban{
    format: string;
    length: number;

    constructor(ibanData:Iban){
        Object.assign(this,{
            ...ibanData
        })
    }
}