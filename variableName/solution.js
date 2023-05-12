function solution(name) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let caps = letters.toUpperCase();
    letters += caps;
    let nums = "0123456789";
    letters += nums;
    letters += "_";
    if(nums.includes(name[0])){
        return false;
    }
    for(let i = 0; i < name.length; i++){
        let char = name[i];
        if(!letters.includes(char)){
            return false;
        }
    }
    return true;
}
