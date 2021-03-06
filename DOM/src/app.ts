// const anchor = document.querySelector('a')!;

class Invoice {
  //* BENTUK PERTAMA SEBELUM SHORTHAND
  client: string; //* bentuk sebenarnya, public client: string
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number){
    this.client = c;
    this.details = d;
    this.amount = a
  }

  //*AKHIR BENTUK PERTAMA

  //* Bentuk constructor shorthand, tanpa perlu ketik property
  /*
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}
  */

  format() {
    return `${this.client} owes Rp ${this.amount} for ${this.details}`
  }
}

//* instantiate class
const invoiceOne = new Invoice('John', 'web dev work', 500)
const invoiceTwo = new Invoice('Jane', 'maintenance work', 1000)

//* console.log(invoiceOne);

//* buat array dari class yang diinstantiate

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

//* console.log(invoices)

invoices.forEach(inv => {
  console.log(inv.client, inv.details, inv.amount);
  
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event)=> {
  e.preventDefault()

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
    );

})