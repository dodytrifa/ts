//*reduce ke single value, bisa number, array, object

const team = [
  {name: 'John', title: 'staff', salary: 300},
  {name: 'Brown', title: 'CTO', salary: 500},
  {name: 'Merry', title: 'staff', salary: 200},
  {name: 'Rick', title: 'staff', salary: 200},
]

const totalSalary = team.reduce((total, person)=>{
  
  total += person.salary
  return total //* return param 1
},0)

console.log(totalSalary);