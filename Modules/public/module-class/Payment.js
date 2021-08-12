//* jika sudh import interface, maka class yang dituju harus diberikan "implements"
//* dengan membuat module, kita bisa mengexportnya di depan nama class
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed Rp ${this.amount} for ${this.details}`;
    }
}
