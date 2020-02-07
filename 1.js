var twoSum = function(nums, target) {
    let a, b;
    for (let i = 0; i < nums.length; i++) {
        b = nums.indexOf(target - nums[i]);
        if (b > -1 && b != i) {
            a = i;
            break;
        }
    }
    return [a, b];
};

//比较快捷的方法，一轮循环，直接求出列表中，利用indexOf()方法，符合当前循环的数的索引。
