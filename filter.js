function countCharacterOccurrences(str, char) {
  return [...str].filter((c) => c === char).length;
}
