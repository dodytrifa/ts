function add(figure:number, bool:boolean): number {
//  if(bool){
//    return figure+1
//  } else {
//   return figure-1
// }
return bool? figure+1 : figure-1  
}

console.log(add(3,false)); // 2

console.log('======DIFFERENT CASE=====');

function decoded(color: string[]): number{
  // console.log(color.length);
  // let result = color.splice(0,2)
  // console.log(result);
  
  if (color.length>2){
    color = color.splice(0,2)
  }
  
  let result: string = ""
  color.forEach(element => {
    switch (element){
    case 'black':
      result += '0';
      break;
    case 'brown':
      result += '1';
      break;
    case 'red':
        result += '2';
      break;
    case 'orange':
      result += "3";
      break;
    case 'yellow':
      result += "4";
      break;
    case 'green':
      result += "5";
      break;
    case 'blue':
      result += "6";
      break;
    case 'violet':
      result += "7"
      break;
    case 'grey':
      result += "8"
      break;
    case 'white':
      result += "9"
      break;   
    }
    
  });
  return parseInt(result)
}

// function decoded(color: any)

console.log(decoded(['yellow','grey',"white"]));
console.log(decoded(['grey',"white"]));
