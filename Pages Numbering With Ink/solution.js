function solution(current, numberOfDigits) {
    while(numberOfDigits >= current.toString().length){
        numberOfDigits -= current.toString().length;
        current += 1;
    if(current.toString().length > numberOfDigits){
        return current - 1;
    } else if(current.toString().length === numberOfDigits){
        return current;
    }
    }
}
