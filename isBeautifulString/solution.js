function solution(inputString) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    for(let i = 0; i < inputString.length; i++){
        let char = inputString[i];
        if(obj[char]){
            obj[char] += 1;
        } else{
            obj[char] = 1;
        }
    }
    let arr = Object.keys(obj);
    for(let elem of arr){
        if(elem === "a"){
            continue;
        }
        let curr = obj[elem];
        let j = letters.indexOf(elem) - 1;
        let elem2 = letters[j];
        if(obj[elem2]){
            let prev = obj[elem2];
            if(curr > prev){
                return false;
            }
        } else{
            return false;
        }
        // let prev = obj[elem2];
        // if(curr > prev){
        //     return false;
        // }
    }
    return true;
}
