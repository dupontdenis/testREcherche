function countCharacterOccurrences(str, char) {
  let matches = str.match(new RegExp(char, "g"));
  return matches ? matches.length : 0;
}
