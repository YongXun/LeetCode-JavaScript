var kthToLast = function(head, k) {
    let [L,R] = [head,head];
    //R先走K步，让R在L前面k步
    while(k > 0){
        R = R.next;
        k--;
    }
    //L,R一起走，当R走到末尾，则L刚好处于倒数第K个位置
    while(R){
        L = L.next;
        R = R.next;
    }
    return L.val;
};
