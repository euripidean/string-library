function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// console.log(capitalize("hello world"));

function allCaps(str) {
  return str.toUpperCase();
}

// console.log(allCaps("foo bar"));

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

// console.log(capitalizeWords("do all the things"));

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

// console.log(kebobCase("!!Is this thing working?"));

function snakeCase(str) {
  return str
    .replace(/[^\w\s]/gi, "")
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "")
    .join("_");
}

// console.log(snakeCase("  ??what the    heck   "));

function camelCase(str) {
  return str
    .split(" ")
    .map((word, index) => {
      if (index > 0) {
        return capitalize(word);
      } else {
        return word.toLowerCase();
      }
    })
    .join("");
}

// console.log(camelCase("camel case"));

function shift(str, num) {
  const textToShift = str.substring(0, num);
  return str.slice(num) + textToShift;
}

// console.log(shift("string", 2));

function makeHashTag(str) {
  const words = str.split(" ");
  if (words.length > 3) {
    words.sort((a, b) => b.length - a.length);
  }
  return words.map((word) => `#${capitalize(word)}`).slice(0, 3);
}

// console.log(makeHashTag("One"));

function isEmpty(str) {
  return str.trim().length === 0;
}
