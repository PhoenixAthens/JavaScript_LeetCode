const generator=require("./GenerateTestCases");
//The generic solution will cause problems when the strings contain punctuation marks!
function LongestWord_GenericSolution(str){
    const arrayFromString = str.split(" ");
    let maxLen=0;
    for(let i=0;i<arrayFromString.length;i++){
        maxLen=Math.max(maxLen,arrayFromString[i].length);
    }
    return maxLen ;
}
function LongestWord_Solution1(str){
    let maxLen=0;
    let tempLen=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===' '||str[i]==='!'||str[i]===','||str[i]==='.'||str[i]===';'||str[i]==='!'||str[i]===':'){
            maxLen=Math.max(maxLen,tempLen);
            tempLen=0;
        }else{
            tempLen++;
        }
    }
    return Math.max(maxLen,tempLen);
}
function LongestWord_Solution1ButBetter(str){
    let maxLen=0;
    let tempLen=0;
    for(let i=0;i<str.length;i++){
        if((str[i]>='A' && str[i]<='Z' )|| (str[i]>='a' && str[i]<='z')){
            tempLen++;
        }else{
            maxLen=Math.max(maxLen,tempLen);
            tempLen=0;
        }
    }
    return Math.max(maxLen,tempLen);
}

console.log(`Generic: ${LongestWord_GenericSolution("The quick brown fox jumps over the lazy dog")}, Better: ${LongestWord_Solution1("The quick brown fox jumps over the lazy dog")}`);
console.log(`Generic: ${LongestWord_GenericSolution("I love solving problems")}, Better: ${LongestWord_Solution1("I love solving problems")}`);
console.log(`Generic: ${LongestWord_GenericSolution("Hello, World!")}, Better: ${LongestWord_Solution1("Hello, World!")}`);
console.log(`Generic: ${LongestWord_GenericSolution("")}, Better: ${LongestWord_Solution1("")}`);
console.log(`Generic: ${LongestWord_GenericSolution("A")}, Better: ${LongestWord_Solution1("A")}`);
console.log("----------------------------------------------");
console.log(`One with Better if-else: ${LongestWord_Solution1ButBetter("The quick brown fox jumps over the lazy dog")}`);
console.log(`One with Better if-else: ${LongestWord_Solution1ButBetter("I love solving problems")}`);
console.log(`One with Better if-else: ${LongestWord_Solution1ButBetter("Hello, World!")}`);
console.log(`One with Better if-else: ${LongestWord_Solution1ButBetter("")}`);
console.log(`One with Better if-else: ${LongestWord_Solution1ButBetter("A")}`);
let string=generator();
console.log(string);
console.log(`using generated testCase: ${LongestWord_Solution1ButBetter(string)} `)