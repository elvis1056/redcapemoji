# [演算法] leetcode - Best Time to Buy and Sell Stock

## 題目

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

有一個陣列儲存 i 個數字，這些元素代表每一天股票的價格。
如果在一天中只能做一次交易(買一次然後賣一次)，設計一個演算法求得最大獲利。

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

## 解題思路

由於只能買一次賣一次

- 想當然最理想的情況就是，買在最低點賣在最高點
- 因為題目已經幫我們假設這是每一天的價格，當然也不需要考慮往過去賣的情況
- 需要考慮假使是一到兩年的資料量（第一個解法 timeout 後發現才另外補上）

#

了解過後開始

### 解法一

```sh
var maxProfit = function(prices) {
  let ans = []; // 儲存全部的結果
  // 透過兩個迴圈，將每一天會賺的最高值紀錄下來並寫回 ans 這個陣列之中
  for (let i=0; i<prices.length; i++) {
    let result = prices[i]; // 每一天的價格
    let earn = 0; // 假使未來每一天的時間點賣掉都沒有賺錢，那就會是賺 0 元
    for (let j=i+1; j<prices.length; j++) {
      if (prices[j] - result > earn) { // 在未來的時間賣出價格比上一次的高，那就把賺的最高價替換掉
        earn = prices[j] - result
      }
    }
    ans.push(earn)
  }

  return ans.sort((a,b) => b - a)[0];
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))

```

#

想當然使用了最直覺的寫法但發現 Timeout

是因為跑了兩次的迴圈導致耗時指數型成長

重新思考後，並有參考了一些人的做法，消化過後

### 解法二

```
var maxProfit = function(prices) {
    let profit = 0; // 最慘就是買進就不賺錢
    let minPrice = prices[0]; // 找到最低點買進
    // 跑一個迴圈，隨著時間經過來找上面兩個答案
    // prices[0] 已經被當作初始值，所以迴圈不從 0 而是從 1 開始
    for(let i = 1; i < prices.length; ++i) {
        // 假如有比紀錄的最低價低，那就把這個價格當新低價
        if (minPrice > prices[i]) {
            minPrice = prices[i]
        }
        // 如果當下這個價格減去最低價賺的錢比較多，那就更新成賺最多的這次
        if (prices[i] - min > profit) {
            profit = prices[i] - min
        }
    }

    return profit // 根據要求回傳賺多少
}
```

#

以上是這次的心得分享，假使喜歡幫我按個喜歡，感謝
