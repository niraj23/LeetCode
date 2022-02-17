/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0]
    
    for(let i = 0; i < prices.length; i++){
        min = Math.min(prices[i], min)
        const currentProfit = prices[i] - min;
        max = Math.max(currentProfit, max)
    }
    return max
};