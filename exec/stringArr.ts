function returnArr(): string[][]{
  const arr = []
  arr.push(['hello'])
  arr.push(['world'])
  return arr
}

const array = returnArr()
console.log(array);

function takesAnArrayOfStrings(anArrayOfStrings: string[]) {
  return anArrayOfStrings;
}


// function last<T>(elem: Array<T>){
//   return elem[elem.length-1]
// }
// let n = last<boolean>([true, false]);
// let n2: number = n;

// n2
// console.log(n2);
 
function first<T>(elements: Array<T>): T {
  return elements[0];
}
let results: [string, number] = [
  first<string>(['a', 'b']),
  first<number>([1, 2]),
];
console.log(results);// ['a',1]
