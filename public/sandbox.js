"use strict";
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
//*array
var friends = ["luigi", "charlie"];
// friends.push(9)//* tidak bisa insert number karena beda type
//*kecuali dari awal sudah bermacam2 typenya
var mix = [1, "charlie", true, "John"];
mix.push("ryu");
mix.push(9);
mix[3] = 4;
//*object
var ninja = {
    name: "Joni",
    isBeltBlack: true,
    age: 20
};
//* Error karena mengubah tipe property
// ninja.name = 1
// ninja.age = "twenty"
//* Error karena menambah property, 
// ninja.skills = ["kick"]
//*mengubah prorperty harus declare baru tapi tidak menambah/mengurangi property
ninja = {
    name: "Chris",
    isBeltBlack: false,
    age: 20,
};
//*explicit type
var habit;
var age;
var isLoggedIn;
//*Array
var team = []; //*di initialized
//*union type
var mixed = []; //* BERI KURUNG HANYA PADA ARRAY
mixed.push("hello");
var uid;
uid = 123;
uid = "string";
//*object
var playerOne;
playerOne = {
    name: 'joni',
    age: 20
};
var playerTwo;
playerTwo = {
    name: 'Jean',
    age: 19,
    // skills: 'attack' //*Error
};
//! Dynamic Any type
var stock = 100;
stock = "hello stock";
console.log(stock); //* hello
var arr = [];
var playerSix;
//* FUNCTION
var add = function (a, b) {
    console.log(a + b);
};
add(5, 10);
//*Optional parameter
var substract = function (a, b, c) {
    console.log(a - b);
    //* console.log(c); //akan undefined
    //* bentuk default value (a: number, b: number, c: number | string = 9)
};
substract(20, 10);
var sing = function (singer) {
    console.log(singer.name + " singss beautifully");
};
//* FUnction Signatures
//* bentuk pertama tanpa return (void)
var read;
read = function (author, title) {
    console.log(author + " writes a book with the title: " + title);
};
//*bentuk kedua dengan return
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "substract") {
        return numOne - numTwo;
    }
    else {
        return numOne + numTwo; //*jika tanpa pilihan else, akan error, karena strict return number
    }
};
calc(10, 5, 'substract');
//* BENTUK KETIGA
var log;
log = function (person) {
    console.log(person.name + " is " + person.age + " years old");
};
