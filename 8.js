var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b)=>{return a-b;});
    //如果数组长度小于3，直接返回。
    if(nums.length<3){return[]};
    //如果最小数大于0或者最大数小于0，直接返回。
    if(nums[0]>0||nums[nums.length-1]<0){return[];}
    for(let item = 0; item<nums.length-1 ; item++){
        //去重操作，检查检测值是否与上个检测值相同
        if(nums[item]==nums[item-1]){continue;}
        //
        if(item==nums.length-2){break;}
        //定义头指针和尾指针
        let [head,tail] = [item+1,nums.length-1];
        while(head<tail){
            //去重操作，检查头指针是否与上个头指针相同
            if(nums[head]==nums[head-1]&&head-1!=item){head=head+1;continue;}
            //去重操作，检查尾指针是否与上个尾指针相同
            if(nums[tail]==nums[tail+1]){tail=tail-1;continue;}
            if(nums[head]+nums[tail]==-nums[item]&&head!=tail){
                let foo = [nums[item],nums[head],nums[tail]];
                res.push(foo);
                head = head + 1;
                continue;
                }
            else if(nums[head]+nums[tail]+nums[item]>0){tail=tail-1;continue;}
            else if(nums[head]+nums[tail]+nums[item]<0){head=head+1;continue;}
        }
    }
    return res;
};
