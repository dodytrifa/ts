

const people = [
  {
    name: 'John',
    age: 20,
    tag: 'staff'
  },
  {
    name: 'Barry',
    age: 25,
    tag: 'CTO'
  },
  {
    name: 'Wayne',
    age: 30,
    tag: 'CEO'
  }
]
//*bentuk 1
const ages = people.map((person) => {
  return person.age
})

//*bentuk 2
const getAges = (person) => person.age

const agesV2 = people.map(getAges)

console.log(agesV2) //* [20,25,30]

const newPeople = people.map((item)=> {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20
  }
})

console.log(newPeople);

//* iterate with HTML

const names = people.map((person) => `<h2>${person.name}</h2>`)

const result = document.querySelector('#result')

result.innerHTML = names.join(' ')