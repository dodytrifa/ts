import addNumber, {addStrings,fetchData,format,mutating,addFive} from "./02-function";

console.log(addNumber(5,4));
console.log(addStrings("Hallo","User"));

//* param 2 bisa tidak diisi karena di function diberi default parameter
console.log(addStrings("Hallo", ));
console.log(format("Hai", 7));
console.log(fetchData("fetch"));

//?FUNCTION RETURN FUNCTION
console.log(mutating([8,9,9], (value) => value * 10 ));

console.log(addFive(100));//*105

