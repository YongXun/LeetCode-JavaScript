//剑指015 反转链表
//定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let node = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return node;
};
