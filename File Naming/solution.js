function solution(names) {
    let obj = {};
    let newArray = [];
    for(let i = 0; i < names.length; i++){
        let elem = names[i];
        if(!obj[elem]){
            obj[elem] = 1;
            newArray.push(elem);
        } else{
            let digit = obj[elem];
            let str = `${elem}(${digit})`;
            if(!obj[str]){
                obj[str] = 1;
            newArray.push(str);
            } else{
                digit += 1;
            let newStr = `${elem}(${digit})`;
            newArray.push(newStr);
            obj[newStr] = 1;
            }
            obj[elem] += 1;
        }
    }
    //console.log(newArray);
    // for(let str1 of newArray){
    //     str1 = "hello";
    // }
    /*
    for(let j = 0; j < newArray.length; j++){
        let word = newArray[j];
        if(!isUnique(word, newArray)){
            let count = 1;
            for(let k = 1; k+j < newArray.length; k++){
                let word2 = newArray[j+k];
                if(word2 === word){
                    newArray[j+k] = `${word}(${count})`;
                    count += 1;
                }
            }
        }
        //newArray[j] = "jello";
    }
    */
    console.log(newArray);
    return newArray;
}

function isUnique(string, array){
    let i = array.indexOf(string);
    array.splice(i, 1);
    return !array.includes(string);
}
