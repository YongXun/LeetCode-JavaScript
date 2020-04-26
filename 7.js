var maxArea = function(height) {
    let maxArea = 0;
    for(let i = 0; i < height.length; i++){
        for(let j = 0; j < height.length; j++){
            if(i == j){continue;}
            else{
                let area = Math.min(height[i],height[j])*Math.abs(i-j);
                maxArea = area>maxArea?area:maxArea;
            }
        }
    }
    return maxArea;
};
