export class AuthInfo {
    constructor(public $uid: string, public $email: string) { }

    isLoggedIn() {
        if (this.$email) {
            return true;
        } else {
            return false;
        }
    }
}
