function solution(a) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let elem = a[i];
    result.push(elem);
    if (elem === 1) {
      result = onOff(result);
    }
  }
  console.log(result);
  return result;
}

function onOff(array) {
  let arr = [];
  for (let n of array) {
    if (n === 0) {
      arr.push(1);
    } else if (n === 1) {
      arr.push(0);
    }
  }
  return arr;
}
