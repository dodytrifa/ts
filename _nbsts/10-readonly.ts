//*tambahkan readonly di depan field agar field tidak bisa diubah

interface Bus {
  //*tipe 1
  // readonly brand : string,
  brand : string,
  type: string
}


function makeBus(brand: string, type: string): Readonly<Bus> {
  return {
    brand, type
  }
}

const newBus = makeBus("volvo", "double decker")
//*sehingga mencegah mutability
//newBus.brand = "Hino"

function tuplesCoordinate(
  x:number,
  y:number,
  z: number
): readonly [number,number,number]{
  return[x,y,z]
}

const c1 = tuplesCoordinate(10,20,30)
//*mencegah mutability
//c1[0] = 50


//*mencegah mutability pada const

const newArr = [1,2,3,4,5] as const
//newArr[1] = 50

