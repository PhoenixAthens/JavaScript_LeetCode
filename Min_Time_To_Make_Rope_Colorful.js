var minCost = function(colors, neededTime) {
    let totalTime=0
    for(let i=0;i<colors.length-1;i++){
        if(colors.charAt(i)===colors.charAt(i+1)){
            if(neededTime[i]<neededTime[i+1]){
                totalTime+=neededTime[i]
            }else if(neededTime[i+1]<neededTime[i]){
                totalTime+=neededTime[i+1]
                let temp=neededTime[i]
                neededTime[i]=neededTime[i+1]
                neededTime[i+1]=temp
            }else{
                totalTime+=neededTime[i];
            }
        }

    }
    return totalTime
};
console.log(minCost("abaac",[1,2,3,4,5]))