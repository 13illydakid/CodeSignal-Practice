function solution(address) {
    let i = address.lastIndexOf("@");
    //console.log(i);
    return address.slice(i+1);
}
