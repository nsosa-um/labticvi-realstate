class Property {
    propertyId: Number;
    address: string;
    squareMeters: Number;
    type: string;
    description: string;

    constructor(propertyId: Number, address: string, squareMeters: Number, type: string, description: string) {
        this.propertyId = propertyId;
        this.address = address;
        this.squareMeters = squareMeters;
        this.type = type;
        this.description = description;
    }
}

export default Property
