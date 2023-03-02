function solution(n) {
    return 2 ** (getPosition(n.toString(2).split("").reverse().join(""), "0", 2));
  }
  function getPosition(string, subString, index) {
    // let elem = getPosition(n.toString(2).split("").reverse().join(""), "0", 2);
    // console.log(n.toString(2));
    // console.log(elem);
    return string.split(subString, index).join(subString).length;
  }
