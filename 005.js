//剑指offer 005 用两个栈实现队列
// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
//(若队列中没有元素，deleteHead 操作返回 -1 )

//  

// 示例 1：

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]
// 示例 2：

// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]

var CQueue = function() {
    this.inStack = [];
    this.outStack = [];
};


CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value);
}

CQueue.prototype.deleteHead = function() {
    //假如In栈Out栈都没有元素
    if(!(this.inStack.length||this.outStack.length)){
        return -1;
    }
    //Out栈有待出栈的元素
    else if(this.outStack.length){
        return this.outStack.pop();
    }
    //Out栈没有有待出栈的元素但是In栈不为空
    else{
        while(this.inStack.length){
            this.outStack.push(this.inStack.pop())
        }
        return this.outStack.pop();
    }
};
