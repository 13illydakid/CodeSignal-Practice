function solution(number, width) {
  let string = number.toString();
  while(string.length < width){
      string = "0" + string;
  }
  while(string.length > width){
      string = string.slice(1);
  }
  console.log(string);
  return string;
}
