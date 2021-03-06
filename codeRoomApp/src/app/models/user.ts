export class User {

    uid: string;
    email: string;

    constructor(userObj: { uid: string; email: string; }) {
        this.uid = userObj.uid;
        this.email = userObj.email;
    }
}