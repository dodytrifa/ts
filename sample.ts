function add(figure:number, bool:boolean): number {
//  if(bool){
//    return figure+1
//  } else {
//   return figure-1
// }
return bool? figure+1 : figure-1  
}

console.log(add(3,false)); 