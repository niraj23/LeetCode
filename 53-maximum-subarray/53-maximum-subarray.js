/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = (nums) => {
    let ans=nums[0]
    let sum=0
    for (num of nums){
        if (sum<0){
            sum=0
        }
        sum+=num
        ans=Math.max(ans,sum)            
    }
    return ans
};

  