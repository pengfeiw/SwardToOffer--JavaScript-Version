//题目：
//     输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历都不含重复的数字。
//   例如，前序遍历：{1, 2, 4, 7, 3, 5, 6, 8}和中序遍历{4, 7, 2, 1, 5, 3, 8, 6}, 则结果如下
//              1   
//             /  \
//            2    3
//           /    / \
//          4    5   6
//           \       /
//            7     8 

function BinaryTreeNode(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function refactorBinaryTree(preTraversal, midTraversal) {
    if (preTraversal.length === 0) return;
    var root = new BinaryTreeNode(preTraversal[0], null, null);
    if (preTraversal.length === 1) {
        return root;
    }
    else if (preTraversal.length === 2) {
        let right = new BinaryTreeNode(preTraversal[1], null, null);
        root.right = right;
        return root;
    }
    else {
        let midLeft = [];   //中序遍历的左子树
        let midRight = [];     //中序遍历的右子树
        let preLeft = [];
        let preRight = [];

        let isLeftPush = true;
        for (let i = 0; i < midTraversal.length; i++) {
            if (midTraversal[i] === root.value) {
                isLeftPush = false;
            }
            else {
                if (isLeftPush) {
                    midLeft.push(midTraversal[i]);
                }
                else {
                    midRight.push(midTraversal[i]);
                }
            }
        }
        
        for (let i = 1; i < preTraversal.length; i++){
            if (midLeft.indexOf(preTraversal[i]) === -1){
                preRight.push(preTraversal[i]);
            }
            else {
                preLeft.push(preTraversal[i]);
            }
        }

        root.left = refactorBinaryTree(preLeft, midLeft);
        root.right = refactorBinaryTree(preRight, midRight);
        return root;
    }
}

//测试
console.log(refactorBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]));

//将结果在canvas上绘制成树
function drawTree(root){
    var canvas = document.getElementById('cav');
    var ctx = canvas.getContext('2d');
    var width = canvas.getBoundingClientRect().width;
    drawTreeNode(root, ctx, width * 0.5, 20 );
}

function drawTreeNode(treeNode, ctx, posX, posY){
    if (!treeNode) return;
    var value = treeNode.value;
    ctx.font = '15px serif';
    ctx.fillText(value, posX, posY, 10);

    if (treeNode.left){
        ctx.beginPath();
        ctx.moveTo(posX, posY + 10);
        ctx.lineTo(posX - 10, posY + 20);
        ctx.stroke();

        drawTreeNode(treeNode.left, ctx, posX - 20, posY + 20);
    }
    if (treeNode.right){
        ctx.beginPath();
        ctx.moveTo(posX + 10, posY + 10);
        ctx.lineTo(posX + 20, posY + 20);
        ctx.stroke();
        drawTreeNode(treeNode.right, ctx, posX + 20, posY + 20);
    }
}

drawTree(refactorBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]));