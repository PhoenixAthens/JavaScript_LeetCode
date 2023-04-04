//using for-loop
//Runtime: 74ms beats 98.35%, Memory: 45MB beats 95.4%
//using array.fill
//Runtime: 85ms beats 94.22%, Memory: 45.3MB beats 95.4%
//using both together
//Runtime: 80ms beats 98.35%, Memory: 45.2MB beats 95.4%
var partitionString = function(s) {
    let array = [];
    for(i=0;i<26;i++)array[i]=0;
    let count=0;
    for(let i=0;i<s.length;i++){
        let val=s.charCodeAt(i)
        if(array[122-val]===1){
            count++;
            array.fill(0,0,26)
        }
        array[122-val]=1;
    }
    return count+1;
};