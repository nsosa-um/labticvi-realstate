class RealEstate {
    realEstateId: Number;
    name: string;
    mail: string;
    address: string;
    phoneNumber: string;

    constructor(realEstateId: Number, name: string, mail: string, address: string, phoneNumber: string) {
        this.realEstateId = realEstateId;
        this.name = name;
        this.mail = mail;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}

export default RealEstate
