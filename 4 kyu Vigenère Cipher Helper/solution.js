//function VigenèreCipher(key, abc)
const abc = "abcdefghijklmnopqrstuvwxyz";
console.log(abc.indexOf("c"));
console.log(abc.indexOf("r"));
  function encode(str, key) {
    let newString = "";
    for(let i = 0; i < str.length; i++){
      let char = str[i];
      let j;
      if(abc.indexOf(char) !== -1){
        j = abc.indexOf(char);
        j -= key;
      if(j < 0){
        j += 26;
      }
      }
      if(j){
        newString += abc[j];
      } else{
        newString += char;
      }
    }
    return newString;
    //...
  }
//decode is +
  function decode(str) {
    let newString = "";
    for(let i = 0; i < str.length; i++){
      let char = str[i];
      let j = abc.indexOf(char);
      j -= key;
      if(j < 0){
        j += 26;
      }
      newString += abc[j];
    }
    return newString;
    //...
  }
let example = encode("codewars", 11);
console.log(example);
/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
c = new VigenèreCipher(key, abc);

Test.assertEquals(c.encode('codewars'), 'rovwsoiv');
Test.assertEquals(c.decode('rovwsoiv'), 'codewars');

Test.assertEquals(c.encode('waffles'), 'laxxhsj');
Test.assertEquals(c.decode('laxxhsj'), 'waffles');

Test.assertEquals(c.encode('CODEWARS'), 'CODEWARS');
Test.assertEquals(c.decode('CODEWARS'), 'CODEWARS');

  });
});
*/
function bowlingScore(frames) {
  // Figure out the score!
  let score = 0;
  let frame = frames.split(' ');
  if(frames.replace(/\s/g, "") === 'XXXXXXXXXXXX'){
    score = 300;
  } else{
    for(let i = 0; i < frame.length; i++){
      if(i === frame.length - 1){
        frame = frame[i].split('');
        for(let j = 0; j < frame.length; j++){
          !isNaN(frame[j]) && frame[j+1] !== '/'? score = score + parseInt(frame[j])
          : frame[j] === 'X' || frame[j] === '/' ? score = score + 10
          : null
        }
      } else {
        !isNaN(frame[i]) ? score = score + parseInt(frame[i][0]) + parseInt(frame[i][1])
        : frame[i].includes('X') && !isNaN(frame[i+1]) ? score = score + 10 + parseInt(frame[i+1][0]) + parseInt(frame[i+1][1])
        : frame[i].includes('/') && !isNaN(frame[i+1]) ? score = score + 10 + parseInt(frame[i+1][0])
        : null
      }
    }
  }
  return score;
}
