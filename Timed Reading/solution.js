function solution(maxLength, text) {
  let wordCount = 0;
  const words = text.split(/[^a-zA-Z]+/);
  console.log(words);
  for (const word of words) {
    if (word.length === 0) {
      continue;
    }
    console.log(word);
    if (word.length <= maxLength) {
      wordCount++;
    }
  }
  return wordCount;
}
