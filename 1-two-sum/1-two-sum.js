/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let newMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        let num1 = nums[i];
        let num2 = target - num1;
    if(newMap.has(num2)){
        return [i, newMap.get(num2)];
    }
    newMap.set(num1, i) 
    }
};