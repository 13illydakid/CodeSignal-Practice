function solution(words) {
    const [word1, word2, word3, word4] = words;
    //console.log(word2);
    let positionsArray = [1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, 2413, 2431, 3412, 3421, 3124, 3142, 3214, 3241, 4312, 4321, 4123, 4132, 4213, 4231];
    let arrayArray = [];
    for (let elem of positionsArray) {
      let array = arrayHelper(elem, words);
      //console.log(array);
      arrayArray.push(array);
    }

  }

  function arrayHelper(num, arr) {
    const [word1, word2, word3, word4] = arr;
    let numString = num.toString();
    let array = [];
    for (let i = 0; i < numString.length; i++) {
      let number = numString[i];
      if (number === "1") {
        array.push(word1);
      } else if (number === "2") {
        array.push(word2);
      } else if (number === "3") {
        array.push(word3);
      } else if (number === "4") {
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
