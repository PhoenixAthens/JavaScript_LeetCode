var reverseVowels = function(s) {
    let vowels=["A","a","e","E","I","i","o","O","U","u"];
    let stack=[];
    let ArrayFromS=s.split("");
    ArrayFromS.forEach(x=>{
        if(vowels.includes(x)){
            stack.push(x);
        }
    });
    let ring="";
    ArrayFromS.forEach(x=>{
        if(vowels.includes(x)){
           ring+=stack.pop();
        }else{
            ring+=x;
        }
    })
    return ring;
};
console.log(reverseVowels("Hello"));
