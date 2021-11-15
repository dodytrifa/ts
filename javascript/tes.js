// if (typeof(value) === 'date') {
//   console.log('This is a date, indeed!');
// }

let countDwarves = function() {return 7}
let dwarves = countDwarves
console.log(dwarves);

console.log(Object.is(5,"5"));

let president = {
  name: 'Pooh', 
  next:null
}

president.next = {
  name: 'Paddington',
  next: president
}

console.log(president.next.next.name);