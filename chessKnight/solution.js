function solution(cell) {
    let letter = "abcdefgh";
    letter = letter.split("");
    let number = "12345678";
    number = number.split("");
    let moves = [];
    for(let i = 0; i < letter.length; i++){
        let char = letter[i];
        for(let v = 0; v < number.length; v++){
            let num = number[v];
            let space = char + num;
            moves.push(space);
        }
    }
    let horiz = cell.slice(0, 1);
    let index = letter.indexOf(horiz);
    let vert = cell.slice(1);
    vert = parseInt(vert);
    let choices = [];
    //let up = 1;
    //let down = 1;
    for(let j = 2; j < 3; j++){
        let up = vert + 1;
        up = up.toString();
        let down = vert - 1;
        down = down.toString();
        if(moves.includes(letter[index+j]+up)){
            choices.push(letter[index+j]+up);
        }
        if(moves.includes(letter[index+j]+down)){
            choices.push(letter[index+j]+down);
        }
        if(moves.includes(letter[index-j]+up)){
            choices.push(letter[index-j]+up);
        }
        if(moves.includes(letter[index-j]+down)){
            choices.push(letter[index-j]+down);
        }
        let upTwo = vert + 2;
        upTwo = upTwo.toString();
        let downTwo = vert - 2;
        downTwo = downTwo.toString();
        if(moves.includes(letter[index+1]+upTwo)){
            choices.push(letter[index+1]+upTwo);
        }
        if(moves.includes(letter[index+1]+downTwo)){
            choices.push(letter[index+1]+downTwo);
        }
        if(moves.includes(letter[index-1]+upTwo)){
            choices.push(letter[index-1]+upTwo);
        }
        if(moves.includes(letter[index-1]+downTwo)){
            choices.push(letter[index-1]+downTwo);
        }
    }
    return choices.length;
    //console.log(choices);
}
