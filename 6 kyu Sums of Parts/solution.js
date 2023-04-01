function partsSums(ls) {
    // your code
  let num = ls.reduce((current, number) => {
    return current + number;
  }, 0);
  let array = [num];
  for(let i = 0; i < ls.length; i++){
    let elem = ls[i];
    num -= elem;
    array.push(num);
  }
  return array;
}
