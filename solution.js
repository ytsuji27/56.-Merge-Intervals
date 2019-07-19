// Given a collection of intervals, merge all overlapping intervals.

let test1 = [[1,3],[2,6],[8,10],[15,18]]
// Expected output = [[1,6],[8,10],[15,18]]

let test2 = [[1,4],[4,5]]
// Expected output = [[1,5]]

let test3 = [[1,4],[5,6]]
// Expected output = [[1,4]]

const merge = arr => {
  if (arr.length === 1) {
    return arr;
  }
  let result = [];
  let start = arr[0][0];
  let end = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (end < arr[i][0]) {
      result.push([start, end]);
      start = arr[i][0];
      end = arr[i][1];
    } else {
      result.push([start, arr[i][1]]);
      if (i !== arr.length-1) {
        start = arr[i+1][0];
        end = arr[i+1][1];
      }
    }
  }
  return result;
}

console.log('test1');
console.log(merge(test1));
console.log('test2');
console.log(merge(test2));