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

console.log("=====MUTATION====");

let sherlock = {
  surname: 'Holmes',
  address: {
    city: 'London'
  }
}

let john = {
  surname: 'Watson',
  address: sherlock.address
}

console.log(sherlock.surname);
console.log(sherlock.address.city);
console.log(john.surname);
console.log(john.address.city);

// mutasi yang akan mengubah property sherlock
john.surname = "Lennon"
john.address.city= "Malibu"

console.log("!!! MUTATED !!!");
console.log(sherlock.address.city);
console.log(john.address.city);

//LET VS CONST
const shrek = {
  species: "ogre"
}

shrek.species = "Human"
console.log(shrek.species) //Human