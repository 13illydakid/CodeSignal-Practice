function solution(st) {
    //return checker("abcdcba");
    // "abcdc"+ "cdcba"
    // "abcdc"+ "dcba"
    // "abcdc"+ "cba"
    // "abcdc"+ "ba"
    // "abcdc"+ "a"
    if(checker(st) === true){
        return st;
    }
    let st2 = st.split("").reverse().join("");
    let i = st2.length - 1;
    console.log(i);
    console.log(st2);
    let string1 = st + st2.slice(i);
    console.log(string1);
    while(i >= 0){
        let string1 = st + st2.slice(i);
        // string += st;
        // let st3 = st.slice(i);
        // string += st3;
        if(checker(string1) === true){
            return string1;
        } else{
            i -= 1;
        }
        // let elem = checker(string1);
        // if(elem){
        //     //return string;
        //     console.log(string1);
        // }
        // i -= 1;
    }
}

function checker(string){
    let str = string.split("").reverse().join("");
    return str === string;
}
