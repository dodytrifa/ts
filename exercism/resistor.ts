//solve typescript exercism resistor-color-trio problem

export function decodeResistorValue(ohm:string[]):string{
  let total = 0
  let result = ''
  for(let i = 0; i < ohm.length; i++){
    total += parseInt(ohm[i]) * Math.pow(10, ohm.length - i - 1)
  }
  switch(total){
    case 0:
      result = 'black'
      break
    case 1:
      result = 'brown'
      break
    case 2:
      result = 'red'
      break
    case 3:
      result = 'orange'
      break
    case 4:
      result = 'yellow'
      break
    case 5:
      result = 'green'
      break
    case 6:
      result = 'blue'
      break
    case 7:
      result = 'violet'
      break
    case 8:
      result = 'grey'
      break
    case 9:
      result = 'white'
      break
    default:
      result = 'black'
      break

  }

  return result+" ohms"
  

} 

// decodeResistorValue("orange","orange","black")//output: "33 ohms"
// decodeResistorValue("blue","grey","brown")//output: "680 ohms"
// decodeResistorValue("orange","orange","black")//output: "33 ohms"


// export class ResistorColorTrio {
//     private colors: string[];
//     constructor(colors: string[]) {
//         this.colors = colors;
//     }
//     value(): number {
//         const colorMap = {
//             'black': 0,
//             'brown': 1,
//             'red': 2,
//             'orange': 3,
//             'yellow': 4,
//             'green': 5,
//             'blue': 6,
//             'violet': 7,
//             'grey': 8,
//             'white': 9
//         }
//         const first = colorMap[this.colors[0]];
//         const second = colorMap[this.colors[1]];
//         const third = colorMap[this.colors[2]];
//         return first * 10 + second;

//     }

// }




// export function colorCode(color: string): number {
//     switch (color) {
//         case 'black': return 0;
//         case 'brown': return 1;
//         case 'red': return 2;
//         case 'orange': return 3;
//         case 'yellow': return 4;
//         case 'green': return 5;
//         case 'blue': return 6;
//         case 'violet': return 7;
//         case 'grey': return 8;
//         case 'white': return 9;
//         default: return -1;
//     }
// }

// export function decode(value: number): string {
//     const firstDigit = Math.floor(value / 10);
//     const secondDigit = value % 10;
//     return `${firstDigit}${secondDigit}`;
// }

// export function encode(value: string): number {
//     const firstDigit = colorCode(value.charAt(0));
//     const secondDigit = colorCode(value.charAt(1));
//     return firstDigit * 10 + secondDigit;
// }

// export function band(color: string): string {
//     return color.charAt(0);
// }

// export function getColor(value: number): string {
//     return colorCode(value.toString().charAt(1))

// }


