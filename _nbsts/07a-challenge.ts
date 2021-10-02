//* FOR EACH
function forEachReplica<T>(items: T[], forEachFunc: (v:T)=> void): void{
  items.reduce((acc, val) => {
    forEachFunc(val);
    return undefined
  }, undefined)
}

forEachReplica(["Pertama", "kedua", "ketiga"], (v) => console.log(`for Each ${v}`))


function filterReplica<T>(item: T[], filterFunc: (v:T)=> boolean): T[]{
  return item.reduce((a, v)=>(filterFunc(v) ? [...a,v] : a), [] as T[])
  
}
console.log(filterReplica([1,2,3,4,5,6,7,8], (v) => v % 2 === 0 ));


function mapReplica<T, K>(items: T[], mapFunc: (v:T)=> K): K[] {
  return items.reduce((a,v) => [...a, mapFunc(v)], [] as K[])
}


console.log(mapReplica([1,2,3,4,5,6,7,8], (v) => v * 200 ));