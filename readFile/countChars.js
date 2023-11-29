const countFunc = (char, string) => {
  return string.split(char).length - 1;
};

module.exports = countFunc;

/*const countFunc = (word, letter) => {
  let new_word = word.split("");
  let counters = new Map();
  for (let i = 0; i < word.length; i++) {
    if (!counters[new_word[i]] && new_word[i] !== " ") {
      counters[new_word[i]] = 0;
    }
    if (new_word[i] !== " ") {
      counters[new_word[i]] += 1;
    }
  }
  if (!counters[letter]) {
    return "letter not found";
  }

  //console.log(counters);
  return counters[letter];
};

module.exports = countFunc;*/
