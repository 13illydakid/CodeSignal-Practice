// snail = function(array) {
//     // enjoy
//     let spaces = array[0].length;
//     let direction = 0;

//   }


snail = function (array) {
  // enjoy
  let n = array.length;
  let parity;
  if (n % 2 === 0) {
    parity = "even";
  } else {
    parity = "odd";
  }
  console.log(parity);
  let resultArray = [];
  if (parity === "even") {
    while (array.length > 2) {
      //console.log(array.length);
      let top = array.shift();
      resultArray = resultArray.concat(top);
      let bottom = array.pop().reverse();
      let i = 1;
      while (i <= 2) {
        if (i === 1) {
          i += 1;
          for (let j = 0; j < array.length; j++) {
            let elem = array[j];
            let num = elem.pop();
            resultArray.push(num);
          }
        } else if (i === 2) {
          i += 1;
          resultArray = resultArray.concat(bottom);
          for (let j = array.length - 1; j > 0; j--) {
            let elem = array[j];
            let num = elem.shift();
            resultArray.push(num);
          }
        }
      }
      //console.log(array.length);
    }
  } else {
    while (array.length > 1) {
      //console.log(array.length);
      let top = array.shift();
      //console.log(top);
      resultArray = resultArray.concat(top);
      let bottom = array.pop().reverse();
      let i = 1;
      while (i <= 2) {
        if (i === 1) {
          i += 1;
          for (let j = 0; j < array.length; j++) {
            let elem = array[j];
            let num = elem.pop();
            resultArray.push(num);
          }
        } else if (i === 2) {
          i += 1;
          resultArray = resultArray.concat(bottom);
          for (let j = array.length - 1; j > 0; j--) {
            let elem = array[j];
            let num = elem.shift();
            resultArray.push(num);
          }
        }
      }
      //console.log(array.length);
    }
  }
  //console.log(resultArray);
  if (parity === "even") {
    let top = array.shift();
    resultArray = resultArray.concat(top);
    let bottom = array.pop().reverse();
    resultArray = resultArray.concat(bottom);
  } else {
    let top = array.shift();
    resultArray = resultArray.concat(top);
  }
  console.log(resultArray);
  return resultArray;
}
