function solution(filename1, filename2) {
    let order = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //console.log(order.length);
    let longest = filename1.length;
    if(filename2.length > filename1.length){
        longest = filename2.length;
    }
    for(let i = 0; i < longest; i++){
        let a = filename1[i];
        let b = filename2[i];
        let a1 = order.indexOf(a);
        let b1 = order.indexOf(b);

    }
}
