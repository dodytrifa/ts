import { Invoice } from "./module-class/Invoice.js"; //* file js karena hasil akhir tetap js yang digunakan oleh browser

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
  console.log(inv.client, inv.amount);
  
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