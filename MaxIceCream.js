var maxIceCream = function(costs, coins) {
    costs.sort((a,b)=>{
        return a-b;
    });
    if(costs.length===0|| coins===0 ||costs[0]>coins){
        return false;
    }
    let HowMany=0;
    costs.forEach(a=>{
        coins-=a;
        if(coins<0){
            return HowMany;
        }else{
           HowMany++;
        }
    });
    return HowMany;
};
console.log(maxIceCream([10,2,10,10,10,10,8,2,7,8],25));
