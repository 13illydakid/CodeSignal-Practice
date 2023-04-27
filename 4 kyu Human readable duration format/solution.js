function formatDuration(seconds) {
    // Complete this function
    if (seconds === 0) {
      return "now";
    }
    let obj = {
      "years": 31536000,
      "days": 86400,
      "hours": 3600,
      "minutes": 60,
      "seconds": 1
    }
    let resultArray = [];
    while (seconds > 0) {
      let howLong;
      for (let key in obj) {
        if (seconds >= obj[key]) {
          howLong = key;
          break;
        }
      }
      let array = helper(seconds, howLong);
      //let [str, number] = array;
      //seconds = array[1];
      let number = array[1];
      let str = array[0];
      seconds = number;
      resultArray.push(str);
    }
    console.log(resultArray);
    // for(let i = 0; i < resultArray.length; i++) {
    // let elem = resultArray[i];

    // }
    let j = resultArray.length - 1;
    let fix2 = resultArray[j];
    resultArray[j] = fix2.slice(0, fix2.length-2);
    if(resultArray.length > 1){
    let fix = resultArray[j - 1];
    resultArray[j - 1] = fix.slice(0, fix.length - 2) + " and ";
    }
    console.log(resultArray);
    console.log(resultArray.join(""));
    return resultArray.join("");
  }

  function helper(num, string) {
    let denominator;
    if (string === "years") {
      denominator = 31536000;
    } else if (string === "days") {
      denominator = 86400;
    } else if (string === "hours") {
      denominator = 3600;
    } else if (string === "minutes") {
      denominator = 60;
    } else if (string === "seconds") {
      denominator = 1;
    }
    let count = 0;
    while (num >= denominator) {
      num -= denominator;
      count += 1;
    }
    if (count === 1) {
      string = string.slice(0, string.length - 1);
    }
    return [`${count} ${string}, `, num];
  }
