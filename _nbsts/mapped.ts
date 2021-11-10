type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number
}

const dog:MyFlexibleDogInfo = {
  name: "Bruno",
  breed: "Shiba Inu",
  age: 22
}

interface  DogInfo {
  name: string
  age: number
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: null
}

type DogInfoOptions = OptionsFlags<DogInfo>

type Listener<Type> ={
  [Property in keyof Type]: () => void
}

function listenToObject<T>(obj: T, listeners: Listener<T>): void {
  throw "implement it"
}

const bruno: DogInfo ={
  name: "bruno",
  age: 9
}

listenToObject(bruno, {
  onNameChange: (val:string) => {},
  onAgeChange: (val: number) => {}
})