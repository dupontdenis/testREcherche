function countCharacterOccurrences(str, char) {
  let count = 0;
  let i = 0;
  do {
    if (str[i] === char) {
      count++;
    }
    i++;
  } while (i < str.length);
  return count;
}
