//* dengan membuat module, kita bisa mengexportnya di depan nama class
export class Invoice {
  
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.client} owes Rp ${this.amount} for ${this.details}`
  }
}

