type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number
} & Record<string, string>

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