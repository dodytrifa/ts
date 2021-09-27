interface Coordinate {
  x: number;
  y: number;
}

//* bentuk pertama
function parseCoordinatefromObj(obj: Coordinate): Coordinate {
  return {
    ...obj
  }
}

function parseCoordinatefromNumbers(x:number, y:number): Coordinate{
  return {
    x,
    y,
  }
}

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x:number, y:number): Coordinate

//*tanda ? sebagai optional
function parseCoordinate(arg1?: unknown, arg2?: unknown): Coordinate{
  let coord: Coordinate ={
    x: 0,
    y: 0
  }

  if(typeof arg1 === 'string'){
    (arg1 as string).split(',').forEach((str) => {
      const[key,value] = str.split(':')
      coord[key as 'x' | 'y'] = parseInt(value,10)
    }) 
    
  }else if(typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate) //* harus memakai alias agar terdefine bukan unknown
    }
  }else {
    coord = {
      x: arg1 as number,
      y: arg2 as number
    }
  }

  return coord
}

console.log(parseCoordinate(11,12));
console.log(parseCoordinate({x: 5,y: 99}));
console.log(parseCoordinate("x:10,y:2"));


