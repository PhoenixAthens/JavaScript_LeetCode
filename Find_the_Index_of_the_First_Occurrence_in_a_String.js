//Date 3rd March
//Runtime: 52ms beats 97.7%, Memory: 41.2MB beats 98.94%;
const strStr = function (haystack, needle) {
    const lenOfNeedle=needle.length;
    const lenOfHaystack=haystack.length;
    if(lenOfNeedle<=lenOfHaystack){
        for (let i=0;i<lenOfHaystack;i++){
            if(haystack.charAt(i)===needle.charAt(0) && (i-1)+lenOfNeedle<lenOfHaystack){
                const subString=haystack.substring(i,i+lenOfNeedle);
                if(subString===needle)return i;
            }
        }
    }
    return -1;

};