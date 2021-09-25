function addNumber(a:number,b:number){
  return a + b;
}

//* export default practice di TS

export const addStrings = (str:string, str2:string = "") : string => `${str} ${str2}`

//*union type
export const format = (title:string, param: string | number ): string | number => `${title} ${param}`

//*ganti target tsconfig dulu karena masih es5
export const fetchData = (url:string): Promise<string> => 
  Promise.resolve(`Data from ${url}`)
 
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`
}

//?-----------FUNCTION RETURN FUNCTION
export function printFile(text:string, callback:()=> void): void {
  console.log(text);
  callback()
}

//*bentuk pertama = verbose
/*
export function mutating(
  numbers: number[], 
  mutate: (value:number)=> number)
  : number[]{
  return numbers.map(mutate);
}
*/

type MutateFn = (value:number) => number;

export function mutating(
  numbers: number[], 
  mutate: MutateFn
): number[]{
  return numbers.map(mutate);
}

//? Function - Closure
export function addValues(num: number){
  return (value: number) => num + value
}

export const addFive = addValues(5)


export default addNumber

//?-----Function Overloading
