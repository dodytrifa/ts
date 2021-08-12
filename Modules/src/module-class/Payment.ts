import { HasFormatter } from "../interfaces/HasFormatter.js"
//* jika sudh import interface, maka class yang dituju harus diberikan "implements"


//* dengan membuat module, kita bisa mengexportnya di depan nama class

export class Payment implements HasFormatter {
  
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.recipient} is owed Rp ${this.amount} for ${this.details}`
  }
}

