"use strict";
// const anchor = document.querySelector('a')!;
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes Rp ${this.amount} for ${this.details}`;
    }
}
//* instantiate class
const invoiceOne = new Invoice('John', 'web dev work', 500);
console.log(invoiceOne);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
