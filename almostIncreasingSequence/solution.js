function solution(sequence) {
    let count = 0;
    for(let i = 0; i < sequence.length; i++){
        if(sequence[i] <= sequence[i-1]){
            count += 1;
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
                return false;
            }
        }
    }
    return count <= 1;
}
