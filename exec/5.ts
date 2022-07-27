//useful ts config for checking if an array index will be undefined

export const myObj: Record<string, string[]> = {}

//we push something to an object
myObj.newArr.push("new Index")

//if the object didn't have "newArr" key it will be undefined error at runtime, not red sgquiggle red
//so we need to prevent by change the tsconfig

//"noUncheckedIndexedAccess" : true

//alternative

if (!myObj.newArr){
    myObj.newArr =[]
}