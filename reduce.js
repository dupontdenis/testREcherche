function countCharacterOccurrences(str, char) {
  return [...str].reduce((count, c) => (c === char ? ++count : count), 0);
}
