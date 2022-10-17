function checkIfPangram(sentence){
    if(sentence.length<26){ return false; }
    let arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let tempo=Array.from(sentence);
    let counter=0
    arr.forEach(a=>{
        if(tempo.includes(a)){
            counter++;
        }
    });
    if(counter===26){
        return true;
    }else{
        return false;
    }
}
console.log(checkIfPangram("leetcode"));