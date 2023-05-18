function solution(words) {
  const [word1, word2, word3, word4] = words;
  //console.log(word2);
  let positionsArray = [1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, 2413, 2431, 3412, 3421, 3124, 3142, 3214, 3241, 4312, 4321, 4123, 4132, 4213, 4231];
  let arrayArray = [];
  for(let elem of positionsArray){
      let array = arrayHelper(elem, words);
      //console.log(array);
      arrayArray.push(array);
  }
  for(let i = 0; i < arrayArray.length; i++){
      let arr = arrayArray[i];
      let topLeft = crossTwoWords(arr[0], arr[2]);
      for(let j = 0; j < topLeft.length; j++){
          let coordinate = topLeft[j];
          let verticalIndex = coordinate[1] + 1;
          let count = 0;
          for(let h = verticalIndex; h < arr[2].length; h++){
              let char = arr[2][h];
              count += 1;
              let string = arr[1].slice();
                  let bottomLeft = string.indexOf(char);
              while(bottomLeft !== -1){
                  let r = bottomLeft + 1;
                  for(let u = 0; u + r < arr[1].length; u++){
                      let start = u + r;
                      let char3 = arr[1][start];
                      if(arr[3].indexOf(char3) !== -1){

                      }
                  }
              }
              for(let k = 0; k < arr[1].length; k++){

              }
          }
      }
  }
}
function crossTwoWords(w1, w3){
  let matrix = [];
  for(let i = 0; i < w1.length; i++){
      let char = w1[i];
      let index = w3.indexOf(char);
      let string = w3.slice();
      while(index !== -1){
          matrix.push([i, index]);
          string = string.slice(0, index) + string.slice(index + 1);
          index = string.indexOf(char);
      }
  }
  console.log(matrix);
  return matrix;
}

function arrayHelper(num, arr){
  const [word1, word2, word3, word4] = arr;
  let numString = num.toString();
  let array = [];
  for(let i = 0; i < numString.length; i++){
      let number = numString[i];
      if(number === "1"){
          array.push(word1);
      } else if(number === "2"){
          array.push(word2);
      } else if(number === "3"){
          array.push(word3);
      } else if(number === "4"){
          array.push(word4);
      }
  }
  return array;
}
  words = ["crossword", "square", "formation", "something"];


  let positionsArray = [1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, 2413, 2431, 3412, 3421, 3124, 3142, 3214, 3241, 4312, 4321, 4123, 4132, 4213, 4231];

  for (let elem of positionsArray) {
    console.log(typeof elem);
  }
