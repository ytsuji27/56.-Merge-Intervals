// Given a collection of intervals, merge all overlapping intervals.

let test1 = [[1,3],[2,6],[8,10],[15,18]]
// Expected output = [[1,6],[8,10],[15,18]]

let test2 = [[1,4],[4,5]]
// Expected output = [[1,5]]

let test3 = [[1,4],[5,6]]
// Expected output = [[1,4],[5,6]]

const merge = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let result = [];
  let start = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    if (start[1] >= current[0]) {
      let merged = [start[0],current[1]];
      start = merged;
    } else {
      result.push(start);
      start = current;
    }
  }
  result.push(start);
  return result;
}

console.log('test1');
console.log(merge(test1));
console.log('test2');
console.log(merge(test2));
console.log('test3');
console.log(merge(test3));