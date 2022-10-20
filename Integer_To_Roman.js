var intToRoman = function(num) {
    let arab=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let symbols=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let main="";
    for(let i=0;i<arab.length;i++){
        while(num-arab[i]>=0){
            main+=symbols[i];
            num-=arab[i];
        }
    }
    return main;
};
console.log(intToRoman(9));