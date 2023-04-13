function helper(string){
    let elem = string.find(x => {
      string.every(y => {
        x[0] !== y[1];
      });
    });
    if(string.length > 1){
      return elem[0];
    } else{
      return string[0];
    }
  }

  var recoverSecret = function(triplets) {
    let array = [];
    let string = "";
    for(let arr of triplets){
      let arrString = arr.join("");
      let str1 = arrString.substr(0, 2);
      let str2 = arrString.substr(1, 3);
      if(!array.includes(str1)){
        array.push(str1);
      }
      if(!array.includes(str2)){
        array.push(str2);
      }
    }
    let element = helper(array);
    while(element){
      string += element;
      array = array.filer(i => i.indexOf(element) === -1);
      element = helper(array);
    }
    return string;
  }
