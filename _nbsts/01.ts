let userName: string = "John Doe"
let myNumber: number= 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ")

const myValue: Array<number> = [5,6,7]

//* bentuk pertama object
/*
const ids = {
  10: "a",
  20: "b"
}
*/


//* ids[30] ="c" 
//* akan error karena tidak diinitiate lebih dulu

//* bentuk kedua
const ids: Record<number, string> ={
  10: "a",
  20: "b"
}

ids[30] = "c"