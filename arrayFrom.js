function countCharacterOccurrences(str, char) {
  return Array.from(str, (c) => (c === char ? 1 : 0)).reduce(
    (a, b) => a + b,
    0
  );
}
