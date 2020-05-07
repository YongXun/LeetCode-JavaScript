var removeDuplicates = function(nums) {
        let [head,tail] = [0,1];
        while(nums[head+1] != undefined){
            //头、尾指针相同，尾指针前进1
            if(head == tail){tail++;continue;}
            //头、尾指针当前值相同，删除尾指针当前值
            else if(nums[head] == nums[tail]){nums.splice(tail,1);continue}
            //头、尾指针当前值不同，头指针前进1
            else if(nums[head] != nums[tail]){head++;continue;}
        }
        return nums.length;
    }
