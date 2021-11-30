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
