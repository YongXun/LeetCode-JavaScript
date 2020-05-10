var getIntersectionNode = function(headA, headB) {
    let pA = headA , pB = headB;
    while(pA != pB){
        pB = pB ? pB.next : headA;
        pA = pA ? pA.next : headB;
    }
    return pA;
};
