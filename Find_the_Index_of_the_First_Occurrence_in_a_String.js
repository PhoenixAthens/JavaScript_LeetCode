//Date 3rd March
//Runtime: 52ms beats 97.7%, Memory: 41.2MB beats 98.94%;

//Replacing .substring(begin,end) with a for loop

//Runtime: 57ms beats 89.45%, Memory: 42.4MB beats 20.15%;
const strStr = function (haystack, needle) {
    if(needle.length<=haystack.length){
        for(let i=0;i<haystack.length;i++){
            if(haystack.charAt(i)===needle.charAt(0) && (i-1)+needle.length<haystack.length){
                let j=0
                for(;j<needle.length;j++){
                    if(haystack[i+j]!==needle[j]){
                        break;
                    }
                }
                if(j===needle.length)return i;
            }
        }
    }
    return -1;

};