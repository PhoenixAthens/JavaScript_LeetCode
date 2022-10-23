const calculationInKnots=function(v,u){
    let val=Math.pow(v,2)-Math.pow(u,2);
    console.log("Value of 2as is: "+val);
    return val;
}
const calculationInMS=function(v,u){
    let val=(Math.pow(v,2)-Math.pow(u,2))*0.516;
    console.log("Value of 2as in M/s is: "+val);
    return val;
}
const main=function(v,u){
    let valueFromKnots=calculationInKnots(v,u)/100;
    let valueFromM_S=calculationInMS(v,u)/100;
    console.log(valueFromKnots-valueFromM_S);
}
main(7,2);