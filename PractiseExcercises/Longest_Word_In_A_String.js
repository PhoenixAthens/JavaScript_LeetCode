const generator=require("./GenerateTestCases");
//The generic solution will cause problems when the strings contain punctuation marks!
function LongestWord_GenericSolution(str){
    const arrayFromString = str.split(/(\W)/);
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
function LongestWord_IntermediateSol(str){
    return str.split(/(\W)/).reduce((x,y)=>{
        return Math.max(x,y.length);
    },0);
}
function LongestWord_AdvancesSolution(str){
    function mainWork(arr){
        if(arr.length===1){
            return arr[0].length;
        }
        if(arr[0].length>=arr[1].length){
            arr.splice(1,1);
            return mainWork(arr);
        }else{
            return mainWork(arr.splice(1,arr.length));
        }
        return arr[0].length;
    }
    return mainWork(str.split(/(\W)/));
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
console.log("----------------------------------------------");
console.log(`Intermediate Solution: ${LongestWord_IntermediateSol("The quick brown fox jumps over the lazy dog")}`)
console.log(`Intermediate Solution: ${LongestWord_IntermediateSol("I love solving problems")}`)
console.log(`Intermediate Solution: ${LongestWord_IntermediateSol("Hello, World! super-long")}`)
console.log(`Intermediate Solution: ${LongestWord_IntermediateSol("")}`)
console.log(`Intermediate Solution: ${LongestWord_IntermediateSol("A")}`)

//splice is used for replacing elements, this affects the original array.
let arr=["a","b","c","d"];
console.log(["a","b","c","d"].splice(0,3,"k","l","m"));
arr.splice(0,3,"k","l","m");
console.log(arr);
//slice is used for just creating a new array from an old one while the original array stays intact!
let barr=["a","b","c","d"]
console.log(["a","b","c","d"].slice(1,this.length));
barr.slice(1,this.length);
console.log(barr);

console.log("----------------------------------------------");
console.log(`Intermediate Solution: ${LongestWord_AdvancesSolution("The quick brown fox jumps over the lazy dog")}`)
console.log(`Intermediate Solution: ${LongestWord_AdvancesSolution("I love solving problems")}`)
console.log(`Intermediate Solution: ${LongestWord_AdvancesSolution("Hello, World! super-long")}`)
console.log(`Intermediate Solution: ${LongestWord_AdvancesSolution("")}`)
console.log(`Intermediate Solution: ${LongestWord_AdvancesSolution("A")}`)