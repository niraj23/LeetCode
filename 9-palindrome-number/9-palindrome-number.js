/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    
    if(str === str.split("").reverse().join("")){
        return true
    }
    return false
    
};