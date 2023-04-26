/**
 * @param {TreeNode} root
 * @return {number}
 */
// Runtime: 170ms beats 79.75%, Memory: 65.9MB beats 11.3%
function TreeNode(val, left, right) {
    //This function returns an object with the following fields
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var longestZigZag = function(root) {
    const max = [0]
    dfs(root,true,0,max);
    dfs(root,false,0,max);
    return max[0];
};
const dfs = function(root,goLeft,count,maximum){
    if(root==null)return;
    maximum[0]=Math.max(count,maximum[0]);
    if(goLeft){
        dfs(root.left,false,count+1,maximum);
        dfs(root.right,true,1,maximum);
    }else{
        dfs(root.right,true,count+1,maximum);
        dfs(root.left,false,1,maximum);
    }
}