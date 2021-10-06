interface MyUser {
  name: string,
  id: string,
  email?: string
}

interface MyUserOptions {
  name?: string,
  id?: string,
  email?: string
}

const merge = (user: MyUser, overrides: MyUserOptions): MyUser => {
  return {
    ...user,
    ...overrides
  }
}

console.log(merge({
  name: "John", 
  id: "johnID",
  email: "sample@mail.com"
}, {email: "thelatest@mail.com"}));
