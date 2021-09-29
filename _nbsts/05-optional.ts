function bakeCookies(flour: number, eggs:number, extra?:string){
  console.log(`Cookies ingredient: ${flour} gr flour, ${eggs} pc eggs ${extra ?`and add ${extra}` : "" }`);
  
}

bakeCookies(200, 4)
bakeCookies(200, 4, "color paste")

interface User {
  id: number,
  info? : {
    userAddress?: string
  }

}

function getAddress(user: User) : string {
  if(user.info){
    return user.info.userAddress!
  }
  return ""
}

function getAddressBetter(user: User): string {
  return user?.info?.userAddress ?? ""
}

function optionalCallback(a:string, b:string, callback?: () => void){
  console.log("a","b");
  callback?.()
  
}