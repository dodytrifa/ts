const character = 'mario';

console.log(character);

//character = 90 //* akan error karena diubah typenya

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

//*function, param harus diberi type

const circle = (diameter: number)=> {
  return diameter * Math.PI
}

console.log(circle(9));

//*array

let friends = ["luigi", "charlie"]


// friends.push(9)//* tidak bisa insert number karena beda type

//*kecuali dari awal sudah bermacam2 typenya
let mix = [1,"charlie",true, "John"]

mix.push("ryu")
mix.push(9)
mix[3]=4

//*object
let ninja = {
  name: "Joni",
  isBeltBlack: true,
  age: 20
}

//* Error karena mengubah tipe property
// ninja.name = 1
// ninja.age = "twenty"

//* Error karena menambah property, 
// ninja.skills = ["kick"]


//*mengubah prorperty harus declare baru tapi tidak menambah/mengurangi property
ninja = {
  name: "Chris",
  isBeltBlack: false,
  age: 20,
} 

//*explicit type
let habit: string;
let age: number;
let isLoggedIn: boolean;

//*Array
let team: string[] = [];//*di initialized

//*union type

let mixed: (string|number|boolean)[] = []//* BERI KURUNG HANYA PADA ARRAY
mixed.push("hello")

let uid: string|number;
uid = 123
uid = "string"

//*object
let playerOne:object;

playerOne = { 
  name: 'joni', 
  age: 20
}

let playerTwo: {
  name: string,
  age: number
}

playerTwo = {
  name:'Jean',
  age: 19,
  // skills: 'attack' //*Error
}


//! Dynamic Any type

let stock: any = 100;

stock = "hello stock"

console.log(stock); //* hello

let arr: any[] = [];

let playerSix: {
  name: any,
  age: any
}

//* FUNCTION
const add = (a: number, b: number) => {
  console.log(a + b);
  
}

add(5,10)

//*Optional parameter
const substract = (a: number, b: number, c?: number | string) => {
  console.log(a - b);
  //* console.log(c); //akan undefined
  //* bentuk default value (a: number, b: number, c: number | string = 9)
  
  
}

substract(20,10)

//* Type aliases (bentuk pertama)

// const sing = (singer: {
//   name: string,
//   id: string | number
// }) => {
//   console.log(`${singer.name} singss beautifully`);
// }

//*bentuk kedua
type StringOrNum = string | number

const sing = (singer: {
  name: string,
  id: StringOrNum
}) => {
  console.log(`${singer.name} singss beautifully`);
  
}

//* FUnction Signatures
//* bentuk pertama tanpa return (void)
let read: (a:string, b:string) => void;

read = (author: string, title: string) => {
  console.log(`${author} writes a book with the title: ${title}`);
  
}

//*bentuk kedua dengan return
let calc: (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo:number, action:string) => {
  if(action === "substract"){
    return numOne - numTwo;
  } else {
    return numOne + numTwo //*jika tanpa pilihan else, akan error, karena strict return number
  }

}
calc(10,5,'substract')

//* BENTUK KETIGA
let log: (obj: {
  name: string,
  age: number
}) => void

log = (person: {
  name: string,
  age: number
}) => {
  console.log(`${person.name} is ${person.age} years old`);
  
}