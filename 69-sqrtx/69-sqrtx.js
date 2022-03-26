/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 0;
    let j = 1;
    if (x===0) return 0
    while(x-j >= 0){
        i++
        x = x-j
        j+=2     
    }
    return i
};