//剑指002 替换空格
//题目描述
// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
//例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

let str = "We are happy"
let str1 = ""
let str2 = "     "
let str3 = "   We are happy"
//自解
var replaceSpace = function(s) {
    let res = '';
    s.split('').map(char => {
        if (char == ' ') {
            res += '%20'
        } else {
            res += char;
        }
    })
    return res;
};
    //网络优解
var replaceSpace = function(s) {
    return s.replace(/ /g, '%20');
};
console.log(replaceSpace(str))
console.log(replaceSpace(str1))
console.log(replaceSpace(str2))
console.log(replaceSpace(str3))
