import connection from './SQLConnection'

import Property from '../models/Property'

export const properties = () : Promise<Property[]> => {
    let query: string = "SELECT * FROM properties";
    return new Promise((resolve, reject) => {
        connection.query(query, [], (err: string , results: any[]) => {
            if (err){
                return reject(err);
            }
            const properties : Property[] = []
            for (const result of results){
                const {propertyId, address, squareMeters, type, description}: any = result;
                properties.push(new Property(propertyId, address, squareMeters, type, description));
            }
            resolve(properties)
        })
    })
}

export const property = (propertyId: Number) : Promise<Property> => {
    let query: string = "SELECT * FROM properties WHERE property_id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [propertyId], (err : string , result : any) => {
            if (err){
                return reject(err);
            }
            const {propertyId, address, squareMeters, type, description}: any = result;
            const property = new Property(propertyId, address, squareMeters, type, description)
            resolve(property)
        })
    })
}

export const getPropertiesByRealEstate = (realEstateId: Number) : Promise<Property[]> => {
    let query: string = "SELECT property_id, address, square_meters, type, description FROM real_estates_properties INNER JOIN properties ON properties.property_id = real_estates_properties.property_id WHERE real_estate_id = ? ";
    return new Promise((resolve, reject) => {
        connection.query(query, [realEstateId], (err : string , results : any[]) => {
            if(err){
                return reject(err);
            }
            const properties : Property[] = []
            for(const result of results){
                const {propertyId, address, squareMeters, type, description}: any = result;
                properties.push(new Property(propertyId, address, squareMeters, type, description));
            }
            resolve(properties)
        })
    })
}

export const addProperty  = async (address: string, squareMeters: Number, type: string, description: string) => {
    let query: String = "INSERT INTO Properties VALUES(?, ?, ?, ?)"
    return new Promise((resolve, reject) => {
        connection.query(query, [undefined, address, squareMeters, type, description], async (err : string, results : any) => {
            if (err) {
                reject(err);
                return;
            }
            const property: Property = new Property(results.insertId, address, squareMeters, type, description);
            resolve(property);
        })
    })
}

export const editProperty  = async (propertyId: Number, address: string, squareMeters: Number, type: string, description: string) => {
    let query: string = "UPDATE Properties SET (?, ?, ?, ?) WHERE property_id = ?"
    return new Promise((resolve, reject) => {
        connection.query(query, [address, squareMeters, type, description, propertyId], async (err : string, results : any) => {
            if (err) {
                return reject(err);
            }
        })
    })
}

export const deleteProperty  = async (propertyId: Number) => {
    let query: string = "DELETE FROM Properties WHERE property_id = ?"
    return new Promise((resolve, reject) => {
        connection.query(query, [propertyId], async (err : string, results : any) => {
            if (err) {
                return reject(err);
            }
        })
    })
}
