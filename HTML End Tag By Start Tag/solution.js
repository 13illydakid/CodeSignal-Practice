function solution(startTag) {
    let i = startTag.indexOf(" ");
    let string = startTag.slice(1, i);
    return "</" + string + ">";
}
