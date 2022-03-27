/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let value = [];
    
    const dfs = (node) => {
        if(!node) return;
        if(node.left) dfs(node.left);   //traverse left subtree
        value.push(node.val);           //inorder
        if(node.right) dfs(node.right); //traverse right subtree
    }
    
    dfs(root);
    return value;
};