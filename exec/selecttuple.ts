function names(namesAndAges: [string, number][]): string[]{
  return namesAndAges.map(nameAndAge=> nameAndAge[0])
}

function leapyear(year: number): string{
  if (year % 4 == 0){
    if (year % 100 == 0){
      if (year % 400 == 0){
        return "leap year"
      }
      return "not leap year"
    }
    return "leap year"
  }
  return "not leap year"
  
}