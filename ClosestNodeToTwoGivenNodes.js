/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
// Runtime: 378ms beats 28.57%, Memory: 75.6MB beats 50%
var closestMeetingNode = function(edges, node1, node2) {
    const dist1 = [].fill(-27,0,edges.length);
    const dist2 = [].fill(-27,0,edges.length);
    bfs(dist1,edges,node1);
    bfs(dist2,edges,node2);
    let currResult=-1;
    let maxDistTillNow = 2_000_000_000;
    for(let i=0;i<edges.length;i++){
        if(dist1[i]===-27 || dist2[i]===-27)continue;
        else{
            const tempMax = Math.max(dist1[i],dist2[i]);
            if(tempMax<maxDistTillNow){
                currResult=i;
                maxDistTillNow=tempMax;
            }
        }
    }
    return currResult;
};
const bfs=function(dist,edges,node){
    const boolArray = [].fill(false,0,edges.length);
    dist[node]=0;
    let presentNode = node;
    while(presentNode!==-201){
        if(boolArray[presentNode])break;
        boolArray[presentNode]=true;
        let neighbor = edges[presentNode];
        if(neighbor!==-1 && !boolArray[neighbor]){
            dist[neighbor]=1+dist[presentNode];
            presentNode=neighbor;
        }else{
            presentNode=-201;
        }
    }
}
console.log(closestMeetingNode([2,2,3,-1],0,1));
console.log(closestMeetingNode([1,2,-1],0,2));