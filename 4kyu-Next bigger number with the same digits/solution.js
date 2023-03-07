function nextBigger(n){
    console.log(n);
    //your code here
    let array = n.toString().split("");
    if(array.length === 1){
      return -1;
    }
    for(let i = array.length-1; i > 0; i--){
      let curr = array[i];
      let prev = array[i-1];
      if(Number(prev) < Number(curr)){
        array[i] = prev;
        array[i-1] = curr;
        let newArray = array.slice(i-1);
        array = array.slice(0, i-1).concat(recursive(newArray, newArray.length-1));
  //       for(let j = array.length-1; j > i; j--){
  //         let currJ = array[j];
  //         let prev
  //       }
        break;
      }
    }
    let num = Number(array.join(""));
    if(num === n){
      return -1;
    } else{
      return num;
    }
  }
  function recursive(arr, start){
    console.log(arr);

    if(start === 0){
      return arr;
    }
    for(let i = start; i > 0; i--){
      let curr = arr[i];
      let prev = arr[i-1];
      if(Number(prev) > Number(curr)){
        arr[i] = prev;
        arr[i-1] = curr;
        let array1 = arr.slice(i-1);

        arr = arr.slice(0, i-1).concat(recursive(array1, array1.length-1));
        break;
      }
    }
    return arr;
  }
