function topThreeWords(text) {
    let array = text.split(" ");
  //   console.log(array);
    let letters = "abcdefghijklmnopqrstuvwxyz'ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let j = 0; j < array.length; j++){
      let word = array[j];
      let word1 = "";
      for(let k = 0; k < word.length; k++){
        let char = word[k];
        if(letters.includes(char)){
          word1 += char;
        }
      }
      console.log(word1);
      array[j] = word1.toLowerCase();
    }
    console.log(array);
    let obj = {};
    for(let elem of array){
      if(elem === "" || elem === " " || elem === "'"){
        continue;
      }
      if(obj[elem] === undefined){
        obj[elem] = 1;
      } else{
        obj[elem] += 1;
      }
    }
    console.log(obj);
    let rank = Object.values(obj);
    let ranked = rank.sort((a,b)=>{
      return b-a;
    });
    let answer = [];
    console.log(ranked);
    for(let i = 0; i < 3; i++){
      let num = ranked[i];
      for(let key in obj){
        if(obj[key] === num){
          if(!answer.includes(key)){
          answer.push(key);
          }
        }
      }
    }
    if(answer.length > 3){
    let array2 = answer.slice(0, 2);
      let arr2 = answer.slice(2);
      let arr3 = arr2.sort((a,b)=>{
        return a-b;
      });
      console.log(arr3);
      let elem2 = arr3[0];
      array2.push(elem2);
      answer = array2;
    }
    return answer;
  }
