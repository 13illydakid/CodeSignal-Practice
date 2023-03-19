// Return the output array, and ignore all non-op characters
function parse( data ){
    let array = [];
    let value = 0;
    let dataArray = data.split("");
    for(let char of dataArray){
      if(char === "i"){
        value += 1;
      } else if(char === "d"){
        value -= 1;
      } else if(char === "s"){
        value = (value * value);
      } else if(char === "o"){
        array.push(value);
      }
    }
    return array;
  }
