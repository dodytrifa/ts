function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][]{
  return items.map((item) => item[key])
}

const players = [
  {name: "Messi", age: 32},
  {name: "Ronaldo", age: 34}
]

console.log(pluck(players, "age"));
console.log(pluck(players, "name"));
