/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//Runtime: 62ms beats 63.4%, Memory: 42.7Mb beats 25.55%
var kidsWithCandies = function(candies, extraCandies) {
    let array = [];
    let maxVal = 0;
    candies.filter((x)=>{
        maxVal=Math.max(maxVal,x);
    });
    for(let i = 0;i < candies.length;i++){
        if(candies[i]+extraCandies >= maxVal)array[i] = true;
        else array[i] = false;
    }
    return array;
};
arr = kidsWithCandies([2,3,5,1,3],3);
console.log(arr);
