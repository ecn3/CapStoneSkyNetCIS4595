export class User {

    uid: string;
    email: string;

    constructor(userObj) {
        this.uid = userObj.uid;
        this.email = userObj.email;
    }
}