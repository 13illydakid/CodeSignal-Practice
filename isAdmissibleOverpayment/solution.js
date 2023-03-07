function solution(prices, notes, x) {
    let actualPrice = [];
    for(let i = 0; i < notes.length; i++){
        let onlinePrice = prices[i];
        let numerator = 100;
        let string = notes[i];
        let compare;
        let fraction;
        if(!string.includes("%")){
            //compare = "=";
            actualPrice.push(onlinePrice);
            continue;
        } else{
            if(string.includes("higher")){
                compare = "+";
            } else if(string.includes("lower")){
                compare = "-";
            }
            let j = string.indexOf("%");
            fraction = string.slice(0, j);
        }
        if(compare === "+"){
            let actual = (onlinePrice / (eval(`${numerator} + ${fraction}`) / 100)).toFixed(4);
            actualPrice.push(actual);
        } else if(compare === "-"){
            let actual = (onlinePrice / (eval(`${numerator} - ${fraction}`) / 100)).toFixed(4);
            actualPrice.push(actual);
        }
    }
    let count = 0;
    for(let j = 0; j < actualPrice.length; j++){
        let num1 = prices[j];
        let num2 = actualPrice[j];
        count += (num1 - num2);
    }
    console.log(actualPrice);
    console.log(count);
    if(count > x){
        return false;
    } else{
        return true;
    }
}
