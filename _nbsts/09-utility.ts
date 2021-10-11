interface MyUser {
  name: string,
  id: number,
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
  id: 10,
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
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Marie"
  },
]));


type UserWithoutID = Omit<MyUser, "id">

//?OMIT
const omitId = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a,v)=> {
    const {id, ...other} = v
    return {
      ...a,
      [id]:other
    }
  }, {})
}

console.log(omitId([
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Marie"
  },
]));

