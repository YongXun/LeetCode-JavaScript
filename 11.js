var myAtoi = function(str) {
    let res = parseInt(str);
    let [intMax,intMin] = [Math.pow(2,31)-1,Math.pow(-2,31)];
    return isNaN(res)?0:Math.max(Math.min(res,intMax),intMin);
};
