function narcissistic(value) {
    // Code me to return true or false
    let string = value.toString();
    let num = string.length;
    let count = 0;
    for(let elem of string.split("")){
      count += (Number(elem) ** num);
    }
    return count === value;
  }
