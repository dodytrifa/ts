import { Invoice } from "./module-class/Invoice.js"; 
import { Payment } from "./module-class/Payment.js"; 
import {HasFormatter} from './interfaces/HasFormatter.js'
import { ListTemplate } from "./module-class/ListTemplate.js";

//* ekstensi file js karena hasil akhir tetap js yang digunakan oleh browser


//* interface dengan class
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Joni', 'copywriter', 500);
// docTwo = new Payment('Jean', 'content creation', 1000);

// let docs: HasFormatter[] = []
// docs.push(docOne);
// docs.push(docTwo)

// console.log(docs)
//* batas interface class



//* interface dengan object
// interface isPerson {
//   name: string;
//   age: number;
//   speak(language:string): void;
//   spend(dollar: number):  number;
// }

// const me: isPerson = {
//   name: 'John',
//   age: 30,
//   speak(language: string): void{
//     console.log(language);
//   },
//   spend(dollar: number): number {
//     console.log('I spent', dollar);
//     return dollar;
//   }
// }
// console.log(me)
//* batas interface object

// const greetPerson = (person: isPerson) => {
//   console.log("greetPerson function says => Hello ", person.name);
// }
// greetPerson(me)


//* instantiate class
// const invoiceOne = new Invoice('John', 'web dev work', 500)
// const invoiceTwo = new Invoice('Jane', 'maintenance work', 1000)

//console.log(invoiceOne);

//* buat array dari class yang diinstantiate

// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);

//* console.log(invoices)

// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount);
  
// })


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event)=> {
  e.preventDefault()

  let document: HasFormatter;


  //* bentuk sebelum implementasi tuples
  /*
  if(type.value === 'invoice') {
    document = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    document = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }
  */
  
  //*implementasi tuples
  let values: [string, string, number]
  values = [toFrom.value, details.value, amount.valueAsNumber]
  if(type.value === 'invoice') {
    document = new Invoice(...values)
  } else {
    document = new Payment(...values)
  }

  list.render(document, type.value, 'end')

  // console.log(document);
  
  //*bentuk awal
  // console.log(
  //   type.value,
  //   toFrom.value,
  //   details.value,
  //   amount.valueAsNumber
  //   );

})

//* list template instance

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

//* extends di sini bisa bermacam2 type, obj, string, num, tergantung case
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random()*100);
  return {...obj, uid};
}

let documentOne = addUID({name: "Generic User", age: 40});

// console.log(documentOne);


//*bentuk pertama generic dengan interface
/*
interface Resource {
  uid: number;
  resourceName: string;
  data: object
}

const documentTwo: Resource = {
  uid: 1,
  resourceName: 'person',
  data: {name: "name from data"}
}
*/


//*bentuk kedua generic dengan interface
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T
}

const documentTwo: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: {name: "name from data"}
}

const documentThree: Resource<string[]> = {
  uid: 1,
  resourceName: 'collector item',
  data: ["statue", 'painting']
}


enum ResourceType {BOOK, AUTHOR, DIRECTOR}

interface NewResource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T
}

const documentFour: NewResource<object> = {
  uid: 1,
  resourceType: ResourceType.DIRECTOR,
  data: {name: "Jennifer"}
}


//*tuples 
//*membuat strict type di array
let arr: [string, number, boolean] = ['halo', 900, true];
// arr[0] = 1; //* akan error
