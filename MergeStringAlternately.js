/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
//Runtime: 55ms beats 79.44%, Memory: 42.6MB beats 27.35%
    //Minor Tweaks
// Runtime: 50ms beats 94.1%, Memory: 42MB beats 80.84%

var mergeAlternately = function(word1, word2) {
    const lenWord1=word1.length;
    const lenWord2=word2.length;
    if(lenWord1>lenWord2){
        let tempR = alternator(word1,word2,lenWord1,lenWord2);
        let i=lenWord2;
        let count = (lenWord2*2);
        while(i<lenWord1){
            tempR[count++]=word1[i];
            i++
        }
        return tempR.join("");
    }else if(lenWord2>lenWord1){
        let tempR = alternator(word1,word2,lenWord2,lenWord1);
        let i=lenWord1;
        let count = (lenWord1*2);
        while(i<lenWord2){
            tempR[count++]=word2[i];
            i++
        }
        return tempR.join("");
    }else{
        return alternator(word1,word2,lenWord1,lenWord2).join("");
    }
};
const alternator=function(word1, word2, biggy, notSo){
    let charArray = [].fill('a',biggy+notSo);
    let i=0;
    let count=0;
    while(i<notSo){
        charArray[count++]=word1[i];
        charArray[count++]=word2[i];
        i++;
    }
    return charArray;
}