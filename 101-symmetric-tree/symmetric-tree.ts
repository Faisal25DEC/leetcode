/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function isMirror(root1:TreeNode | null , root2:TreeNode | null):boolean{
    
    let res = false

    if(root1 && root2){
         res =  (root1.val === root2.val) && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
         return res;
    }
    console.log(res)
    return root1 === root2

    
 }

function isSymmetric(root: TreeNode | null): boolean {
        return root === null || (isMirror(root.left, root.right))
};