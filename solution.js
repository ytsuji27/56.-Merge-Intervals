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

module.exports = { merge }