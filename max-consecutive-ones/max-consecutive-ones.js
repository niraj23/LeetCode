/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    counter = 0;
    max = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            counter++;
        }else{
            max = Math.max(max, counter);
            counter = 0;
        }
    }
        return Math.max(max, counter);

};