function solution(s) {
    let array = [];
    for(let i = 0; i < s.length; i++){
        let str = "";
        let char = s[i];
        str += char;
        let j = 1;
        let next = s[i+j];
        while(char === next){
            str += next;
            j += 1;
            next = s[i+j];
        }
        i += (j - 1);
        array.push(str);
    }
    let string = "";
    for(let elem of array){
        let char1 = elem[0];
        let num = elem.length;
        if(num > 1){
            let num1 = num.toString();
            string += num1;
        }
        string += char1;
    }
    //console.log(array);
    return string;
}


// function solution(s) {
//     let obj = {};
//     for(let i = 0; i < s.length; i++){
//         let char = s[i];
//         if(obj[char]){
//             obj[char] += 1;
//         } else{
//             obj[char] = 1;
//         }
//     }
//     let string = "";
//     for(let key in obj){
//         let num = obj[key];
//         if(num > 1){
//         num = num.toString();
//         string += num;
//         }
//         string += key;
//     }
//     return string;
// }
