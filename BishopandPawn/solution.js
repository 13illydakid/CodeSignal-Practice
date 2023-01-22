function solution(bishop, pawn) {
    let chars = ["a", "c", "e", "g"];
    let chars2 = ["b", "d", "f", "h"];
    let array = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let dark = [];
    let white = [];
    for(let i = 0; i < chars.length; i++){
        let elem = chars[i];
        for(let v = 1; v < 9; v++){
            let string;
            if(v % 2 === 0){
                string = elem + v.toString();
                white.push(string);
            } else{
                string = elem + v.toString();
                dark.push(string);
            }
        }
    }
    for(let j = 0; j < chars2.length; j++){
        let current = chars2[j];
        for(let n = 1; n < 9; n++){
            let str;
            if(n % 2 === 0){
                str = current + n.toString();
                dark.push(str);
            } else{
                str = current + n.toString();
                white.push(str);
            }
        }
    }
    let every = dark.concat(white);
    /*
    if((dark.includes(bishop)) && (!dark.includes(pawn))){
        return false;
    }
    if((white.includes(bishop)) && (!white.includes(pawn))){
        return false;
    }
    */
    console.log(array);
    console.log(every);
    let positions = [];
        let character = bishop[0];
        let ind = array.indexOf(character);
        console.log(ind);
        let increase = bishop.slice(1);
        increase = parseInt(increase);
        let decrease = bishop.slice(1);
        decrease = parseInt(decrease);
        //console.log(increase);
        for(let i = 1; ind+i < array.length; i++){
            //let element = array[ind+i];
            increase += 1;
            decrease -= 1;
            let elementUp = array[ind+i]+(increase.toString());
            //console.log(elementUp);
            let elementDown = array[ind+i]+(decrease.toString());
            //console.log(elementUp);
            if(every.includes(elementUp)){
                positions.push(elementUp);
            }
            if(every.includes(elementDown)){
                positions.push(elementDown);
            }
        }
        let positive = bishop.slice(1);
        positive = parseInt(positive);
        let negative = bishop.slice(1);
        negative = parseInt(negative);
        //console.log(positive);
        //console.log(positive);
        for(let v = 1; ind-v >= 0; v++){
            //let element = array[ind+i];
            positive += 1;
            negative -= 1;;
           // if
            let elementFront = array[ind-v]+(positive.toString());
            let elementBack = array[ind-v]+(negative.toString());
            console.log(elementFront);
            if(every.includes(elementFront)){
                positions.push(elementFront);
            }
            if(every.includes(elementBack)){
                positions.push(elementBack);
            }
        }
    console.log(positions);
    if(positions.includes(pawn)){
        return true;
    } else{
        return false;
    }
}
