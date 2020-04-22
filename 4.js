var findMedianSortedArrays = function(nums1, nums2) {

    nums3 = (nums1.concat(nums2)).sort(function (a,b){return a-b});

    len = nums3.length;

    if(nums3.length%2 == 0){

        return (nums3[len/2-1]+nums3[len/2])/2;

    }

    else{

        return nums3[(len+1)/2-1];

    }           

};

//未达到算法复杂度的要求
