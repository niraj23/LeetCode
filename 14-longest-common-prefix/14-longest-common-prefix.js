/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     lCP = ""
    let b = true;
    let count = 0;
    
    while(b != false && count <= strs[0].length){
        b = strs.every(x=> x.charAt(count) === strs[0].charAt(count))
        if (b) {
            lCP = lCP.concat(strs[0].charAt(count))
        }
        ++count
    }
    return lCP;
};