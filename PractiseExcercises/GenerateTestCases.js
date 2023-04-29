
function generateTestCases(){
    let length=Math.random()*100;
    let string="";
    for(let i=0;i<length;i++){
        let num=(Math.random()*(122-32+1)+32).toFixed(0);
        string+=String.fromCodePoint(num);
    }
    return string;
}
console.log(String.fromCodePoint(122));
console.log(" ".charCodeAt());
console.log(generateTestCases());
module.exports=generateTestCases;