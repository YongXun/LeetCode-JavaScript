//剑指003 从尾到头打印链表
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

function ListNode(val) {
    this.val = val;
    this.next = null;
}
//自解
var reversePrint = function(head) {
    //创建一个空数组用来存储链表的值，当链表为空时，直接返回空数组
    let arr = [];
    while (head) {
        //遍历链表，利用unshift方法在数组第一个位置添加链表的值。
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
};
