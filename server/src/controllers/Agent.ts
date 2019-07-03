import connection from './SQLConnection'
import Agent from '../models/Agent'

export const login = (username: String, password: String): Promise<Agent> => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM agents WHERE username = ? AND password = ?" , username, password, (err : String, results: any[]) => {
            if (err){
                return reject(err);
            }
            const {username, password, userId, realEstateId}: any = results[0];
            resolve(new Agent(username, password, userId, realEstateId));
        })
    })
}

export const agents = () : Promise<Agent[]> => {
    let query : String = "SELECT * FROM agents";
    let args : any[] = [];
    return new Promise((resolve, reject) => {
        connection.query(query, args, (err : String , results : any[]) => {
            if (err){
                return reject(err);
            }
            const agents : Agent[] = []
            for (const result of results){
                const {usernme, password, userId, realEstateId}: any = result;
                agents.push(new Agent(usernme, password, userId, realEstateId));
            }
            resolve(agents)
        })
    })
}

export const agent = (agentId: Number) : Promise<Agent> => {
    let query : string = "SELECT * FROM agents where user_id = ?";
    let args : any[] = [agentId];

    return new Promise((resolve, reject) => {
        connection.query(query, args, (err : string , result : any) => {
            if (err){
                return reject(err);
            }
            const {usernme, password, userId, realEstateId}: any = result;
            const agent = new Agent(usernme, password, userId, realEstateId)
            resolve(agent)
        })
    })
}
