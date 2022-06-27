//* When we should use generic

interface Animal {
  name: string;
}

interface Human {
  firstName: string;
  lastName: string;
}

//we make type that can be Human or Animal and return their name
type Person<T extends Human | Animal> = T extends Human ? {humanName:string}: {animalName:string};

//we create function that takes Person<Human> and return his name
//T Item is generic form of Animal and Human
export const getDisplayName = <TItem extends Animal | Human>(
  item: TItem
): TItem extends Human
  ? { humanName: string } 
  : { animalName: string } => {
    if ("name" in item) {
      return { animalName: item.name} as Person<TItem>;
    } 
      return { humanName: `${item.firstName} ${item.lastName}`} as Person<TItem>;
    
  }



const result = getDisplayName({
  name: "John"
})

const result2 = getDisplayName({
  firstName: "Jean",
  lastName: "Doe"
})

console.log(result); //output: { animalName: 'John' }
console.log(result2);//output: { humanName: 'Jean Doe' }
