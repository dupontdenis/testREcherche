function countCharacterOccurrences(str, char) {
  let count = 0;
  [...str].some((c) => {
    if (c === char) {
      count++;
    }
    return false;
  });
  return count;
}
