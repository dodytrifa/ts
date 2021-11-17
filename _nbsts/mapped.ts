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


function listenToObject<T>(obj: T, listeners: Listener<T>): void {
  throw "implement it"
}

const bruno:DogInfo ={
  name: "bruno",
  age: 9
}

type DogInfoListeners = Listener<DogInfo>

listenToObject(bruno, {
  onNameChange: (val:string) => {},
  onAgeChange: (val: number) => {},
  onAgeDelete: () => {}
})

type Listener<Type> ={
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: (newValue: Type[Property]) => void
}