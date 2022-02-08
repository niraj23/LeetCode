/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }
    let result = 0;
    let indexesToSkip = [];
    
    s.split('').forEach((el, idx) => {
        let twoChars = el + s[idx + 1];
        
        if(!indexesToSkip.includes(idx)){
            if(dict[twoChars]){
            // handle two values
            indexesToSkip.push(idx + 1)
            let valueToAdd = dict[twoChars];
            result += valueToAdd;
            } else {
            // handle single value
            result += dict[el]
            } 
        }
    })
    return result;
};