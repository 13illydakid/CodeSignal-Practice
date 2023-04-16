// function solution(names) {
//     let obj = {};
//     let newArray = [];
//     for(let i = 0; i < names.length; i++){
//         let elem = names[i];
//         if(!obj[elem]){
//             obj[elem] = 1;
//             newArray.push(elem);
//         } else{
//             let digit = obj[elem];
//             let str = `${elem}(${digit})`;
//             if(!obj[str]){
//                 obj[str] = 1;
//             newArray.push(str);
//             } else{
//                 digit += 1;
//             let newStr = `${elem}(${digit})`;
//             newArray.push(newStr);
//             obj[newStr] = 1;
//             }
//             obj[elem] += 1;
//         }
//     }
//     //console.log(newArray);
//     // for(let str1 of newArray){
//     //     str1 = "hello";
//     // }
//     /*
//     for(let j = 0; j < newArray.length; j++){
//         let word = newArray[j];
//         if(!isUnique(word, newArray)){
//             let count = 1;
//             for(let k = 1; k+j < newArray.length; k++){
//                 let word2 = newArray[j+k];
//                 if(word2 === word){
//                     newArray[j+k] = `${word}(${count})`;
//                     count += 1;
//                 }
//             }
//         }
//         //newArray[j] = "jello";
//     }
//     */
//     console.log(newArray);
//     return newArray;
// }

// function isUnique(string, array){
//     let i = array.indexOf(string);
//     array.splice(i, 1);
//     return !array.includes(string);
// }

function solution(names) {
    let obj = {};
    let newArray = [];
    for(let i = 0; i < names.length; i++){
        let elem = names[i];
        if(!obj[elem]){
            obj[elem] = 1;
            newArray.push(elem);
            //console.log(elem);
        } else{
            //obj[elem] += 1;
            let digit = obj[elem];
            let str = `${elem}(${digit})`;
            if(!obj[str]){
                obj[str] = 1;
            newArray.push(str);
            } else{
                //obj[str] += 1;
            obj[elem] += 1;
                digit += 1;
            let newStr = `${elem}(${digit})`;
            let newerStr = recursive(obj, newStr);
            newArray.push(newerStr);
            obj[newerStr] = 1;
            }
            obj[elem] += 1;
        }
    }
    console.log(newArray);
    return newArray;
}
function recursive(object, element){
        //let array = element.split("").reverse();
        let array = element.split("");
        let arr = [];
        let start;
        for(let i = array.length - 1; i >= 0; i--){
            let char = array[i];
            let num = Number(char);
            if(!isNaN(num)){
                arr.unshift(char);
            } else{
                start = i;
                break;
            }
        }
        let number = Number(arr.join("")) + 1;
        // let end = array.length - array.indexOf(")");
        // let start = array.length - array.indexOf("(");
        //let newElem = element.slice(start - 1, end);
        //let number = Number(newElem) + 1;
        let copied = element.slice(0, start);
        let newerElem = `${copied}(${number})`;
    if(object[element]){
        return recursive(object, newerElem);
    } else{
        return element;
    }
}

/*
function isUnique(string, array){
    let i = array.indexOf(string);
    array.splice(i, 1);
    return !array.includes(string);
}
*/
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
