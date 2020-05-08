var deleteNode = function(node) {
    let next = node.next;
    node.val = next.val;
    node.next = node.next.next;
};
