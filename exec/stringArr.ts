function returnArr(): string[][]{
  const arr = []
  arr.push(['hello'])
  arr.push(['world'])
  return arr
}

const array = returnArr()
console.log(array);

function takesAnArrayOfStrings(anArrayOfStrings: string[]) {
  return anArrayOfStrings;
}


