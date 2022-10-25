var arrayStringsAreEqual = function(word1, word2) {
    const v1=word1.join("");
    const v2=word2.join("");
    return v1 === v2;
};
console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))