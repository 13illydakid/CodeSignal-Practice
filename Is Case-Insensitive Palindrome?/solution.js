function solution(inputString) {
    let str = inputString.toLowerCase();
    let half;
    let isOdd;
    if(str.length % 2 === 0){
        half = str.length / 2;
        isOdd = false;
    } else{
        half = Math.floor(str.length / 2);
        isOdd = true;
    }
    if(!isOdd){
        let str1 = str.slice(0, half);
        let str2 = str.slice(half).split("").reverse().join("");
        return str1 === str2;
    } else{
        let str1 = str.slice(0, half);
        let str2 = str.slice(half+1).split("").reverse().join("");
        return str1 === str2;
    }
}
