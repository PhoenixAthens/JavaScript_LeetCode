//Runtime: 74ms beats 98.35%, Memory: 45MB beats 95.4%
var partitionString = function(s) {
    let array = [];
    for(let i=0;i<26;i++)array[i]=0
    let count=0;
    for(let i=0;i<s.length;i++){
        let val=s.charCodeAt(i)
        if(array[122-val]===1){
            count++;
            for(let i=0;i<26;i++)array[i]=0
        }
        array[122-val]=1;
    }
    return count+1;
};