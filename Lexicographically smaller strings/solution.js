function solution(s, t) {
    let count = 0;

    // Iterate through each character in s
    for (let i = 0; i < s.length; i++) {
      const char = s[i];

      // Check if the character is a digit
      if (isDigit(char)) {
        // Remove the digit from s and compare with t
        const newS = s.slice(0, i) + s.slice(i + 1);
        if (newS < t) {
          count++;
        }
      }
    }

    // Iterate through each character in t
    for (let i = 0; i < t.length; i++) {
      const char = t[i];

      // Check if the character is a digit
      if (isDigit(char)) {
        // Remove the digit from t and compare with s
        const newT = t.slice(0, i) + t.slice(i + 1);
        if (s < newT) {
          count++;
        }
      }
    }

    return count;
  }

  // Helper function to check if a character is a digit
  function isDigit(char) {
    return /[0-9]/.test(char);
  }
