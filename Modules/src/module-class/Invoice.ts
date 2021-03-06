import { HasFormatter } from "../interfaces/HasFormatter.js"
//* jika sudh import interface, maka class yang dituju harus diberikan "implements"


//* dengan membuat module, kita bisa mengexportnya di depan nama class

export class Invoice implements HasFormatter {
  
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.client} owes Rp ${this.amount} for ${this.details}`
  }
}

