function solution(a) {
    return parseInt(a.map( x => ('0'.repeat(8) + x.toString(2)).slice(-8)).reverse().join(''), 2);
}
