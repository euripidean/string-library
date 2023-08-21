const {
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
} = require("../src/index");

describe("capitalize", () => {
  it("capitalizes the first letter of a word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("capitalizes the first letter of a sentence", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });

  it("capitalizes only the first letter when the word is all caps", () => {
    expect(capitalize("HELLO")).toBe("Hello");
  });
});

describe("allCaps", () => {
  it("capitalizes all letters in a word", () => {
    expect(allCaps("hello")).toBe("HELLO");
  });

  it("capitalizes all letters in a sentence", () => {
    expect(allCaps("hello world")).toBe("HELLO WORLD");
  });

  it("capitalizes all letters when the word is all caps", () => {
    expect(allCaps("HELLO")).toBe("HELLO");
  });
});

describe("capitalizeWords", () => {
  it("capitalizes the first letter of every word in a sentence", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  it("capitalizes the first letter of every word in a sentence with all caps", () => {
    expect(capitalizeWords("HELLO WORLD")).toBe("Hello World");
  });

  it("capitalizes the first letter of every word in a sentence with mixed caps", () => {
    expect(capitalizeWords("HeLLo WoRLd")).toBe("Hello World");
  });
});

describe("capitalizeHeadline", () => {
  it("capitalizes the first letter of every word in a sentence", () => {
    expect(capitalizeHeadline("hello world")).toBe("Hello World");
  });

  it("capitalizes the first letter of every word in a sentence with all caps", () => {
    expect(capitalizeHeadline("HELLO WORLD")).toBe("Hello World");
  });

  it("capitalizes the first letter of every word in a sentence with mixed caps", () => {
    expect(capitalizeHeadline("HeLLo WoRLd")).toBe("Hello World");
  });

  it("does not capitalize articles, coordinating conjunctions, or prepositions", () => {
    expect(capitalizeHeadline("a tale of two cities")).toBe(
      "A Tale of Two Cities"
    );
    expect(capitalizeHeadline("in the heat of the night")).toBe(
      "In the Heat of the Night"
    );
  });
});

describe("removeExtraSpaces", () => {
  it("removes all spaces from the beginning and end of a string", () => {
    expect(removeExtraSpaces("   Hello world!   ")).toBe("Hello world!");
  });

  it("removes extra spaces from the middle of a string", () => {
    expect(removeExtraSpaces("Hello     world!")).toBe("Hello world!");
  });
});

describe("kebobCase", () => {
  it("replaces spaces with hyphens and makes all letters lowercase", () => {
    expect(kebobCase("hello world")).toBe("hello-world");
  });

  it("replaces spaces with hyphens and makes all letters lowercase with all caps", () => {
    expect(kebobCase("HELLO WORLD")).toBe("hello-world");
  });

  it("replaces spaces with hyphens and makes all letters lowercase with mixed caps", () => {
    expect(kebobCase("HeLLo WoRLd")).toBe("hello-world");
  });

  it("replaces spaces with hypens and makes all letters lower case on complex strings", () => {
    expect(kebobCase("This is an example of a COMPLEX string")).toBe(
      "this-is-an-example-of-a-complex-string"
    );
  });
});

describe("snakeCase", () => {
  it("replaces spaces with underscores and makes all letters lowercase", () => {
    expect(snakeCase("hello world")).toBe("hello_world");
  });

  it("replaces spaces with underscores and makes all letters lowercase with all caps", () => {
    expect(snakeCase("HELLO WORLD")).toBe("hello_world");
  });

  it("replaces spaces with underscores and makes all letters lowercase with mixed caps", () => {
    expect(snakeCase("HeLLo WoRLd")).toBe("hello_world");
  });

  it("replaces spaces with underscores and makes all letters lower case on complex strings", () => {
    expect(snakeCase("This is an example of a COMPLEX string")).toBe(
      "this_is_an_example_of_a_complex_string"
    );
  });

  it("replaces spaces with underscores and makes all letters lower case on a string containing extra spaces", () => {
    expect(snakeCase("  ??what the    heck   ")).toBe("what_the_heck");
  });
});

describe("camelCase", () => {
  it("removes spaces and capitalizes the first letter of each word", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
  });

  it("removes spaces and capitalizes the first letter of each word with all caps", () => {
    expect(camelCase("HELLO WORLD")).toBe("helloWorld");
  });

  it("removes spaces and capitalizes the first letter of each word with mixed caps", () => {
    expect(camelCase("HeLLo WoRLd")).toBe("helloWorld");
  });

  it("removes spaces and capitalizes the first letter of each word on complex strings", () => {
    expect(camelCase("This is an example of a COMPLEX string")).toBe(
      "thisIsAnExampleOfAComplexString"
    );
  });

  it("removes spaces and capitalizes the first letter of each word on a string containing extra spaces", () => {
    expect(camelCase("  ??what the    heck   ")).toBe("whatTheHeck");
  });
});

describe("shift", () => {
  it("shifts the first letter of a string to the end", () => {
    expect(shift("hello", 1)).toBe("elloh");
  });

  it("shifts the first two letters of a string to the end", () => {
    expect(shift("hello", 2)).toBe("llohe");
  });

  it("shifts the first letter of a string to the end on a complex string", () => {
    expect(shift("hello world", 1)).toBe("ello worldh");
  });

  it("shifts the first two letters of a string to the end on a complex string", () => {
    expect(shift("hello world", 2)).toBe("llo worldhe");
  });
});

describe("makeHashTag", () => {
  it("returns array with a hashtag in front of each word", () => {
    expect(makeHashTag("hello world")).toEqual(["#Hello", "#World"]);
  });

  it("only returns the three longest words of an array", () => {
    expect(makeHashTag("hello world, how is it going today")).toEqual([
      "#Hello",
      "#Going",
      "#World",
    ]);
  });
});
