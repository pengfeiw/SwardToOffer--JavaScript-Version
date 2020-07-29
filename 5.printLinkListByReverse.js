//题目：
//  从尾到头打印链表

function SingleLinkList(value, next) {
    this.value = value;
    this.next = next;
}

//解法一：后进先出，从头遍历链表，将节点放进栈中，然后依次出栈输出节点值
function reversePrint(head) {
    if (!head) return;
    //进栈操作
    var node = head;
    var stack = [head.value];
    while(node.next !== null){
        node = node.next;
        stack.push(node.value);
    }

    //出栈操作
    for(let i = stack.length - 1; i >= 0; i--){
        console.log(stack[i]);
    }
}

//解法二：递归法，由于递归本质上是一种栈结构。
function reversePrint2(head) {
    if (!head) return;
    if (head.next != null) {
        reversePrint2(head.next);
    }
    console.log(head.value);
}



//test
var node6 = new SingleLinkList(7, null);
var node5 = new SingleLinkList(6, node6);
var node4 = new SingleLinkList(5, node5);
var node3 = new SingleLinkList(4, node4);
var node2 = new SingleLinkList(3, node3);
var node1 = new SingleLinkList(2, node2);
var head = new SingleLinkList(1, node1);

reversePrint(head);