import connection from './SQLConnection'
import RealEstate from '../models/RealEstate'

export const realEstates = () : Promise<RealEstate[]> => {
    let query : string = "SELECT * FROM real_estates";
    let args : any[] = [];
    return new Promise((resolve, reject) => {
        connection.query(query, args, (err: string , results : any[]) => {
            if (err){
                return reject(err);
            }
            const realEstates : RealEstate[] = []
            for (const result of results){
                const {realEstateId, name, mail, address, phoneNumber}: any = result;
                realEstates.push(new RealEstate(realEstateId, name, mail, address, phoneNumber));
            }
            resolve(realEstates)
        })
    })
}

export const realEstate = (realEstateId: Number) : Promise<RealEstate> => {
    let query : string = "SELECT * FROM real_estates where real_estate_id = ?";
    let args : any[] = [realEstateId];
    return new Promise((resolve, reject) => {
        connection.query(query, args, (err : string , result : any) => {
            if (err){
                return reject(err);
            }
            const {realEstateId, name, mail, address, phoneNumber}: any = result;
            const realEstate = new RealEstate(realEstateId, name, mail, address, phoneNumber)
            resolve(realEstate)
        })
    })
}
