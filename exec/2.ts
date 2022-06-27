//How to Iterate member union (distributivity)

export type Person = "Jake" | "John" | "Jane";

//"Jane" is exist = true, thats why when we return never in ternary, we "somewhat" remove "jane" in union
type RemoveFirst<TType> = TType extends "Jane" ? never : TType; //"never" can be swapped to "d" for example

//hover to removePerson to see the effect
type removePerson = RemoveFirst<Person>

//we cannot directly console log / see the output since it is a type reference