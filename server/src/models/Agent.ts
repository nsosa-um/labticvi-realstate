class Agent {
    userId: Number;
    username: string;
    password: string;
    realEstateId: string;

    constructor(userId: Number, username: string, password: string, realEstateId: string) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.realEstateId = realEstateId;
    }
}

export default Agent
