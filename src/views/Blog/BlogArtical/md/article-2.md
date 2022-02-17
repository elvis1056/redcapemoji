
## JavaScript map()

### 重點整理文言文

- 產生 map 物件
- 在產生 Map 時也可以接收以下的參數
    - 有著迭代協議的物件結構
    - 陣列集合，類似 -- [['key1', 'value1'], ['key2', 'value2']]
- new Map([iterable])
Iterable 是一個陣列或其他iterable物件，該物件的元素皆是鍵/值成對的(例如兩個元素的陣列)
成對的鍵/值會被新增到新的Map。null會被作為undefined

#

### 重點整理白話文

- 產生 map 物件 ( new 方式，請直看範例 )
    - 產生時可使用 ( array 方式，請直看範例 )
- map 產生的參數
    - 可以用 for 迴圈取得 key、value
- 搭配 for..of 迭代循環可單獨取得所有的[key, value]
- 可以使用...擴展運算子取得陣列集合

#

---

#

```sh
let map1 = new Map();  // 使用new產生 Map 物件

// 放置陣列集合
let map2 = new Map([
    ['first', 1],
    [10, 'ten'],
    [{sayHi: 'Hi'}, 'obj']
]);

// 搭配 for...of 循環取得[key, value]
for (let [key, value] of map2) {
    // ...
}

// 搭配擴展運算子取得陣列集合
console.log([...map1]);
// []
console.log([...map2]);
// [
//    ['first', 1],
//    [10, 'ten'],
//    [{sayHi: 'Hi'}, 'obj']
// ]
```

#

---

#

### map 操作方法

- `set(key, value)`: 設置內容
- `get(key)`: 獲取指定 key 的內容，若找不到返回`undefined`
- `has(key)`: 檢查是否存在此 key，有則返回`ture`，無則返回`false`
- `delete(key)`: 刪除指定 key 的內容，成功返回`ture`，失敗返回`false`
- `clear()`: 刪除所有內容成員
- `size 屬性`: 取得內容成員總數

###

```
let map = new Map();

map.set('first', 1);
map.set(10, 'ten');
map.set({sayHi: 'Hi'}, 'obj');
map.set(() => 'key', 123);
map.set(Symbol('items'), [1, 2]);

map.get(10)    // 'ten'
map.has('first')    // 'ture'

map.delete('first') 
map.get('first')    // undefined

map.size    // 4
map.clear()
map.size    // 0
```

#

---

#

參考文章：

[https://ithelp.ithome.com.tw/articles/10196113](https://ithelp.ithome.com.tw/articles/10196113)

[https://ithelp.ithome.com.tw/articles/10191607](https://ithelp.ithome.com.tw/articles/10191607)
