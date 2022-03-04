/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let movebackby = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === val) {
            movebackby++;
        } else {
            if (movebackby) {
                nums[i - movebackby] = nums[i];
                nums[i] = val;
            }
        }
    }
    
    return nums.length - movebackby
};