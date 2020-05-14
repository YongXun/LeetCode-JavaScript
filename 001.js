// 剑指offer 01 二维数组中的查找
//题目描述
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。


//自解
let arr = [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 8]
]

var findNumberIn2DArray = function(matrix, target) {
    for (let numarr of matrix) {
        if (numarr[numarr.length - 1] < target) {
            continue;
        } else if (numarr[numarr.length - 1] == target) {
            return true;
        } else if (numarr[numarr.length - 1] > target) {
            for (let num of numarr) {

            }
        }
    }
    return false;
};

//网络优解
var findNumberIn2DArray = function(matrix, target) {
    if (matrix.length == 0) { return false; }
    let [x, y] = [0, matrix.length - 1];
    while (x < matrix[0].length && y >= 0) {
        if (matrix[y][x] > target) {
            y--;
        } else if (matrix[y][x] < target) {
            x++;
        } else {
            return true;
        }
    }
    return false;
}
