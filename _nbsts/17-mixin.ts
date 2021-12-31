function myLogFunction() {
  return (str: string)=>{
    console.log(str);  
  }
}

const logger = myLogFunction()
logger("your string")

// mixin function create class

function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = ""
    log(str:string){
      console.log(str);
      this.completeLog += str +"\n"
    }
    displayLog(){
      return this.completeLog
    }
  }
}

const MyLogger = createLoggerClass()
const logger2 = new MyLogger
logger2.log("Display Kata")
console.log(logger2.displayLog());


function CreateSimpleDatabase<T>(){
  return class SimpleMemoryDB {
    private db: Record<string, T> ={};

    set(id: string, value:T){
      this.db[id]= value
    }
    get(id: string, value:T){
      return this.db[id]
    }
    getObject(): object {
      return this.db;
    }
  }
}

const StringDB = CreateSimpleDatabase<string>();

const sDB = new StringDB()
sDB.set("a","hello")

type Constructor<T> = new (...args:any[]) => T;

function Log<T extends Constructor<{
  getObject():object}>
  >(Base: T){
  return class Log extends Base {
    logTheString() {
      console.log(this.getObject()); //* getObject comes from function CreateSimpleDatabase
      
    }
  }
}

const LogStringDB = Log(StringDB)
const sDB2 = new LogStringDB()

sDB2.set("Jonny", "hello Jonny")
sDB2.logTheString()

//1. Log function takes input from (Base:T)
//2. Base with type T takes extends from constructor
//3. Constructor takes input T, define a new (create an object)
//4. the constructor will return the new object
//5. mixin create function from another function