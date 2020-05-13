var getKthFromEnd = function(head, k) {
    let L = new ListNode(NaN);
    let R = new ListNode(NaN);
    [L,R] = [head,head];
    //R先走k步
    while(k){
        k = k - 1;
        R = R.next;
    }
    while(R){
        R = R.next;
        L = L.next;
    }
    return L;
};
