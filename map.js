function countCharacterOccurrences(str, char) {
  return [...str].map((c) => (c === char ? 1 : 0)).reduce((a, b) => a + b, 0);
}
