function solution(param1, param2) {
    let str1 = param1.toString().split("");
    let str2 = param2.toString().split("");
    let short;
    let long;
    if(str1.length < str2.length){
        short = str1;
        long = str2;
    } else{
        short = str2;
        long = str1;
    }
    for(let i = 0; i < short.length; i++){
        let num1 = short[short.length - (1+i)];
        let num2 = long[long.length - (1+i)];
        let num3 = eval(num1 + " + " + num2).toString();
        long[long.length - (1+i)] = num3[num3.length-1];
    }
    //console.log(str1[0]);
    return Number(long.join(""));
}
