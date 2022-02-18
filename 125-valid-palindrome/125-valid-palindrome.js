/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/ig, "")
    return str === str.split('').reverse().join('') ? true : false
};