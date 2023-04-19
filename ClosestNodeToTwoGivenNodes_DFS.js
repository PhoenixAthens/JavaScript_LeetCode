/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
// Runtime: 414ms beats 26.67%, Memory: 84MB beats 26.67%
const DFS=function(dist,visited,edges,node){
    if(!visited[node]){
        visited[node]=true;
        const neighbor = edges[node];
        if(neighbor!==-1 && !visited[neighbor]){
            dist[neighbor]=1+dist[node];
            DFS(dist,visited,edges,neighbor);
        }
    }
}
var closestMeetingNode = function(edges, node1, node2) {
    const visited1 = [].fill(false,0,edges.length);
    const visited2 = [].fill(false,0,edges.length);
    const dist1 = [].fill(-27,0,edges.length);
    const dist2 = [].fill(-27,0,edges.length);
    dist1[node1]=0;
    dist2[node2]=0;
    DFS(dist1,visited1,edges,node1);
    DFS(dist2,visited2,edges,node2);
    let currResult= -1;
    let maxDistTillNow = 2_000_000_000;
    for(let i=0;i<edges.length;i++){
        if(dist1[i]===-27 || dist2[i]===-27)continue;
        let tempMax = Math.max(dist2[i],dist1[i]);
        if(tempMax<maxDistTillNow){
            maxDistTillNow=tempMax;
            currResult=i;
        }
    }
    return currResult;
};
