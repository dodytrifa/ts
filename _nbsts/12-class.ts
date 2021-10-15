interface Database {
  get(id: string): string;
  set(id: string, value: string): void
}

class InMemoryDatabase implements Database {
  //*visibility
  // db: Record<string, string> = {}
  private db: Record<string, string> = {}
  get(id: string): string {
    return this.db[id]
  }
  set(id: string, value: string): void {
    this.db[id] = value
  }
}



const myDB = new InMemoryDatabase()
myDB.set("key", "value")
console.log(myDB.get("key"));//* value

//*karena db diprivate maka tidak bisa diakses
//* myDB.db["key"] = "access the private"