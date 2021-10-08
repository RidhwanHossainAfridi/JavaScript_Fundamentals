/*
You are working on a Store Manager program, which stores the prices in an array.
You need to add functionality to increase the prices by the given amount.
The increase variable is taken from user input. You need to increase all the prices in the given array by that amount and output to the console the resulting array.
*/
    var increase = 9;
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    var newPrices = [];
    for(var i = 0 ; i<prices.length;i++){
        newPrices[i] = prices[i] + increase;
    }
    console.log(newPrices);

