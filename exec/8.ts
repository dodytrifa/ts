// how use extends keyword to narrow scope of generic to become useful

//the FirstKey extends will narrow and make autocomplete work in result 1st param
//the SecondKey extends will narrow and make autocomplete work in result 2nd param
export const getDeepValue = <Object, FirstKey extends keyof Object, SecondKey extends keyof Object[FirstKey]>(
  obj: Object, 
  key1: FirstKey, 
  key2: SecondKey): Object[FirstKey][SecondKey]  => {// the return Object etc is result in line 24
    return {} as any
}

const myObj = {
  admin: {
    name: 'admin',
    age: 30
  },
  user: {
    name: 'user',
    age: 20
  }
}

//take the targeted object and put the keys
const result = getDeepValue(myObj, 'user', 'age');
