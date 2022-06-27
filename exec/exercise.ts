//binary search
function binarySearch(arr:number[], target:number):number {
  arr.sort();
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    target = Math.floor((left + right) / 2);
  }
  return -1;

}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

