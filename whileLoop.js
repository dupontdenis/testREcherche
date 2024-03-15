function countCharacterOccurrences(str, char) {
  let count = 0;
  let i = 0;
  while (i < str.length) {
    if (str[i] === char) {
      count++;
    }
    i++;
  }
  return count;
}
