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
