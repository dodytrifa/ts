import { Invoice } from "./module-class/Invoice.js";
const me = {
    name: 'John',
    age: 30,
    speak(language) {
        console.log(language);
    },
    spend(dollar) {
        console.log('I spent', dollar);
        return dollar;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log("greetPerson function says => Hello ", person.name);
};
greetPerson(me);
//* instantiate class
const invoiceOne = new Invoice('John', 'web dev work', 500);
const invoiceTwo = new Invoice('Jane', 'maintenance work', 1000);
//* console.log(invoiceOne);
//* buat array dari class yang diinstantiate
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
//* console.log(invoices)
invoices.forEach(inv => {
    console.log(inv.client, inv.amount);
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
