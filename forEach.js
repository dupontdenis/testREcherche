function countCharacterOccurrences(str, char) {
  let count = 0;
  [...str].forEach((c) => {
    if (c === char) {
      count++;
    }
  });
  return count;
}
