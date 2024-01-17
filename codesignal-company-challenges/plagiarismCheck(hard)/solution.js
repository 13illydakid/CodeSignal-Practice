function solution(code1, code2) {
  let code1Vars = findVars(code1);
  let code2Vars = findVars(code2);

  if(code1Vars.length === 0 || code2Vars.length === 0){
      return false;
  }

  for (let i = 0; i < code1.length; i++) {
      let string1 = code1[i];
      let string2 = code2[i];

      if (string1 !== string2) {
          let stringOne = codeSplitter(string1, code1Vars);
          let stringTwo = codeSplitter(string2, code2Vars);
          if (stringOne !== stringTwo) {
              console.log(stringOne);
              console.log(stringTwo);
              console.log(stringOne.split(""));
              console.log(stringTwo.split(""));
              console.log(stringOne.split("").join(""));
              console.log(stringTwo.split("").join(""));
              console.log(code1Vars);
              console.log(code2Vars);
              // if(!stringOne.includes(stringTwo) && !stringTwo.includes(stringOne)){
              //     return false;
              // }
              console.log(stringOne.includes(stringTwo));
              let tempString = "";
              for(let i = 0; i < stringOne.length; i++){
                  let char = stringOne[i];
                  if(char !== " "){
                      tempString += char;
                  }
              }
              console.log(tempString);
              console.log(tempString.split(""));
              let tempStringTwo = "";
              for(let i = 0; i < stringTwo.length; i++){
                  let char = stringTwo[i];
                  if(char !== " "){
                      tempStringTwo += char;
                  }
              }
              console.log(tempStringTwo);
              console.log(tempStringTwo.split(""));
              console.log(tempString.includes(tempStringTwo));

              // if(tempString.includes(tempStringTwo)){

              // } else{
              //     return false;
              // }

              if(stringOne.length === stringTwo.length){
                  console.log(stringOne);
                  console.log(stringTwo);
                  for(let h = 0; h < stringOne.length; h++){
                      let oneChar = stringOne[h];
                      let twoChar = stringTwo[h];
                      if(oneChar !== twoChar){
                          // if(oneChar === " " || twoChar === " "){
                          if((isNaN(Number(oneChar)) === false && isNaN(Number(twoChar)) === true) || (isNaN(Number(oneChar)) === true && isNaN(Number(twoChar)) === false)){

                          } else{
                              return false;
                          }
                      }
                  }
              } else{
                  return false;
              }
              // return false;
          }
      }
  }
  return true;
}
function findVars(code) {
  let vars = [];
  for (let line of code) {
      let start = line.indexOf("(");
      let end = line.indexOf(")");
      if (start !== -1 && end !== -1 && start + 1 !== end) {
          let lineVars = line.slice(start + 1, end).split(",");
          for (let varName of lineVars) {
              varName = varName.trim(); // Remove potential spaces around variables
              if (!vars.includes(varName)) {
                  vars.push(varName);
              }
          }
      }
  }
  return vars;
}

function codeSplitter(codeString, varArray) {
  if (varArray.length === 0) {
      return codeString;
  }

  for(let i = 0; i < varArray.length; i++){
      let varCurr = varArray[i];
      while(codeString.includes(varCurr)){
          let j = codeString.indexOf(varCurr);
          codeString = codeString.replace(varCurr, `${i}`);
          // codeString = codeString.slice(0, j) + codeString.slice(j+1);
      }
  }
  return codeString;

  // let varA = varArray[0];
  // let varB = varArray[1];

  // while (codeString.includes(varA) || codeString.includes(varB)) {
  //     if (codeString.includes(varA)) {
  //         codeString = codeString.replace(varA, "");
  //     }
  //     if (codeString.includes(varB)) {
  //         codeString = codeString.replace(varB, "");
  //     }
  // }
  // return codeString;
}
