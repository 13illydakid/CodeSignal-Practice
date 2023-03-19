function solution(input, markers) {
    let array = input.split("\n");
    let newArray = [];
    for(let elem of array){
      let index;
      for(let i = 0; i < elem.length; i++){
        let char = elem[i];
        if(markers.includes(char)){
          index = i;
          break;
        }
      }
      if(index){
        let newString = elem.slice(0, index);
        newArray.push(newString.trimEnd());
      } else {
        newArray.push(elem);
      }
    }
    return newArray.join("\n");
  };
