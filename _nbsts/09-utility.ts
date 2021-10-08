interface MyUser {
  name: string,
  id: string,
  email?: string
  phone?: string
}

type MyUserOptionsPartial = Partial<MyUser>

//? BENTUK PERTAMA SEBELUM PARTIAL
// interface MyUserOptions {
//   name?: string,
//   id?: string,
//   email?: string
// }

const merge = (user: MyUser, overrides: MyUserOptionsPartial): MyUser => {
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

//? REQUIRED
//? dengan gunakan rquired maka semua field dalam MyUser harus disertakan, tidak lagi optional
type RequiredMyUser = Required<MyUser>

//? PICK
type JustEmailAndName = Pick<MyUser, "email" | "name">

//? RECORD
const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((a,v)=> {
    return {
      ...a,
      [v.id]:v
    }
  }, {})
}

console.log(mapById([
  {
    id: "firstPersonID",
    name: "John"
  },
  {
    id: "secondPersonID",
    name: "Marie"
  },
]));
