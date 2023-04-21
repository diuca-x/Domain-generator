

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

pronoun.forEach((first) =>
  adj.forEach((second) =>
    noun.forEach((third) => console.log(first + second + third + ".com"))
  )
);
