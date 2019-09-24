## generator 函数原理

```js
function* interator() {
  const a = yield '23'
  console.log(a)
}

var gen = interator()
console.log(gen.next())
```

#### 执行：
```js
node example.js
{ value: '23', done: false }
```
