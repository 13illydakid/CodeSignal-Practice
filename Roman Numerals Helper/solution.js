class RomanNumerals {
    static toRoman(num) {
      //return 'IV';
      let obj = {};
      let array = num.toString().split("").reverse();
      let string = "";
      for(let i = 0; i < array.length; i++){
        let elem = array[i];
        let amount = 4 - i;
        if(elem !== "0"){
          let count = Number(elem);
          if(amount === 4){
            let char = "M";
            //string += `${char.repeat(Number(elem))}`;
            string += `${char.repeat(count)}`;
          } else if(amount === 3){
            if(count === 1){
              string += "C";
            } else if(count === 5){
              string += "D";
            } else if(count < 5){
              if(count === 4){
                string += "CD";
              } else{
                string += "C".repeat(count);
              }
            } else if(count < 9){
              let numbering = count - 5;
              string += "D";
              string += "C".repeat(numbering);
            } else if(count === 9){
              string += "CM";
            }
          } else if(amount === 2){
            if(count === 1){
              string += "X";
            } else if(count === 5){
              string += "L";
            } else if(count < 5){
              if(count === 4){
                string += "XL";
              } else{
                string += "X".repeat(count);
              }
            } else if(count < 9){
              let numbering = count - 5;
              string += "L";
              string += "X".repeat(numbering);
            } else if(count === 9){
              string += "XC";
            }
          } else if(amount === 1){
            if(count === 1){
              string += "I";
            } else if(count === 5){
              string += "V";
            } else if(count < 5){
              if(count === 4){
                string += "IV";
              } else{
                string += "I".repeat(count);
              }
            } else if(count < 9){
              let numbering = count - 5;
              string += "V";
              string += "I".repeat(numbering);
            } else if(count === 9){
              string += "IX";
            }
          }
        }
      }
    }

    static fromRoman(str) {
      return 4;
    }
  }
