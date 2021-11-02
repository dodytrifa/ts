interface Database {
  get(id: string): string;
  set(id: string, value: string): void
}

class InMemoryDatabase implements Database {
  //*visibility (akses dari luar)
  
  //* bentuk awal
  // db: Record<string, string> = {}
  
  //* bentuk sebelum persistent
  // private db: Record<string, string> = {}

  //* bentuk akhir
  protected db: Record<string, string> = {}
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

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void
}

class PersistentMemoryDb extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    return this.db = JSON.parse(storedState)
  }
}
const myPersistDB = new PersistentMemoryDb()
console.log("=== PERSISTENT DB vvvvv");

myPersistDB.set("Persistent", "This is the value");
console.log(myPersistDB.get("Persistent"));

const firstSave = myPersistDB.saveToString();


