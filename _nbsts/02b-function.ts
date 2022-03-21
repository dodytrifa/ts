console.log("BOOLEAN");
console.log("=============================");
type MyBoolean = boolean
let b1: boolean = true
let b2: MyBoolean = b1

console.log(b2)// true

console.log("DOUBLING");
console.log("=============================");

function double(n:number): number {
  return 2 * n
}

const myDouble: (n : number) => number = double
double(3)// 6


console.log("TYPE PROPERTY");
console.log("=============================");
type Cat = {
  name: string
  vaccinated: boolean
};
let msFluff: Cat = {
  name: 'Ms. Fluff',
  vaccinated: true,
};
msFluff.vaccinated;