function permutations(string) {
    const number = string.length;
    const elements = string.split("");
    const set = new Set();
    unique(elements, 0, number-1, set);
    return Array.from(set);
      //return [];
  }
  function exchange(array, x, y){
      [array[x], array[y]] = [array[y], array[x]];
  }
  function unique(elem, left, right, set){
    if(left === right){
      set.add(elem.join(""));
    } else{
      for(let i = left; i <= right; i++){
        exchange(elem, left, i);
        unique(elem, left+1, right, set);
        exchange(elem, left, i);
      }
    }
  }
