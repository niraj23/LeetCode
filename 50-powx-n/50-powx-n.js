/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x === 0 || x === 1) return x;
    if(n === 0) return 1;
    
    return Math.pow(x,n).toFixed(5)
};