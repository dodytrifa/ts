//solve typescript exercism resistor-color-trio problem

export function decodeResistorValue(ohm:string[]):void{

  enum resistor {
    black = 0,
    brown,
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    grey,
    white
  }
  
//   const value= Object.values(resistor).filter((v) => isNaN(Number(v)));

  
//   ohm.forEach((item)=> {
//     value.forEach((color)=> {
//       if (item == color) {
        
//       }
//     })
//   })  
  
//   return ohm;
// }



    let colorCode = {
        "black": 0,
        "brown": 1,
        "red": 2,
        "orange": 3,
        "yellow": 4,
        "green": 5,
        "blue": 6,
        "violet": 7,
        "grey": 8,
        "white": 9
    }

    // for (var key of Object.keys(colorCode)) {
    //   console.log(key)
    // }
    let firstColor = ohm[0];
    let secondColor = ohm[1];
    let thirdColor = ohm[2];
    let result = colorCode.firstColor;
    return console.log(firstColor);
    // console.log();
    
    // let secondColor = colorCode[ohm[1]];
    // let thirdColor = colorCode[ohm[2]];
    // let ohmValue = (firstColor * 10 + secondColor) * Math.pow(10, thirdColor);
    // let ohmUnit = "ohms";

    // if (ohmValue >= 1000 && ohmValue < 1000000) {
    //     ohmValue = ohmValue / 1000;
    //     ohmUnit = "kiloohms";
    // } else if (ohmValue >= 1000000) {
    //     ohmValue = ohmValue / 1000000;
    //     ohmUnit = "megaohms";
    // }

    // return `${ohmValue} ${ohmUnit}`;
}
  

 

console.log(
  decodeResistorValue(["orange","orange","black"])//expect to be "33 ohms"

);
console.log(

  decodeResistorValue(["blue","grey","brown"])//expect to be "680 ohms"
);
console.log(
  decodeResistorValue(["orange","orange","black"])//expect to be "33 ohms"

);


