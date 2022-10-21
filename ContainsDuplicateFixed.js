var containsNearbyDuplicate = function(nums, k) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            let a=map.get(nums[i]);
            map.set(nums[i],i);
            let l=map.get(nums[i]);
            if(Math.abs(a-l)<=k){
                return true;
            }
        }else{
            map.set(nums[i],i);
        }
    }
    return false;
};
console.log(containsNearbyDuplicate([1,2,3,1,2,3],1));
