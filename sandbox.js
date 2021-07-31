var character = 'mario';
console.log(character);
//character = 90 //* akan error karena diubah typenya
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
//*function, param harus diberi type
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(9));
