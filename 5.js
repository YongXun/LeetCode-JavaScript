var reverse = function(x) {
    //取符号
    let sign = Math.sign(x);
    //1.取绝对值2.转换成字符串3.字符串转数组4.数组翻转5.翻转后的数组转字符串6.最后乘以符号取正负
    let num = ((Math.abs(x).toString()).split('').reverse().join(''))*sign;
    if(num>-Math.pow(2,31)&&num<Math.pow(2,31)-1){return num}
    else{return 0}
};
