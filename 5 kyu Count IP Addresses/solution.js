// function ipsBetween(start, end){
//     //TODO
//     let num1 = Number(start.split(".").join(""));
//     let num2 = Number(end.split(".").join(""));
//     let startArr = start.split(".");
//     let endArr = end.split(".");
//     let bigger;
//     let smaller;
//     for(let i = 0; i < startArr.length; i++){
//       let starting = startArr[i];
//       let ending = endArr[i];
//       if(Number(starting) > Number(ending)){
//         bigger = start;
//         smaller = end;
//         break;
//       } else if(Number(starting) < Number(ending)){
//         bigger = end;
//         smaller = start;
//         break;
//       }
//     }

//   }
function ipsBetween(start, end){
  //TODO
  let num1 = Number(start.split(".").join(""));
  let num2 = Number(end.split(".").join(""));
  let startArr = start.split(".");
  let endArr = end.split(".");
  let bigger;
  let smaller;
  for(let i = 0; i < startArr.length; i++){
    let starting = startArr[i];
    let ending = endArr[i];
    if(Number(starting) > Number(ending)){
      bigger = start;
      smaller = end;
      break;
    } else if(Number(starting) < Number(ending)){
      bigger = end;
      smaller = start;
      break;
    }
  }
  let large = bigger.split(".").reverse();
  let small = smaller.split(".").reverse();
  let obj = {};
  for(let i = 0; i < large.length; i++){
    let elem1 = Number(large[i]);
    let elem2 = Number(small[i]);
    obj[i] = (elem1 - elem2);
  }
  let count = 0;
  for(let key in obj){
    let product = obj[key] * (256 ** Number(key));
    count += product;
  }
  console.log(count);
  return count;
}
