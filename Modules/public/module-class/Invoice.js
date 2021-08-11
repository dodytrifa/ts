//* dengan membuat module, kita bisa mengexportnya di depan nama class
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes Rp ${this.amount} for ${this.details}`;
    }
}
