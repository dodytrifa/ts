//* Generic membuat value menjadi lebih flexible

interface GenericDatabase<T, K> {
  get(id: K): T;
  set(id: K, value: T): void
}

type DBKey = string | number | symbol

class MemoryDatabase<T, K extends DBKey> implements GenericDatabase<T, K> {
  
  protected db: Record<K, T> = {} as Record<K, T>
  get(id: K): T {
    return this.db[id]
  }
  set(id: K, value: T): void {
    this.db[id] = value
  }
}

const myGenericDB = new MemoryDatabase()
myGenericDB.set("key", "GENERIC")
console.log(myGenericDB.get("key"));//* value

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void
}

class PersistentDb<T, K extends DBKey> extends MemoryDatabase<T, K> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    return this.db = JSON.parse(storedState)
  }
}


const myPersistGenericDB = new PersistentDb()
console.log("=== PERSISTENT DB vvvvv");

myPersistGenericDB.set("Persistent", "This is the value");
console.log(myPersistGenericDB.get("Persistent"));

const firstSaveGenericDB = myPersistGenericDB.saveToString();


