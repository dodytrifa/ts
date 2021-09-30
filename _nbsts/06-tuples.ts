type ThreeAxis = [x: number, y: number, z: number]

function addAxis(c1: ThreeAxis, c2: ThreeAxis): ThreeAxis {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]//* angka 0 di sini adalah indeks dari tuplenya
}

console.log(addAxis([0, 0, 0], [2, 3, 4])); //* [2,3,4]

//*another case
function simpleState(initial: string): [() => string, (value: string) => void] {
  let str: string = initial
  return [
    () => str,
    (value: string) => {
      str = value
    }
  ]
}

const [getterOne, setterOne] = simpleState("From getter One")
const [getterTwo, setterTwo] = simpleState("From getter Two")

console.log(getterOne());
console.log(getterTwo());

setterOne("Getter One changed")
setterTwo("Getter Two changed")
console.log(getterOne());
console.log(getterTwo());


