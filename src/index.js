function capitalize(str) {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function allCaps(str) {
  return str.toUpperCase();
}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

function capitalizeHeadline(str) {
  const removedWords = [
    "the",
    "in",
    "a",
    "an",
    "and",
    "but",
    "for",
    "of",
    "at",
    "by",
    "from",
  ];
  return str
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return capitalize(word);
      } else if (removedWords.includes(word)) {
        return word;
      } else {
        return capitalize(word);
      }
    })
    .join(" ");
}

// console.log(capitalizeHeadline("a tale of two cities"));

function removeExtraSpaces(str) {
  return str
    .trim()
    .split(" ")
    .filter((word) => word !== "")
    .join(" ");
}

// console.log(removeExtraSpaces("   Hello   world!   "));

function kebobCase(str) {
  return str
    .replace(/[^\w\s]/gi, "")
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "")
    .join("-");
}

function snakeCase(str) {
  return str
    .replace(/[^\w\s]/gi, "")
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "")
    .join("_");
}

function camelCase(str) {
  str = str.replace(/[^\w\s]|_/g, "").trim();
  return str
    .split(" ")
    .map((word, index) => {
      if (index == 0) {
        return word.toLowerCase();
      } else {
        return capitalize(word);
      }
    })
    .join("");
}

function shift(str, num = 1) {
  const textToShift = str.substring(0, num);
  return str.slice(num) + textToShift;
}

function makeHashTag(str) {
  str = str.replace(/[^\w\s]/gi, "");
  const words = str.split(" ");
  if (words.length > 3) {
    words.sort((a, b) => b.length - a.length);
  }
  return words.map((word) => `#${capitalize(word)}`).slice(0, 3);
}

function isEmpty(str) {
  return str.trim().length === 0;
}

// export all functions
module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
  capitalizeHeadline,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
};
