function solution(statues) {
    statues.sort((a,b)=>{
        return a-b;
    });
    let min = statues[0];
    let max = statues[statues.length-1];
    console.log(max);
    let diff = max - (min + 1);
    return diff - (statues.length - 2);
}
