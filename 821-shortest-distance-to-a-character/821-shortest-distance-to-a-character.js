/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    var arr2 = []
    var index = Infinity;
    for(let i= s.length-1; i>=0; i--){
        if(s[i] === c){
            index = i;
            arr2[i] = 0
        }else{
            arr2[i] = index;
        }

    }
    index = +Infinity
    
     for(let i=0; i<s.length; i++){
        if(s[i] === c){
            index = i;
        }
         if(index !== 0 || arr2[i] !== 0){
            arr2[i] =  Math.min(Math.abs(index-i), Math.abs(arr2[i]-i) );

        }
    }
    return arr2
};