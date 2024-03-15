function countCharacterOccurrences(str, char) {
  if (str.length === 0) {
    return 0;
  }
  return (
    (str[0] === char ? 1 : 0) + countCharacterOccurrences(str.slice(1), char)
  );
}
