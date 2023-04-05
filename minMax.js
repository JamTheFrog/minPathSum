var minimizeArrayValue = function(nums) {
    let sum = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      res = Math.max(res, Math.ceil(sum / (i+1)));
    }
    return res;
  };


minimizeArrayValue([2,5,1,5,8,2,9,4,7,5,3,6,7])