function solution(picture) {
    let str = "";
    while(str.length !== (picture[0].length + 2)){
        str += "*";
    }
    //console.log(str);
    for(let i = 0; i < picture.length; i++){
        let elem = picture[i].split("");
        elem.push("*");
        elem.unshift("*");
        picture[i] = elem.join("");
    }
    picture.unshift(str);
    picture.push(str);
    return picture;
}
