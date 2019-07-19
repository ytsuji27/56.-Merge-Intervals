// Given a collection of intervals, merge all overlapping intervals.

let test1 = [[1,3],[2,6],[8,10],[15,18]]
// Expected output = [[1,6],[8,10],[15,18]]

let test2 = [[1,4],[4,5]]
// Expected output = [[1,5]]

let test3 = [[1,4],[5,6]]
// Expected output = [[1,4],[5,6]]

let test4 = [[1,4],[0,4]]
// Expected output = [[0,4]]

let test5 = [[1,4],[2,3]]
// Expected output = [[1,4]]

const merge = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  arr.sort(function(a,b) {
    if(a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }
      return 0;
  })
  let result = [];
  let start = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    if (start[1] >= current[0]) {
      let merged = [];
      if (start[1] <= current[1]) {
        merged = [start[0],current[1]];
      } else {
        merged = [start[0],start[1]];
      }
      start = merged;
    } else {
      result.push(start);
      start = current;
    }
  }
  result.push(start);
  return result;
}

console.log('test1 - expect [[1,6],[8,10],[15,18]]');
console.log(merge(test1));
console.log('test2 - expect [[1,5]]');
console.log(merge(test2));
console.log('test3 - expect [[1,4],[5,6]]');
console.log(merge(test3));
console.log('test4 - expect [[0,4]]');
console.log(merge(test4));
console.log('test5 - expect [[1,4]]');
console.log(merge(test5));