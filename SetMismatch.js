var findErrorNums = function(nums) {
    if(nums.length===2  && nums[0]===1){
        return [1,2];
    }
    let returnArray=[];
    let prev=[nums[0]]
    let missing=0
    for(let a=1;a<nums.length;a++){
        if(!nums.includes(a)){
            missing=a;
        }
        if(prev.includes(nums[a])){
            returnArray.push(nums[a]);
        }else{
            prev.push(nums[a]);
        }
    }
    if(missing===0){
        returnArray.push(nums.length);
    }else{
        returnArray.push(missing);
    }
    return returnArray;
};
console.log(findErrorNums([2,3,2]))
