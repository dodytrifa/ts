class Doggy {
  //bentuk pertama
  // constructor(
  //   public name: string, 
  //   public age: number
  // ){}

  //bentuk readonly
  constructor(
    readonly name: string, 
    readonly age: number
  ){}
}

const pet = new Doggy("Rocky", 4)
console.log(pet.name); // Rocky


//=========STATIC 

class DogList {
  private doggies: Doggy[] = []

  static instance: DogList = new DogList()

  private constructor(){}
  static addDog (dog: Doggy){
    DogList.instance.doggies.push(dog)
  }

  getDogs() {
    return this.doggies
  }
}

DogList.addDog(pet)
console.log(DogList.instance.getDogs());
