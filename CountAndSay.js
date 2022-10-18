var countAndSay = function(n) {
    if(n==1){
        return counter(n);
    }else{
        return counter(countAndSay(n-1));
    }
};
let counter=function(n){
    let mainArray=[];
    let prev=n[0];
    let counter=1;
    if(n.length===1){
        mainArray.push(counter);
        mainArray.push(prev);
    }else{
        for(let i=1;i<n.length;i++){
            if(n[i]===prev){
                counter++;
            }else{
                mainArray.push(counter);
                mainArray.push(prev);
                counter=1;
                prev=n[i];
            }
            if(i===n.length-1){
                mainArray.push(counter);
                mainArray.push(prev);
            }
        }
    }
    return mainArray.join("");

}