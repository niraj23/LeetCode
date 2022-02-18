/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let newSet = new Set();
    let left = 0;
    let right = 0;
    let max = 0;
    
    while(right < s.length) {
        if(!newSet.has(s.charAt(right))){
            newSet.add(s.charAt(right))
            max = Math.max(max, newSet.size)
            right++
        } else {
            newSet.delete(s.charAt(left))
            left++
        }
    }
    return max;
};