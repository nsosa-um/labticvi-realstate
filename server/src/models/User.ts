class User {
    userId: Number;
    phoneNumber: string;
    mail: string;
    surname: string;
    ci: string;

    constructor(userId: Number, phoneNumber: string, mail: string, surname: string, ci: string) {
        this.userId = userId;
        this.phoneNumber = phoneNumber;
        this.mail = mail;
        this.surname = surname;
        this.ci = ci;
    }
}

export default User
