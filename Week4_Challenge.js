function LongestWord(sen) { 
  let words = sen.match(/\w+/g);
  let longest = words[0];
  for (let i=0; i<words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i]
    }
  }
  return longest;
}

console.log(LongestWord(readline()));
