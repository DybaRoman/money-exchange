// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins ={H:50, Q:25, D:10, N:5, P:1};
    if (currency < 1) coins ={}
    else if (currency > 10000) coins = {error: "You are rich, my friend! We don't have so much coins for exchange"}
    else for (let c in coins) {
      let coin = coins[c];
      coins[c] = Math.floor(currency / coin);
      currency = currency - coins[c]*coin;
      if (coins[c] == 0) delete coins[c];
    }
    return coins;
}
