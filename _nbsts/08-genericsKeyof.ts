function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][]{
  return items.map((item) => item[key])
}

const players = [
  {name: "Messi", age: 32},
  {name: "Ronaldo", age: 34}
]

console.log(pluck(players, "age"));
console.log(pluck(players, "name"));


//? ============= EXAMPLE 2 ===============

interface BaseEvent {
  time: number,
  user: string
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string}
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name],data2: EventMap[Name]):void{
  console.log([name, data,data2]);
}

sendEvent("addToCart",{
  productID: "idProduct",
  user: "userProperty",
  quantity: 1,
  time:100
},
{
  productID: "idProduct2",
  user: "userProperty2",
  quantity: 2,
  time:200
}
)