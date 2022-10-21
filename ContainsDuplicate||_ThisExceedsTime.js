var containsNearbyDuplicate = function(nums, k) {

    let temp=[];
    for(let x=0;x<nums.length;x++){
        if(temp.includes(nums[x])){
            let a=temp.lastIndexOf(nums[x]);
            temp.push(nums[x]);
            let l=temp.lastIndexOf(nums[x]);
            if(Math.abs(a-l)<=k){
                console.log("hi")
                return true;
            }
        }else{
            temp.push(nums[x]);
        }
    }
    return false;

};
console.log(containsNearbyDuplicate([1,2,3,1,2,3],1));
