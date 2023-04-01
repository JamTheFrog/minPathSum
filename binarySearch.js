var search = function(nums, target) {
    let left = 0
    let right = nums.length-1
    let middle = Math.floor((left+right)/2)
   while(nums[middle] !== target && left <= right){
        if(target > nums[middle]) left = middle + 1
        else right = middle - 1
        middle = Math.floor((left+right)/2)
    }
    return nums[middle] === target ? middle : -1
};

console.log(search([0, 1, 2, 3, 4, 5, 8, 11, 21], 7))